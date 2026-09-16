'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   Impact unit chart, drawn as extruded blocks in an oblique projection.

   One block = one stated unit of the figure above it (see IMPACT_STATS), so a
   stack is countable rather than decorative.

   Projection: the camera is a plain head-on orthographic view and the scene is
   sheared, which is how technical illustrators draw solids. That keeps world x
   exactly 1:1 with screen x, so each stack sits dead centre under its own
   figure, the baseline stays level and the stacks stay vertical - none of which
   a tilted camera gives you. The shear also keeps z, so depth sorting still
   works.

   Deliberately plain: one key light, flat materials, no bloom or emissive.
   --------------------------------------------------------------------------- */

const DEPTH_ANGLE = THREE.MathUtils.degToRad(33); // depth axis above horizontal
const DEPTH_SCALE = 0.46; // foreshortening along that axis

const COLUMNS = 4;
const BLOCK_W = 0.66; // of one column's width
const BLOCK_D = 0.16;
const GAP = 0.14; // of a row's pitch, drawn as the seam between blocks
const FILL = 0.8; // of the stage height, taken by the tallest stack + base
const PLINTH_H = 0.018; // of one column's width
const LID_H = 0.34; // of a row's pitch — the green plate that crowns a stack
const CAM_DIST = 4000;

const COL_STAGGER = 0.09; // seconds per column, left to right
const ROW_STAGGER = 0.028; // seconds per block, bottom to top
const BLOCK_DUR = 0.62;
const RISE = 5; // blocks settle from this many rows above their slot

const COLOR_BODY = '#4a514c';
const COLOR_CAP = '#00b140';
const COLOR_PLINTH = '#1c201b';
const COLOR_EDGE = '#8a958d';

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export type ImpactChart3DProps = {
  rows: number[];
  startedAt: number | null;
  activeRef: React.RefObject<number | null>;
  reduced: boolean;
  /** Idle the render loop while the section is off screen. */
  paused?: boolean;
};

/* Shears the scene into the oblique view. Nudging the depth angle with the
   pointer reads as the object turning, without moving a single stack off its
   column. */
function Oblique({
  reduced,
  children,
}: {
  reduced: boolean;
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  const matrix = useMemo(() => new THREE.Matrix4(), []);
  const ptr = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      ptr.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      ptr.current.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const p = ptr.current;
    p.x += (p.tx - p.x) * 0.045;
    p.y += (p.ty - p.y) * 0.045;

    const angle = DEPTH_ANGLE + (reduced ? 0 : p.x * 0.055 - p.y * 0.02);
    const a = Math.cos(angle) * DEPTH_SCALE;
    const b = Math.sin(angle) * DEPTH_SCALE;

    matrix.set(1, 0, -a, 0, 0, 1, -b, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    g.matrix.copy(matrix);
    g.matrixWorldNeedsUpdate = true;
  });

  return (
    <group ref={group} matrixAutoUpdate={false}>
      {children}
    </group>
  );
}

type StackProps = {
  index: number;
  rows: number;
  unit: number;
  blockH: number;
  lidH: number;
  blockW: number;
  blockD: number;
  spacing: number;
  startedAt: number | null;
  activeRef: React.RefObject<number | null>;
  reduced: boolean;
  geometry: THREE.BufferGeometry;
  bodyMat: THREE.Material;
  capMat: THREE.Material;
};

function Stack({
  index,
  rows,
  unit,
  blockH,
  lidH,
  blockW,
  blockD,
  spacing,
  startedAt,
  activeRef,
  reduced,
  geometry,
  bodyMat,
  capMat,
}: StackProps) {
  const group = useRef<THREE.Group>(null);
  const blocks = useRef<(THREE.Mesh | null)[]>([]);
  const lid = useRef<THREE.Mesh>(null);
  const lifted = useRef(0);
  const x = (index - (COLUMNS - 1) / 2) * spacing;

  useFrame(() => {
    const elapsed = startedAt == null ? 0 : (performance.now() - startedAt) / 1000;
    const live = reduced || startedAt != null;
    const step = (delay: number) => {
      const p = reduced ? 1 : clamp01((elapsed - delay) / BLOCK_DUR);
      return { p, e: easeOut(p) };
    };

    for (let j = 0; j < rows; j++) {
      const m = blocks.current[j];
      if (!m) continue;
      const { p, e } = step(index * COL_STAGGER + j * ROW_STAGGER);
      m.position.y = j * unit + blockH / 2 + (1 - e) * unit * RISE;
      m.scale.set(blockW, blockH * (0.4 + 0.6 * e), blockD);
      m.visible = live && p > 0;
    }

    const cap = lid.current;
    if (cap) {
      const { p, e } = step((index * COL_STAGGER + rows * ROW_STAGGER) * 1.15);
      cap.position.y = rows * unit + lidH / 2 + (1 - e) * unit * RISE;
      cap.scale.set(blockW, lidH * (0.4 + 0.6 * e), blockD);
      cap.visible = live && p > 0;
    }

    const g = group.current;
    if (g) {
      const target = activeRef.current === index ? unit * 0.9 : 0;
      lifted.current += (target - lifted.current) * 0.16;
      g.position.y = lifted.current;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: rows }, (_, j) => (
        <mesh
          key={j}
          ref={(el) => {
            blocks.current[j] = el;
          }}
          geometry={geometry}
          material={bodyMat}
          position={[x, j * unit + blockH / 2, -blockD / 2]}
          scale={[blockW, blockH, blockD]}
          visible={false}
        />
      ))}
      <mesh
        ref={lid}
        geometry={geometry}
        material={capMat}
        position={[x, rows * unit + lidH / 2, -blockD / 2]}
        scale={[blockW, lidH, blockD]}
        visible={false}
      />
    </group>
  );
}

