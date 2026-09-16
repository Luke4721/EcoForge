
import React from 'react';
import ThemeClientScript from './ThemeClientScript';
import ThemeLinkRouter from '@/components/ThemeLinkRouter';
import ScrollReveal from '@/components/ScrollReveal';
import "./globals.css";

export const viewport = {
  width: '1200',
};

export const metadata = {
  title: 'Eco Forge - Sustainable Resource Recovery & Circular Solutions',
  description: 'Industrial-scale materials recovery pioneer delivering certified IT asset disposition, green metal recovery and EPR compliance for enterprises across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{ __html: `
	
	
		
<meta name="robots" content="max-image-preview:large">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<link rel="stylesheet" id="elementor-frontend-css" href="/ecobin/wp-content/uploads/elementor/css/custom-frontend.min.css?ver=1787285155" media="all">
<link rel="stylesheet" id="elementor-post-30-css" href="/ecobin/wp-content/uploads/elementor/css/post-30.css?ver=1787285154" media="all">
<link rel="stylesheet" id="elementor-post-39-css" href="/ecobin/wp-content/uploads/elementor/css/post-39.css?ver=1787285155" media="all">
<style id="wp-emoji-styles-inline-css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
</style>
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
</style>
<style id="global-styles-inline-css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}.wp-block-button{--wp--preset--dimension--25: 25%;--wp--preset--dimension--50: 50%;--wp--preset--dimension--75: 75%;--wp--preset--dimension--100: 100%;}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:root :where(.wp-block-icon svg){width: 24px;}
:where(.wp-block-gallery.is-layout-flex){gap: var( --wp--style--gallery-gap-default, var( --gallery-block--gutter-size, var( --wp--style--block-gap, 0.5em ) ) );}:where(.wp-block-gallery.is-layout-grid){gap: var( --wp--style--gallery-gap-default, var( --gallery-block--gutter-size, var( --wp--style--block-gap, 0.5em ) ) );}
:where(.wp-block-latest-posts.is-layout-flex){gap: 1.25em;}:where(.wp-block-latest-posts.is-layout-grid){gap: 1.25em;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */
</style>
<link rel="stylesheet" id="contact-form-7-css" href="/ecobin/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.7" media="all">
<link rel="stylesheet" id="elementor-icons-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.53.0" media="all">
<link rel="stylesheet" id="elementor-post-10-css" href="/ecobin/wp-content/uploads/elementor/css/post-10.css?ver=1787285155" media="all">
<link rel="stylesheet" id="e-animation-fadeInUp-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="widget-heading-css" href="/ecobin/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="ekit-widget-common-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/common.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-pro-creative-button-css" href="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/css/creative-button.css?ver=4.10.02" media="all">
<link rel="stylesheet" id="ekit-funfact-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/funfact.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="widget-image-css" href="/ecobin/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="ekit-button-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/button.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-icon-box-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/icon-box.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="widget-rating-css" href="/ecobin/wp-content/plugins/elementor/assets/css/widget-rating.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="widget-counter-css" href="/ecobin/wp-content/plugins/elementor/assets/css/widget-counter.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="widget-icon-list-css" href="/ecobin/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1787285155" media="all">
<link rel="stylesheet" id="ekit-pro-content-ticker-css" href="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/css/content-ticker.css?ver=4.10.02" media="all">
<link rel="stylesheet" id="ekit-image-box-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/image-box.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="widget-text-path-css" href="/ecobin/wp-content/plugins/elementor/assets/css/widget-text-path.min.css?ver=4.2.3" media="all">
<link rel="stylesheet" id="ekit-pricing-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/pricing.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-testimonial-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/testimonial.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="swiper-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5" media="all">
<link rel="stylesheet" id="ekit-pro-blog-posts-css" href="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/css/blog-posts.css?ver=4.10.02" media="all">
<link rel="stylesheet" id="elementor-post-25-css" href="/ecobin/wp-content/uploads/elementor/css/post-25.css?ver=1787285156" media="all">
<link rel="stylesheet" id="ekit-nav-menu-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/nav-menu.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-header-search-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-search.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-header-offcanvas-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-offcanvas.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-header-info-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-info.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ecobin-font-css" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;family=Rajdhani:wght@300;400;500;600;700&amp;display=swap" media="all">
<link rel="stylesheet" id="ecobin-css-variable-css" href="/ecobin/wp-content/themes/ecobin/assets/css/css-variable.css?ver=1.0.4" media="all">
<link rel="stylesheet" id="fontawesome-6.4.0-css" href="/ecobin/wp-content/themes/ecobin/assets/css/all.min.css?ver=1.0.4" media="all">
<link rel="stylesheet" id="bootstrap-5.3.2-css" href="/ecobin/wp-content/themes/ecobin/assets/css/bootstrap.min.css?ver=1.0.4" media="all">
<link rel="stylesheet" id="ecobin-style-css" href="/ecobin/wp-content/themes/ecobin/style.css?ver=1.0.4" media="all">
<link rel="stylesheet" id="elementor-gf-rajdhani-css" href="https://fonts.googleapis.com/css?family=Rajdhani:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" media="all">
<link rel="stylesheet" id="elementor-gf-dmsans-css" href="https://fonts.googleapis.com/css?family=DM+Sans:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" media="all">
<link rel="stylesheet" id="elementor-icons-ekiticons-css" href="/ecobin/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="elementor-icons-shared-0-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" media="all">
<link rel="stylesheet" id="elementor-icons-fa-brands-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" media="all">
<link rel="stylesheet" id="elementor-icons-fa-solid-css" href="/ecobin/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3" media="all">
<script type="text/javascript">
		var elementskit = {
			resturl: '/ecobin/wp-json/elementskit/v1/',
		}

		</script><script id="jquery-core-js" src="/ecobin/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
<script id="jquery-migrate-js" src="/ecobin/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>

<script type="text/javascript">var elementskit_module_parallax_url = "/ecobin/wp-content/plugins/elementskit/modules/parallax/";</script>			<style>
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			</style>
			<link rel="icon" href="/ecobin/wp-content/uploads/2025/10/favicon.png" sizes="32x32">
<link rel="icon" href="/ecobin/wp-content/uploads/2025/10/favicon.png" sizes="192x192">
<link rel="apple-touch-icon" href="/ecobin/wp-content/uploads/2025/10/favicon.png">
<meta name="msapplication-TileImage" content="/ecobin/wp-content/uploads/2025/10/favicon.png">
<style>
.is-scrolled {
    background-color: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(10px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.05) !important;
    box-shadow: 0 4px 30px rgba(0,0,0,0.08) !important;
    transition: background-color 0.3s ease !important;
}
.is-scrolled .elementor-element-35f64b1,
.is-scrolled .elementor-element-bba4d33,
.is-scrolled .elementor-element-e5f411a {
    background-color: transparent !important;
}
.is-scrolled .ekit-menu-nav-link { color: #1a1a1a !important; }
.is-scrolled .ekit-menu-nav-link:hover, .is-scrolled .ekit-menu-nav-link.active { color: #00b140 !important; }
.is-scrolled .ekit_creative_button { background-color: #00b140 !important; color: #ffffff !important; }
</style>
` }} />
      <body>
        <div dangerouslySetInnerHTML={{ __html: `

		<div class="theme-preloader" style="display: none;">
		<div class="loading-container">
			<div class="loading"></div>
			<div id="loading-icon"><img src="/images/loader.svg" alt="Preloader"></div>
		</div>
	</div>
		<div id="magic-cursor" style="opacity: 0; visibility: hidden;">
		<div id="ball" style="opacity: 0.5; border-width: 2px; height: 34px; width: 34px; transform: translate(-50%, -50%) translate(1741px, 0px);"></div>
	</div>
	
			<a class="skip-link screen-reader-text" href="#content">
			Skip to content		</a>
	
	
	<div class="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
				<div data-elementor-type="wp-post" data-elementor-id="30" class="elementor elementor-30">
				<div class="elementor-element elementor-element-35f64b1 e-con-full e-flex e-con e-parent e-lazyloaded" data-id="35f64b1" data-element_type="container" data-e-type="container">
		<div class="elementor-element elementor-element-bba4d33 e-con-full e-flex e-con e-child" data-id="bba4d33" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div class="elementor-element elementor-element-e5f411a e-con-full e-flex e-con e-child" data-id="e5f411a" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-206ffc2 elementor-widget elementor-widget-ecobin-site-logo" data-id="206ffc2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;align&quot;:&quot;left&quot;,&quot;width&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:100,&quot;sizes&quot;:[]},&quot;space&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:100,&quot;sizes&quot;:[]},&quot;space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_laptop&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;width_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;caption_space_laptop&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;caption_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;caption_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ecobin-site-logo.default">
				<div class="elementor-widget-container">
							<div class="ata-site-logo">
													<a data-elementor-open-lightbox="" class="elementor-clickable" href="/">
							<div class="ata-site-logo-set">           
				<div class="ata-site-logo-container">
									<img class="ata-site-logo-img elementor-animation-" src="/ecoforge-logo.png" alt="Eco Forge" style="max-height: 45px;">
				</div>
			</div>
							</a>
						</div>  
							</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-f4e1362 e-con-full e-flex e-con e-child" data-id="f4e1362" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-ba22790 main-header-menu elementor-widget elementor-widget-ekit-nav-menu" data-id="ba22790" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-nav-menu.default">
				<div class="elementor-widget-container">
							<nav class="ekit-wid-con ekit_menu_responsive_tablet" data-hamburger-icon="icon icon-menu-11" data-hamburger-icon-type="icon" data-responsive-breakpoint="1024" data-close-on-anchor="no">
			            <button class="elementskit-menu-hamburger elementskit-menu-toggler" type="button" aria-label="hamburger-icon">
                <i aria-hidden="true" class="ekit-menu-icon icon icon-menu-11"></i>            </button>
            <div id="ekit-megamenu-header-menu" class="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover" ekit-dom-added="yes"><ul id="menu-header-menu" class="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-icon">
<li class="menu-item nav-item active"><a href="/" class="ekit-menu-nav-link">Home</a></li>
<li class="menu-item nav-item"><a href="/about-us" class="ekit-menu-nav-link">About Us</a></li>
<li class="menu-item nav-item"><a href="/sustainability" class="ekit-menu-nav-link">Sustainability</a></li>
<li class="menu-item nav-item"><a href="/business-solutions" class="ekit-menu-nav-link">Business Solutions</a></li>
<li class="menu-item nav-item"><a href="/careers" class="ekit-menu-nav-link">Careers</a></li>
<li class="menu-item nav-item"><a href="/sustainability#faqs" class="ekit-menu-nav-link">FAQs</a></li>
</ul><div class="elementskit-nav-identity-panel"><button class="elementskit-menu-close elementskit-menu-toggler" type="button">X</button></div></div>
			<div class="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay"></div>        </nav>
						</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-7a276d3 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="7a276d3" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-5c0344c elementor-widget elementor-widget-elementskit-creative-button" data-id="5c0344c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-creative-button.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con">		<div class="ekit-btn-wraper">
								<a href="/request-quote" class="ekit_creative_button ekit_position_aware" id="" style="background-color: #00b140 !important; border-radius: 30px !important; color: white !important; padding: 12px 24px !important; font-weight: bold !important; border: none !important;" data-text="">
						<span class="ekit_creative_button_icon_wrapper">REQUEST QUOTE</span>

						<span class="ekit_creative_button_text">Get In Touch</span>

						<span class="ekit_position_aware_bg" style="top: -1px; left: 43.5312px;"></span>					</a>
						</div>
        </div>				</div>
				</div>
				</div>
				</div>
				</div>
				</div>
			</div>

			` }} />
        <ThemeLinkRouter />
        <ScrollReveal />
        <main>{children}</main>
        <div dangerouslySetInnerHTML={{ __html: `<div class="ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support">
		<div data-elementor-type="wp-post" data-elementor-id="39" class="elementor elementor-39">
				<div class="elementor-element elementor-element-e46a7e5 e-flex e-con-full e-con e-parent e-lazyloaded" data-id="e46a7e5" data-element_type="container" data-e-type="container">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-63c8400 e-flex e-con-full e-con e-child" data-id="63c8400" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-dac026b e-con-full e-flex e-con e-child" data-id="dac026b" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-ed11e5f at-image-animation at-animation-image-none at-none elementor-widget elementor-widget-image" data-id="ed11e5f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="image.default">
															<img width="153" height="50" src="/ecoforge-logo-white.png" class="attachment-full size-full wp-image-8536" alt="Eco Forge" style="max-height: 45px;">															</div>
				<div class="elementor-element elementor-element-52ce768 elementor-widget elementor-widget-text-editor" data-id="52ce768" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default">
									<p>Sustainable Solutions for Circular Economy. Eco Forge Solutions (P) Limited is an industrial-scale materials recovery pioneer delivering certified IT asset disposition, green metal recovery and EPR compliance for enterprises across India.</p>								</div>
		<div class="elementor-element elementor-element-6875b4c e-con-full e-flex e-con e-child" data-id="6875b4c" data-element_type="container" data-e-type="container">
		<div class="elementor-element elementor-element-08ef887 e-con-full e-flex e-con e-child" data-id="08ef887" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-20da208 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="20da208" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
					<div class="ekit-wid-con">        <!-- link opening -->
                <!-- end link opening -->

        <div class="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                    <div class="elementskit-box-header elementor-animation-">
                <div class="elementskit-info-box-icon  text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M13.3389 13.2143C15.4671 9.87469 15.1996 10.2913 15.2609 10.2043C16.0358 9.11137 16.4453 7.82508 16.4453 6.48438C16.4453 2.92891 13.5601 0 10 0C6.45148 0 3.55469 2.92313 3.55469 6.48438C3.55469 7.82422 3.97281 9.14418 4.77305 10.2518L6.66102 13.2143C4.64246 13.5245 1.21094 14.4489 1.21094 16.4844C1.21094 17.2264 1.69523 18.2838 4.00242 19.1078C5.61344 19.6831 7.7434 20 10 20C14.2197 20 18.7891 18.8097 18.7891 16.4844C18.7891 14.4486 15.3616 13.5251 13.3389 13.2143ZM5.75191 9.60723C5.74547 9.59715 5.73875 9.5873 5.73172 9.57762C5.06582 8.66152 4.72656 7.57582 4.72656 6.48438C4.72656 3.55398 7.08617 1.17188 10 1.17188C12.9078 1.17188 15.2734 3.55504 15.2734 6.48438C15.2734 7.57758 14.9406 8.62645 14.3107 9.5184C14.2543 9.59285 14.5487 9.13535 10 16.273L5.75191 9.60723ZM10 18.8281C5.39086 18.8281 2.38281 17.4733 2.38281 16.4844C2.38281 15.8197 3.92844 14.7268 7.35344 14.3007L9.50586 17.6782C9.61344 17.847 9.79977 17.9492 9.99996 17.9492C10.2002 17.9492 10.3865 17.847 10.4941 17.6782L12.6464 14.3007C16.0715 14.7268 17.6172 15.8197 17.6172 16.4844C17.6172 17.4649 14.6362 18.8281 10 18.8281Z"></path><path d="M10 3.55469C8.38457 3.55469 7.07031 4.86895 7.07031 6.48438C7.07031 8.0998 8.38457 9.41406 10 9.41406C11.6154 9.41406 12.9297 8.0998 12.9297 6.48438C12.9297 4.86895 11.6154 3.55469 10 3.55469ZM10 8.24219C9.03074 8.24219 8.24219 7.45363 8.24219 6.48438C8.24219 5.51512 9.03074 4.72656 10 4.72656C10.9693 4.72656 11.7578 5.51512 11.7578 6.48438C11.7578 7.45363 10.9693 8.24219 10 8.24219Z"></path></svg>
                </div>
          </div>
                        <div class="box-body">
                            <h3 class="elementskit-info-box-title">
                    Our Location                </h3>
                    <p class="elementskit-info-box-description">479, Habibpur, Dadri, Gr. Noida, Uttar Pradesh</p>
                                            </div>
        
        
                </div>
        </div>				</div>
				<div class="elementor-element elementor-element-b9a3172 elementor-widget elementor-widget-text-editor" data-id="b9a3172" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="text-editor.default"><h3 class="elementskit-info-box-title" style="margin-bottom: 10px; color: #fff;">Our Location</h3><iframe src="https://maps.google.com/maps?q=Habibpur,%20Dadri,%20Greater%20Noida&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="150" frameborder="0" style="border:0; border-radius: 8px;" allowfullscreen=""></iframe></div>
				</div>
		<div class="elementor-element elementor-element-8579923 e-con-full e-flex e-con e-child" data-id="8579923" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-33ebfe1 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box" data-id="33ebfe1" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-icon-box.default">
					<div class="ekit-wid-con">        <!-- link opening -->
                <!-- end link opening -->

        <div class="elementskit-infobox text-left text-left icon-lef-right-aligin elementor-animation- media  ">
                    <div class="elementskit-box-header elementor-animation-">
                <div class="elementskit-info-box-icon  text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M15.7918 12.3887C15.3823 11.9624 14.8884 11.7344 14.365 11.7344C13.8458 11.7344 13.3477 11.9581 12.9214 12.3845L11.5875 13.7141C11.4778 13.655 11.368 13.6002 11.2625 13.5453C11.1105 13.4693 10.967 13.3975 10.8446 13.3216C9.59513 12.528 8.45964 11.4938 7.37059 10.1557C6.84295 9.48877 6.48837 8.92736 6.23088 8.35751C6.57702 8.04092 6.89782 7.71167 7.21019 7.39509C7.32838 7.2769 7.44657 7.15448 7.56476 7.03629C8.4512 6.14985 8.4512 5.00171 7.56476 4.11527L6.41239 2.9629C6.28154 2.83204 6.14646 2.69697 6.01983 2.56189C5.76656 2.30018 5.50063 2.03003 5.22625 1.77676C4.8168 1.37153 4.32715 1.15625 3.81217 1.15625C3.29719 1.15625 2.7991 1.37153 2.37698 1.77676C2.37276 1.78098 2.37276 1.78098 2.36854 1.7852L0.933356 3.23305C0.39305 3.77336 0.0849075 4.43185 0.0173694 5.19588C-0.0839379 6.42845 0.27908 7.5766 0.557675 8.32796C1.2415 10.1726 2.26301 11.8822 3.78684 13.7141C5.6357 15.9218 7.86024 17.6651 10.4014 18.8935C11.3722 19.3536 12.6681 19.8981 14.116 19.991C14.2046 19.9952 14.2975 19.9994 14.3819 19.9994C15.357 19.9994 16.1759 19.6491 16.8175 18.9526C16.8217 18.9441 16.8302 18.9399 16.8344 18.9315C17.0539 18.6655 17.3071 18.4249 17.5731 18.1674C17.7546 17.9944 17.9403 17.8129 18.1218 17.6229C18.5397 17.1881 18.7592 16.6816 18.7592 16.1624C18.7592 15.639 18.5355 15.1367 18.1092 14.7145L15.7918 12.3887ZM17.3029 16.8336C17.2987 16.8378 17.2987 16.8336 17.3029 16.8336C17.1383 17.0108 16.9695 17.1712 16.7879 17.3485C16.5136 17.6102 16.235 17.8846 15.9733 18.1928C15.5469 18.6486 15.0446 18.8639 14.3861 18.8639C14.3228 18.8639 14.2553 18.8639 14.1919 18.8597C12.9383 18.7795 11.7732 18.2898 10.8995 17.872C8.5103 16.7154 6.41239 15.0733 4.66906 12.9923C3.22965 11.2574 2.26724 9.6534 1.62984 7.93117C1.23728 6.88011 1.09376 6.06121 1.15708 5.28874C1.19929 4.79487 1.38924 4.38542 1.73959 4.03507L3.179 2.59566C3.38584 2.40149 3.60534 2.29596 3.82061 2.29596C4.08655 2.29596 4.30182 2.45636 4.4369 2.59144C4.44112 2.59566 4.44534 2.59988 4.44956 2.6041C4.70705 2.8447 4.95188 3.09375 5.20937 3.35968C5.34022 3.49476 5.4753 3.62984 5.61038 3.76913L6.76275 4.9215C7.21019 5.36894 7.21019 5.78262 6.76275 6.23006C6.64033 6.35247 6.52214 6.47488 6.39973 6.59307C6.04515 6.95609 5.70746 7.29378 5.34022 7.62303C5.33178 7.63147 5.32334 7.6357 5.31912 7.64414C4.9561 8.00716 5.02364 8.36173 5.09962 8.60233C5.10384 8.615 5.10806 8.62766 5.11228 8.64033C5.41198 9.36636 5.8341 10.0502 6.47571 10.8649L6.47993 10.8691C7.64496 12.3043 8.87332 13.4229 10.2283 14.2798C10.4014 14.3895 10.5787 14.4782 10.7475 14.5626C10.8995 14.6386 11.043 14.7103 11.1654 14.7863C11.1823 14.7947 11.1992 14.8074 11.216 14.8158C11.3596 14.8876 11.4946 14.9214 11.6339 14.9214C11.9843 14.9214 12.2038 14.7019 12.2756 14.6301L13.7192 13.1865C13.8627 13.043 14.0906 12.8699 14.3566 12.8699C14.6183 12.8699 14.8336 13.0345 14.9644 13.178C14.9686 13.1823 14.9686 13.1823 14.9729 13.1865L17.2987 15.5123C17.7335 15.9429 17.7335 16.3861 17.3029 16.8336Z"></path><path d="M10.7933 4.7574C11.8992 4.94313 12.9038 5.46656 13.7059 6.26857C14.5079 7.07059 15.0271 8.07522 15.217 9.18116C15.2635 9.45975 15.5041 9.65392 15.7784 9.65392C15.8122 9.65392 15.8418 9.6497 15.8755 9.64548C16.1879 9.59483 16.3947 9.29935 16.3441 8.98698C16.1161 7.64888 15.483 6.42897 14.5163 5.46233C13.5497 4.49569 12.3298 3.86252 10.9917 3.63458C10.6793 3.58393 10.3881 3.79076 10.3332 4.09891C10.2783 4.40705 10.4809 4.70675 10.7933 4.7574Z"></path><path d="M19.96 8.82242C19.5843 6.61899 18.5459 4.61395 16.9503 3.01836C15.3547 1.42277 13.3497 0.384369 11.1463 0.00868772C10.8381 -0.0461871 10.5469 0.16487 10.492 0.473013C10.4413 0.785377 10.6482 1.07664 10.9605 1.13151C12.9276 1.46498 14.7216 2.39785 16.1483 3.82037C17.5751 5.24712 18.5037 7.0411 18.8372 9.00815C18.8836 9.28675 19.1242 9.48092 19.3986 9.48092C19.4324 9.48092 19.4619 9.4767 19.4957 9.47248C19.8038 9.42604 20.0149 9.13056 19.96 8.82242Z"></path></svg>
                </div>
          </div>
                        <div class="box-body">
                            <h3 class="elementskit-info-box-title">
                    Phone Number                </h3>
                                            </div>
        
        
                </div>
        </div>				</div>
		<div class="elementor-element elementor-element-b6eddc0 e-con-full e-flex e-con e-child" data-id="b6eddc0" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-0ad4f91 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="0ad4f91" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default"><a href="tel:+919319253708">+91 93192 53708</a></h2>				</div>
				<div class="elementor-element elementor-element-e14616b at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="e14616b" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default"><a href="mailto:operation@ecoforge.eco">operation@ecoforge.eco</a></h2>				</div>
				</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-abd740c elementor-widget elementor-widget-elementskit-social-media" data-id="abd740c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con">			 <ul class="ekit_social_media">
														<li class="elementor-repeater-item-5d03b26">
<a href="https://www.linkedin.com/company/eco-green-recyclers-private-limited" aria-label="LinkedIn" class="p">

							<i aria-hidden="true" class="fab fa-linkedin-in"></i>
                                                                                                            </a>
                    </li>
                    														<li class="elementor-repeater-item-dd44da2">
					    <a href="https://x.com/RecyclersEG" aria-label="Twitter" class="twitter">
							
							<i aria-hidden="true" class="fab fa-x-twitter"></i>
                                                                                                            </a>
                    </li>
                    														<li class="elementor-repeater-item-101dcb5">
					    <a href="https://www.facebook.com/people/Eco-Green-Recyclers/pfbid0WNzA2LeoWPMTXPZ4vuJe9cNcAimyB4bbEaykjAWULqndnYChrrS2u1SoEWyzUA7El/" aria-label="Facebook" class="f">
							
							<i aria-hidden="true" class="fab fa-facebook-f"></i>
                                                                                                            </a>
                    </li>
                    														<li class="elementor-repeater-item-5830fb2">
					    <a href="https://www.instagram.com/eco_green_rec?igsh=eTVzY21rbDczeGcy" aria-label="Instagram" class="instagram">
							
							<i aria-hidden="true" class="fab fa-instagram"></i>
                                                                                                            </a>
                    </li>
                    							</ul>
		</div>				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-e6cbfcb e-con-full e-flex e-con e-child" data-id="e6cbfcb" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-fca5367 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="fca5367" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default">Stay Connected, Stay Green With Us</h2>				</div>
				<div class="elementor-element elementor-element-2d4bc86 elementor-widget-tablet__width-inherit footer-form elementor-widget elementor-widget-elementskit-contact-form7" data-id="2d4bc86" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-contact-form7.default">
					<div class="ekit-wid-con"><div class="ekit-form">
<div class="wpcf7 js" id="wpcf7-f8855-o1" lang="en-US" dir="ltr" data-wpcf7-id="8855">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/ecobin/#wpcf7-f8855-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<fieldset class="hidden-fields-container"><input type="hidden" name="_wpcf7" value="8855"><input type="hidden" name="_wpcf7_version" value="6.1.7"><input type="hidden" name="_wpcf7_locale" value="en_US"><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8855-o1"><input type="hidden" name="_wpcf7_container_post" value="0"><input type="hidden" name="_wpcf7_posted_data_hash" value="">
</fieldset>
<div class="form-group">
	<div class="email-field">
		<p><span class="wpcf7-form-control-wrap" data-name="email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" id="email" aria-required="true" aria-invalid="false" placeholder="Enter E-mail Address *" value="" type="email" name="email"></span>
		</p>
	</div>
	<div class="newsletter-btn">
		<p><input class="wpcf7-form-control wpcf7-submit has-spinner" id="msgSubmit" type="submit" value="Subscribe"><span class="wpcf7-spinner"></span>
		</p>
	</div>
</div><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div></div>				</div>
		<div class="elementor-element elementor-element-4b96f73 e-con-full e-flex e-con e-child" data-id="4b96f73" data-element_type="container" data-e-type="container">
		<div class="elementor-element elementor-element-e566f50 e-con-full e-flex e-con e-child" data-id="e566f50" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-67094f9 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="67094f9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default">Quick Links</h2>				</div>
				<div class="elementor-element elementor-element-11109f2 footer-links elementor-widget elementor-widget-ekit-vertical-menu" data-id="11109f2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-vertical-menu.default">
					<div class="ekit-wid-con">        <div class="ekit-vertical-main-menu-wraper   badge-position-left">
                        <div id="ekit-vertical-menu-container-11109f2" class="ekit-vertical-menu-container"><ul id="menu-footer-menu" class="ekit-vertical-navbar-nav submenu-click-on-icon"><li id="menu-item-9169" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-25 current_page_item menu-item-9169 nav-item elementskit-mobile-builder-content active" data-vertical-menu="750px"><a href="/" class="ekit-menu-nav-link active">Home</a></li>
<li id="menu-item-9171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9171 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/about-us" class="ekit-menu-nav-link">About Us</a></li>
<li id="menu-item-9172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9172 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/business-solutions" class="ekit-menu-nav-link">Business Solutions</a></li>
<li id="menu-item-11121" class="menu-item menu-item-type-post_type_archive menu-item-object-awaiken-project menu-item-11121 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/careers" class="ekit-menu-nav-link">Careers</a></li>
</ul></div>        </div>
        </div>				</div>
				</div>
		<div class="elementor-element elementor-element-d3a9694 e-con-full e-flex e-con e-child" data-id="d3a9694" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-565e5d2 at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="565e5d2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default">Services</h2>				</div>
				<div class="elementor-element elementor-element-ec3456d footer-links elementor-widget elementor-widget-ekit-vertical-menu" data-id="ec3456d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-vertical-menu.default">
					<div class="ekit-wid-con">        <div class="ekit-vertical-main-menu-wraper   badge-position-left">
                        <div id="ekit-vertical-menu-container-ec3456d" class="ekit-vertical-menu-container"><ul id="menu-services-menu" class="ekit-vertical-navbar-nav submenu-click-on-icon"><li class="elementor-icon-list-item">
                <a href="/lithium-battery-recycling"><span class="elementor-icon-list-text">Lithium Battery Recycling</span></a>
            </li><li class="elementor-icon-list-item">
                <a href="/plastic-waste-recycling"><span class="elementor-icon-list-text">Plastic Waste Recycling</span></a>
            </li><li class="elementor-icon-list-item">
                <a href="/paper-recycling"><span class="elementor-icon-list-text">Paper Recycling</span></a>
            </li><li class="elementor-icon-list-item">
                <a href="/green-metal-recovery"><span class="elementor-icon-list-text">Green Metal Recovery</span></a>
            </li><li class="elementor-icon-list-item">
                <a href="/epr-consulting"><span class="elementor-icon-list-text">EPR Consulting</span></a>
            </li></ul></div>        </div>
        </div>				</div>
				</div>
		<div class="elementor-element elementor-element-19284b4 e-con-full e-flex e-con e-child" data-id="19284b4" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-9642d4c at-heading-animation at-animation-heading-none elementor-widget elementor-widget-heading" data-id="9642d4c" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="heading.default">
					<h2 class="elementor-heading-title elementor-size-default">Support</h2>				</div>
				<div class="elementor-element elementor-element-e74968d footer-links elementor-widget elementor-widget-ekit-vertical-menu" data-id="e74968d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-vertical-menu.default">
					<div class="ekit-wid-con">        <div class="ekit-vertical-main-menu-wraper   badge-position-left">
                        <div id="ekit-vertical-menu-container-e74968d" class="ekit-vertical-menu-container"><ul id="menu-privacy-policy-menu" class="ekit-vertical-navbar-nav submenu-click-on-icon"><li id="menu-item-9410" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9410 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/privacy-policy" class="ekit-menu-nav-link">Privacy Policy</a></li>
<li id="menu-item-9416" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9416 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/sustainability" class="ekit-menu-nav-link">Environment Sustainability</a></li>
<li id="menu-item-9417" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9417 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/terms-conditions" class="ekit-menu-nav-link">Terms &amp; Conditions</a></li>
<li id="menu-item-9421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9421 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/request-quote" class="ekit-menu-nav-link">Contact Us</a></li>
</ul></div>        </div>
        </div>				</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-7999c01 e-con-full e-flex e-con e-child" data-id="7999c01" data-element_type="container" data-e-type="container">
				<div class="elementor-element elementor-element-d47d2f9 elementor-widget elementor-widget-elementskit-copyright" data-id="d47d2f9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-copyright.default">
				<div class="elementor-widget-container">
					<div class="ekit-wid-con">        <p class="ekit-copyright-wrapper">
                            Copyright © 2026 <a href="/">Eco Forge</a>. All Rights Reserved.                    </p>
        </div>				</div>
				</div>
				</div>
					</div>
				</div>
					</div>
				</div>
				</div>
		</div>
<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/ecobin/*"},{"not":{"href_matches":["/ecobin/wp-*.php","/ecobin/wp-admin/*","/ecobin/wp-content/uploads/*","/ecobin/wp-content/*","/ecobin/wp-content/plugins/*","/ecobin/wp-content/themes/ecobin/*","/ecobin/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
			<script>
				( () => {
					const lazyloadRunObserver = () => {
						const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
						const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
							entries.forEach( ( entry ) => {
								if ( entry.isIntersecting ) {
									let lazyloadBackground = entry.target;
									if( lazyloadBackground ) {
										lazyloadBackground.classList.add( 'e-lazyloaded' );
									}
									lazyloadBackgroundObserver.unobserve( entry.target );
								}
							});
						}, { rootMargin: '200px 0px 200px 0px' } );
						lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
							lazyloadBackgroundObserver.observe( lazyloadBackground );
						} );
					};
					const events = [
						'DOMContentLoaded',
						'elementor/lazyload/observe',
					];
					events.forEach( ( event ) => {
						document.addEventListener( event, lazyloadRunObserver );
					} );
				} )();
			</script>
			<link rel="stylesheet" id="ekit-social-css" href="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/css/social.css?ver=4.0.1" media="all">
<link rel="stylesheet" id="ekit-pro-vertical-menu-css" href="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/css/vertical-menu.css?ver=4.10.02" media="all">
<script id="wp-hooks-js" src="/ecobin/wp-includes/js/dist/hooks.min.js?ver=f0f188028580e8dc1255"></script>
<script id="wp-i18n-js" src="/ecobin/wp-includes/js/dist/i18n.min.js?ver=1dfe7db3940c23ea9216"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
</script>
<script id="swv-js" src="/ecobin/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.7"></script>
<script id="contact-form-7-js-before">
var wpcf7 = {
    "api": {
        "root": "/ecobin\\/wp-json\\/",
        "namespace": "contact-form-7\\/v1"
    }
};
//# sourceURL=contact-form-7-js-before
</script>
<script id="contact-form-7-js" src="/ecobin/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.7"></script>
<script id="SmoothScroll-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/SmoothScroll.min.js?ver=1.0.4"></script>
<script id="gsap-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/gsap.min.js?ver=1.0.4"></script>
<script id="magiccursor-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/magiccursor.js?ver=1.0.4"></script>
<script id="SplitText-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/SplitText.js?ver=1.0.4"></script>
<script id="ScrollTrigger-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/ScrollTrigger.min.js?ver=1.0.4"></script>
<script id="three-theme-js" src="/ecobin/wp-content/themes/ecobin/assets/js/three.min.js?ver=1.0.4"></script>
<script id="theme-js-js-extra">
var theme_vars = {"theme_uri":"/ecobin/wp-content/themes/ecobin"};
//# sourceURL=theme-js-js-extra
</script>
<script id="theme-js-js" src="/ecobin/wp-content/themes/ecobin/assets/js/function.js?ver=1.0.4"></script>
<script id="elementor-webpack-runtime-js" src="/ecobin/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=4.2.3"></script>
<script id="elementor-frontend-modules-js" src="/ecobin/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=4.2.3"></script>
<script id="jquery-ui-core-js-before">
jQuery.uiBackCompat = true;
//# sourceURL=jquery-ui-core-js-before
</script>
<script id="jquery-ui-core-js" src="/ecobin/wp-includes/js/jquery/ui/core.min.js?ver=1.14.2"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnX":"Share on X","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1440,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"4.2.3","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true},"urls":{"assets":"/ecobin\\/wp-content\\/plugins\\/elementor\\/assets\\/","ajaxurl":"/ecobin\\/wp-admin\\/admin-ajax.php","uploadUrl":"/ecobin\\/wp-content\\/uploads"},"nonces":{"floatingButtonsClickTracking":"395fdace29","atomicFormsSendForm":"6fe12db88a"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet","viewport_laptop"],"viewport_laptop":1440,"body_background_background":"classic","global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":25,"title":"Ecobin%20%E2%80%93%20Waste%20Disposal%20%26%20Recycling%20Services%20WordPress%20Theme","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before
</script>
<script id="elementor-frontend-js" src="/ecobin/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=4.2.3"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
<script id="ekit-core-js-extra">
var ekit_config = {"ajaxurl":"/ecobin/wp-admin/admin-ajax.php","nonce":"8346be2521","errorMessage":"Something went wrong. Please try again.","widgets":{"eventCalendar":{"headerIcons":{"prev":"","next":"","year":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3V15ZM5.625 12.5625C6.14271 12.5625 6.5625 12.9822 6.5625 13.5C6.5625 14.0178 6.14271 14.4375 5.625 14.4375C5.10729 14.4375 4.6875 14.0178 4.6875 13.5C4.6875 12.9822 5.10729 12.5625 5.625 12.5625ZM9.09668 12.5674C9.56933 12.6155 9.93848 13.0146 9.93848 13.5C9.93848 14.0177 9.51859 14.4373 9.00098 14.4375C8.51575 14.4375 8.11633 14.0687 8.06836 13.5957L8.06348 13.5L8.06836 13.4043C8.11633 12.9313 8.51575 12.5625 9.00098 12.5625L9.09668 12.5674ZM12.375 12.5566C12.8928 12.5566 13.3124 12.9764 13.3125 13.4941C13.3125 14.0119 12.8928 14.4316 12.375 14.4316C11.8575 14.4316 11.4375 14.0121 11.4375 13.4941C11.4376 12.9762 11.8575 12.5566 12.375 12.5566ZM5.625 9.5625C6.14271 9.5625 6.5625 9.98215 6.5625 10.5C6.5625 11.0178 6.14271 11.4375 5.625 11.4375C5.10729 11.4375 4.6875 11.0178 4.6875 10.5C4.6875 9.98215 5.10729 9.5625 5.625 9.5625ZM9.09668 9.56738C9.56933 9.61549 9.93848 10.0146 9.93848 10.5C9.93848 11.0177 9.51859 11.4373 9.00098 11.4375C8.51575 11.4375 8.11633 11.0687 8.06836 10.5957L8.06348 10.5L8.06836 10.4043C8.11633 9.93133 8.51575 9.5625 9.00098 9.5625L9.09668 9.56738ZM12.375 9.5625C12.8928 9.5625 13.3125 9.98221 13.3125 10.5C13.3125 11.0178 12.8928 11.4375 12.375 11.4375C11.8572 11.4375 11.4375 11.0178 11.4375 10.5C11.4375 9.98221 11.8572 9.5625 12.375 9.5625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","month":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3V15ZM5.625 12.5625C6.14271 12.5625 6.5625 12.9822 6.5625 13.5C6.5625 14.0178 6.14271 14.4375 5.625 14.4375C5.10729 14.4375 4.6875 14.0178 4.6875 13.5C4.6875 12.9822 5.10729 12.5625 5.625 12.5625ZM9.09668 12.5674C9.56933 12.6155 9.93848 13.0146 9.93848 13.5C9.93848 14.0177 9.51859 14.4373 9.00098 14.4375C8.51575 14.4375 8.11633 14.0687 8.06836 13.5957L8.06348 13.5L8.06836 13.4043C8.11633 12.9313 8.51575 12.5625 9.00098 12.5625L9.09668 12.5674ZM5.625 9.5625C6.14271 9.5625 6.5625 9.98215 6.5625 10.5C6.5625 11.0178 6.14271 11.4375 5.625 11.4375C5.10729 11.4375 4.6875 11.0178 4.6875 10.5C4.6875 9.98215 5.10729 9.5625 5.625 9.5625ZM9.09668 9.56738C9.56933 9.61549 9.93848 10.0146 9.93848 10.5C9.93848 11.0177 9.51859 11.4373 9.00098 11.4375C8.51575 11.4375 8.11633 11.0687 8.06836 10.5957L8.06348 10.5L8.06836 10.4043C8.11633 9.93133 8.51575 9.5625 9.00098 9.5625L9.09668 9.56738ZM12.375 9.5625C12.8928 9.5625 13.3125 9.98221 13.3125 10.5C13.3125 11.0178 12.8928 11.4375 12.375 11.4375C11.8572 11.4375 11.4375 11.0178 11.4375 10.5C11.4375 9.98221 11.8572 9.5625 12.375 9.5625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","week":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 8.25V15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3ZM9.75 12.75C10.1642 12.75 10.5 13.0858 10.5 13.5C10.5 13.9142 10.1642 14.25 9.75 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H9.75ZM12 12.75C12.4142 12.75 12.75 13.0858 12.75 13.5C12.75 13.9142 12.4142 14.25 12 14.25H11.9932C11.579 14.25 11.2432 13.9142 11.2432 13.5C11.2432 13.0858 11.579 12.75 11.9932 12.75H12ZM6.00684 9.75C6.421 9.75005 6.75684 10.0858 6.75684 10.5C6.75684 10.9142 6.421 11.2499 6.00684 11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H6.00684ZM12 9.75C12.4142 9.75 12.75 10.0858 12.75 10.5C12.75 10.9142 12.4142 11.25 12 11.25H8.25C7.83579 11.25 7.5 10.9142 7.5 10.5C7.5 10.0858 7.83579 9.75 8.25 9.75H12ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","day":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                        \\u003Cpath d=\\"M12.375 0.75C12.7892 0.75 13.125 1.08579 13.125 1.5V2.25H14.25C15.4927 2.25 16.5 3.25737 16.5 4.5V15C16.5 16.2427 15.4927 17.25 14.25 17.25H3.75C2.50737 17.25 1.5 16.2427 1.5 15V4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H4.875V1.5C4.875 1.08579 5.21079 0.75 5.625 0.75C6.03921 0.75 6.375 1.08579 6.375 1.5V2.25H11.625V1.5C11.625 1.08579 11.9608 0.75 12.375 0.75ZM3 8.25V15C3 15.4142 3.33578 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V8.25H3ZM7.5 9.375C7.91416 9.375 8.24992 9.71086 8.25 10.125V13.875C8.25 14.2892 7.91421 14.625 7.5 14.625C7.08579 14.625 6.75 14.2892 6.75 13.875V10.875C6.33579 10.875 6 10.5392 6 10.125C6.00008 9.71086 6.33584 9.375 6.75 9.375H7.5ZM11.625 9.375C11.8621 9.375 12.085 9.48751 12.2266 9.67773C12.368 9.86793 12.4119 10.1138 12.3438 10.3408L11.2188 14.0889C11.0997 14.4856 10.6809 14.7109 10.2842 14.5918C9.88769 14.4726 9.66233 14.0548 9.78125 13.6582L10.6162 10.875H9.75C9.33579 10.875 9 10.5392 9 10.125C9 9.71079 9.33579 9.375 9.75 9.375H11.625ZM3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V6.75H15V4.5C15 4.08578 14.6642 3.75 14.25 3.75H13.125V4.5C13.125 4.91421 12.7892 5.25 12.375 5.25C11.9608 5.25 11.625 4.91421 11.625 4.5V3.75H6.375V4.5C6.375 4.91421 6.03921 5.25 5.625 5.25C5.21079 5.25 4.875 4.91421 4.875 4.5V3.75H3.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E","list":"\\u003Csvg width=\\"18\\" height=\\"18\\" viewBox=\\"0 0 18 18\\" fill=\\"currentColor\\" xmlns=\\"http://www.w3.org/2000/svg\\"\\u003E\\n                         \\u003Cpath d=\\"M4.5 10.6875C4.81066 10.6875 5.0625 10.9393 5.0625 11.25V13.5C5.0625 13.8107 4.81066 14.0625 4.5 14.0625H2.8125V15.1875H4.5C4.81066 15.1875 5.0625 15.4393 5.0625 15.75C5.0625 16.0607 4.81066 16.3125 4.5 16.3125H2.25C1.93946 16.3124 1.6875 16.0606 1.6875 15.75V13.5C1.6875 13.1894 1.93946 12.9376 2.25 12.9375H3.9375V11.8125H2.25C1.93934 11.8125 1.6875 11.5607 1.6875 11.25C1.6875 10.9393 1.93934 10.6875 2.25 10.6875H4.5ZM15.75 12.9375C16.0607 12.9375 16.3125 13.1893 16.3125 13.5C16.3125 13.8107 16.0607 14.0625 15.75 14.0625H8.25C7.93934 14.0625 7.6875 13.8107 7.6875 13.5C7.6875 13.1893 7.93934 12.9375 8.25 12.9375H15.75ZM15.75 8.4375C16.0607 8.4375 16.3125 8.68934 16.3125 9C16.3125 9.31066 16.0607 9.5625 15.75 9.5625H8.25C7.93934 9.5625 7.6875 9.31066 7.6875 9C7.6875 8.68934 7.93934 8.4375 8.25 8.4375H15.75ZM3.375 1.6875C3.68566 1.6875 3.9375 1.93934 3.9375 2.25V6.1875H4.5C4.81066 6.1875 5.0625 6.43934 5.0625 6.75C5.0625 7.06066 4.81066 7.3125 4.5 7.3125H2.25C1.93934 7.3125 1.6875 7.06066 1.6875 6.75C1.6875 6.43934 1.93934 6.1875 2.25 6.1875H2.8125V2.8125H2.25C1.93934 2.8125 1.6875 2.56066 1.6875 2.25C1.6875 1.93934 1.93934 1.6875 2.25 1.6875H3.375ZM15.75 3.9375C16.0607 3.9375 16.3125 4.18934 16.3125 4.5C16.3125 4.81066 16.0607 5.0625 15.75 5.0625H8.25C7.93934 5.0625 7.6875 4.81066 7.6875 4.5C7.6875 4.18934 7.93934 3.9375 8.25 3.9375H15.75Z\\"/\\u003E\\n                    \\u003C/svg\\u003E"}}}};
//# sourceURL=ekit-core-js-extra
</script>
<script id="ekit-core-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/core.js?ver=4.0.1"></script>
<script id="ekit-pro-core-js" src="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/core.js?ver=4.10.02"></script>
<script id="ekit-pro-creative-button-js" src="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/creative-button.js?ver=4.10.02"></script>
<script id="ekit-animate-numbers-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/animate-numbers.js?ver=4.0.1"></script>
<script id="ekit-funfact-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/funfact.js?ver=4.0.1"></script>
<script id="jquery-numerator-js" src="/ecobin/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js?ver=0.2.1"></script>
<script id="ekit-pro-content-ticker-js" src="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/content-ticker.js?ver=4.10.02"></script>
<script id="ekit-info-tip-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/info-tip.js?ver=4.0.1"></script>
<script id="ekit-testimonial-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/testimonial.js?ver=4.0.1"></script>
<script id="swiper-js" src="/ecobin/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5"></script>
<script id="ekit-masonry-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/ekit-masonry.js?ver=4.0.1"></script>
<script id="imagesloaded-js" src="/ecobin/wp-includes/js/imagesloaded.min.js?ver=5.0.0"></script>
<script id="ekit-pro-blog-posts-js" src="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/blog-posts.js?ver=4.10.02"></script>
<script id="ekit-nav-menu-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/nav-menu.js?ver=4.0.1"></script>
<script id="magnific-popup-js" src="/ecobin/wp-content/plugins/elementskit-lite/assets/libs/magnific-popup/jquery.magnific-popup.min.js?ver=4.0.1"></script>
<script id="ekit-menu-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/nav-menu.js?ver=4.0.1"></script>
<script id="ekit-header-search-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/header-search.js?ver=4.0.1"></script>
<script id="ekit-header-offcanvas-js" src="/ecobin/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/header-offcanvas.js?ver=4.0.1"></script>
<script id="ekit-pro-vertical-menu-js" src="/ecobin/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/vertical-menu.js?ver=4.10.02"></script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"/ecobin/wp-includes/js/wp-emoji-release.min.js?ver=7.1"}}
</script>






		
		
		
		
		
		` }} />
        <ThemeClientScript />
      </body>
    </html>
  );
}