function Chart({ rows, startedAt, activeRef, reduced }: ImpactChart3DProps) {
  const { size, camera } = useThree();

  const maxRows = Math.max(...rows);
  const colW = size.width / COLUMNS;
  const spacing = colW;

  const blockW = colW * BLOCK_W;
  const blockD = colW * BLOCK_D;
  const plinthH = colW * PLINTH_H;
  const plinthD = blockD * 1.05;
  const plinthW = (COLUMNS - 1) * spacing + blockW + colW * 0.12;

  // the depth axis adds this much height above the top of a stack
  const capRise = Math.sin(DEPTH_ANGLE) * DEPTH_SCALE * blockD;

  // solve the row pitch so the tallest stack, its lid and the depth still fit
  const available = FILL * size.height - plinthH - capRise;
  const unit = available / (maxRows + LID_H);
  const lidH = unit * LID_H;
  const blockH = unit * (1 - GAP);

  const stackTop = maxRows * unit + lidH + capRise;
  const focusY = (stackTop - plinthH) / 2;
  camera.position.set(0, focusY, CAM_DIST);

  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const bodyMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: COLOR_BODY, roughness: 0.62, metalness: 0.12 }),
    []
  );
  const capMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: COLOR_CAP, roughness: 0.5, metalness: 0.1 }),
    []
  );
  const plinthMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: COLOR_PLINTH, roughness: 0.8, metalness: 0.05 }),
    []
  );
  const edgeMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: COLOR_EDGE, transparent: true, opacity: 0.22 }),
    []
  );

  useEffect(
    () => () => {
      geometry.dispose();
      bodyMat.dispose();
      capMat.dispose();
      plinthMat.dispose();
      edgeMat.dispose();
    },
    [geometry, bodyMat, capMat, plinthMat, edgeMat]
  );

  return (
    <>
      <ambientLight intensity={0.62} />
      <directionalLight position={[0.7, 2.5, 1.5]} intensity={1.15} />
      <directionalLight position={[-1.4, 0.8, 1.2]} intensity={0.35} />

      <Oblique reduced={reduced}>
        {/* base rail */}
        <mesh
          geometry={geometry}
          material={plinthMat}
          position={[0, -plinthH / 2, -plinthD / 2]}
          scale={[plinthW, plinthH, plinthD]}
        />
        {/* the baseline the stacks stand on */}
        <mesh
          geometry={geometry}
          material={edgeMat}
          position={[0, 0, 0]}
          scale={[plinthW * 0.992, Math.max(1, colW * 0.0035), Math.max(1, colW * 0.0035)]}
        />
        {rows.map((r, i) => (
          <Stack
            key={i}
            index={i}
            rows={r}
            unit={unit}
            blockH={blockH}
            lidH={lidH}
            blockW={blockW}
            blockD={blockD}
            spacing={spacing}
            startedAt={startedAt}
            activeRef={activeRef}
            reduced={reduced}
            geometry={geometry}
            bodyMat={bodyMat}
            capMat={capMat}
          />
        ))}
      </Oblique>
    </>
  );
}

export default function ImpactChart3D({ paused, ...props }: ImpactChart3DProps) {
  return (
    <Canvas
      orthographic
      flat
      dpr={[1, 1.75]}
      frameloop={paused ? 'never' : 'always'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, CAM_DIST], near: 1, far: CAM_DIST * 4, zoom: 1 }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
      style={{ pointerEvents: 'none' }}
    >
      <Chart {...props} />
    </Canvas>
  );
}
