<template>
	<div class="wb">
		
		<!-- slideshow -->
		<transition name="menu-popover">
			<SlideShow
				v-if="indexImg"
				:img-idx="indexImg"
				:section="currentSection"
				:control="currentSection === 'photos'"
				:numberPhotos = menuPhotos.photos.length
				@close="closeSlide"
				@incr="indexImg = $event"
				@decr="indexImg = $event"
			/>
		</transition>

		<Header
			:current-section="currentSection"
			@view="goTo($event, 'anchor')"
		/>

		<!-- HOME SECTION  -->
		<div id="homepage" class="section full h-screen bg_default bg-home__1" data-section="homepage" data-page="home1"
				 ref="home1">
			<div class="flex h-screen">
				<div class="m-auto">
					<img src="@/assets/img/intro__logo.svg" class="intro__logo mb-8 m-auto" :class="animation.logo" alt="">
					<img src="@/assets/img/intro__welcome.svg" class="intro__welcome mb-8 m-auto" :class="animation.welcome"
							 alt="">
					<a href="#" @click.prevent="goTo('home2', 'ref')">
						<img src="@/assets/img/intro__link.svg" class="intro__link m-auto" :class="animation.button" alt="">
					</a>
				</div>
			</div>
		</div>

		<div class="section full h-screen bg-home__2 relative" data-section="homepage" data-page="home2" ref="home2">
			<div class="content__text">
				<div class="quotes">
					<h1 :class="animation.title">“Classique ou moderne, il n'y a qu'une seule cuisine... La Bonne.” </h1>
					<blockquote class="blockquotes">Paul Bocuse</blockquote>
				</div>
			</div>
		</div>
		<div class="section full h-screen bg-home__3 relative" data-section="homepage" data-page="home3" ref="home3">
			<div class="main-bg-home3 h-full"></div>
<!--			<img :srcset="require('@/assets/img/homepage/Homepage3_The_Mood_Main_visual_Deco_Trame.png').srcSet"-->
<!--					 class="h-full object-cover object-center xl:h-auto"-->
<!--					 loading="lazy"-->
<!--					 alt="">-->
			<a href="#">
				<img src="@/assets/img/bullet_arrow.svg" @click.prevent="goTo('home3', 'ref')" class="bullet_arrow" alt="">
			</a>
			<div class="content__text">
				<div class="text-white font-light text-base">
					<div class="container mx-auto">
						<div class="w-full px-4 xl:px-0 xl:w-3/5 hp-content">
							<h2 class="uppercase mb-4 title-gold">the mood</h2>
							<p class="mb-4">Dans un nouveau cadre, une nouvelle ambiance, une nouvelle formule, le <span class="font-bold">J.Connolly’s
								Nandrin</span> vous offre une tendance «Restaurant-Bar»…plus calme, plus détendue.</p>

							<p class="mb-4">Nous vous proposons également une cuisine de qualité, uniquement basée sur des produits frais, du «fait maison» selon une formule de suggestions.
								Celles-ci seront revues toutes les 2 à 3 semaines, à un prix plus qu’abordable. Nous vous suggerons également quelques incontournables et un plat du jour.
							</p>

							<p class="mb-4">La formule Bar persiste avec une offre intéressante et diversifiée de Rhum, Gin et bien entendu Whisky, avec un partenariat d’ Etienne BOUILLON, l’heureux instigateur et producteur de Fexhe-le-Haut-Clocher.</p>

							<p class="mb-4">Pour les beaux jours, deux belles terrasses ensoleillées vous accueilleront avec une capacité de 75 places environ.</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- MENU SECTION  -->
		<div id="menu" class="section full h-screen bg-menu" data-section="menu" data-page="menu" ref="menu">
			<div class="content__text">
				<h1 class="font-normal uppercase mt-8" :class="animation.title">Menu</h1>
				<h2 class="font-normal uppercase" :class="animation.title">découvrez nos spécialités</h2>
				<!-- <div class="menu__head">
					<h1 class="font-normal uppercase" :class="animation.title">découvrez nos spécialités</h1>
				</div> -->
			</div>
		</div>
		<div class="section full h-screen bg-menu__2 relative" data-section="menu" data-page="menu2" ref="menu2">
			<img src="@/assets/img/inside-pattern.svg" class="menu-content-wrap" alt="">
			<a href="#">
				<img src="@/assets/img/bullet_arrow.svg" @click.prevent="goTo('menu2', 'ref')" class="bullet_arrow" alt="">
			</a>
			<div class="menu__content">
				<div class="px-4 relative menu__content__inner">
					<img src="@/assets/img/menu/menu_cta.svg" @click.prevent="goTo('menu3', 'ref')" class="menu_cta cursor-pointer" alt="">
					<div class="flex flex-wrap -mx-4">
						<!-- generate thumbnails -->
						<div v-for="item in 8" :key="`${item + 10}`" class="w-1/2 md:w-1/4 px-3 mb-4">
							<div class="md:h-64">
								<img :srcset="require(`@/assets/img/menu/photos/photo_${item}.jpg`).srcSet" class="w-full h-24 md:h-64 object-cover cursor-pointer" :class="{'object-bottom': item === 2}" loading="lazy" alt="">
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div class="section full h-screen bg-menu__3 relative" data-section="menu" data-page="menu3" ref="menu3">
			<div class="img-preview">
				<!-- <img :srcset="require(`/img/menu_rhums_gin_inner.jpg`).srcSet" @click="setCurrentPhoto('Menu_Rhums_Gin_inner.jpg')" loading="lazy" class="img cursor-pointer" alt=""> -->
				<img :src="`${menuPhotos.menu1}`" @click="setCurrentPhoto(`${menuPhotos.menu1.split('/')[2]}`, 'menu', disabledMenuForMobile)" loading="lazy" class="img cursor-pointer" alt="">
			</div>
		</div>

		<div class="section full h-screen bg-menu__4 relative" data-section="menu" data-page="menu4" ref="menu4">
			<div class="img-preview">
				<!-- <img :srcset="require(`/img/menu_whisky_inner.jpg`).srcSet" @click="setCurrentPhoto('Menu_Whisky_inner.jpg')" loading="lazy" class="img cursor-pointer" alt=""> -->
				<img :src="`${menuPhotos.menu2}`" @click="setCurrentPhoto(`${menuPhotos.menu2.split('/')[2]}`, 'menu', disabledMenuForMobile)" loading="lazy" class="img cursor-pointer" alt="">
			</div>
		</div>

		<div class="section full h-screen bg-menu__5 relative" data-section="menu" data-page="menu5" ref="menu5">
			<div class="img-preview">
				<img :src="`${menuPhotos.menu3}`" @click="setCurrentPhoto(`${menuPhotos.menu3.split('/')[2]}`, 'menu', disabledMenuForMobile)" loading="lazy" class="img cursor-pointer" alt="">
			</div>
		</div>

		<!-- PHOTOS SECTION  -->
		<div id="photos" class="section full h-screen bg-photos relative" data-section="photos" data-page="photos" ref="photos">
			<div class="content__text">
				<img src="@/assets/img/photos/photos_cta.svg" @click.prevent="goTo('photos2', 'ref')" loading="lazy" class="photos_cta" alt="">
				<div class="menu__head photos">
					<h2 class="uppercase mb-4 title-gold">photos</h2>
					<img src="@/assets/img/logo_full_white.svg" class="logo-full" alt="">
				</div>
			</div>
		</div>
		<div class="section full h-screen bg-menu__2 relative" data-section="photos" data-page="photos2" ref="photos2">
			<img src="@/assets/img/inside-pattern.svg" class="menu-content-wrap" alt="">
			<a href="#">
				<img src="@/assets/img/bullet_arrow.svg" @click.prevent="goTo('contacts', 'ref')" class="bullet_arrow" alt="">
			</a>
			<div class="menu__content menu__overflow">
				<div class="px-4 relative menu__content__inner">
					<div class="photos__inner bg-black">
						<!-- generate thumbnails -->
						<div
							v-for="(item, idx) in menuPhotos.photos"
							:key="idx"
							class="px-3 md:w-auto mb-6">
							<div class="md:h-64">
								<img
									:srcset="item.imgSrc"
									:data-img="idx+1"
									@click="setCurrentPhoto(idx+1, 'photos', true)"
									class="w-full md:w-auto md:h-64 md:object-cover cursor-pointer"
									loading="lazy"
									alt="">
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!-- CONTACT SECTION  -->
		<div id="contacts" class="section full h-screen bg-contact relative" data-section="contacts" data-page="contacts" ref="contacts">
			<div class="content__text">
				<div class="menu__head contact">
					<div class="big-bullet__contact__root">
						<div class="big-bullet__contact">
							<img src="@/assets/img/logo_full_white.svg" class="logo-full" alt="">
							<div class="section__reservation">
								<span class="reservation__title">Réservations</span>
								<a href="tel:+3285825890" class="reservation__tel">085/82.58.90</a>
							</div>
							<div class="section__address">
								<address class="address">
									149/1, route du Condroz <br> 4550 Nandrin
								</address>
							</div>
							<div class="section__info">
								<p>Fermé le lundi</p>
							</div>
							<div class="section__social">
								<a href="https://www.instagram.com/connollys_nandrin" target="_blank" class="social social__in">
									<img src="@/assets/img/ico_in.svg" class="icon icon__in" alt="instagram" />
									<span>@connollys_nandrin</span>
								</a>
								<a href="https://www.facebook.com/Connollys-Nandrin-Restaurant-Bar-108415580720713" target="_blank" class="social social__fb">
									<img src="@/assets/img/ico_fb.svg" class="icon icon__fb" alt="facebook" />
									<span>connolly's Nandrin Restaurant-Bar</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import Logo from '~/components/Logo.vue'
	import Header from "~/components/Header.vue";
	import SlideShow from "../components/slideshow/index";

	export default {
		components: {
			SlideShow,
			Header,
			Logo
		},
		head() {
			return {
				script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
			}
		},
		data() {
			return {
				currentSection: 'homepage',
				currentView: '',
				animation: "",
				modalIsOpen: false,
				indexImg: "",
				nbPhotos: 16,
				isMobile: false
			}
		},
		computed: {
			menuPhotos() {
				return this.$store.state.menu
			},
			disabledMenuForMobile() {
				return this.isMobile ? false : true
			}
		},
		methods: {
			setCurrentSection(section) {
				this.currentSection = section
			},
			setCurrentPhoto(index, section, isEnabled = true){
				if(isEnabled) {
					this.indexImg = index;
					this.setCurrentSection(section);
				}
				return;
			},
			closeSlide(){
				this.indexImg = null
			},
			goTo(refName, type) {
				if (type === 'ref') {
					const element = this.$refs[refName];
					element.scrollIntoView({behavior: 'smooth'});
				} else {
					const element = document.getElementById(refName);
					element.scrollIntoView({behavior: 'smooth'});
				}
			},
			initObserver() {
				const sections = document.querySelectorAll('.section');
				// const thresholdsValue = [];
				// for (let i=0; i<=1.0; i+= 0.1) {
				// 	thresholdsValue.push(i);
				// }
				const config = {
					rootMargin: '50px',
					threshold: 0.8
				};

				let observer = new IntersectionObserver((entries, self) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							this.intersectionHandler(entry);
						}
					});
				}, config);

				sections.forEach(section => {
					observer.observe(section);
				});
			},
			intersectionHandler(entry) {
				const target = entry.target.dataset;
				this.currentView = target.page;
				this.currentSection = target.section;
				// change url hash
				//document.location.hash = `#${this.currentSection}`

				// animation
				switch (this.currentView) {
					case "home1":
						this.animation = {
							'logo': 'animated slideInDown delay-1',
							'welcome': 'animated fadeInDown delay-2',
							'button': 'animated zoomIn delay-5'
						};
						break;
					case "menu":
						this.animation = {
							'title': 'animated fadeIn slideInDown delay-2'
						};
						break;
					default:
						this.animation = {}
				}
			}
		},
		mounted() {
			this.isMobile = window.innerWidth < 768
			this.initObserver();
		}
	}
</script>

<style lang="scss">

	.section__reservation{
		font-weight: 400;
		letter-spacing: 1rem;
		margin: 20px 0;
		position: relative;
		padding: 10px 0;
		.reservation__title{
			color: #9a7c35;
			font-size: .70rem;
			text-transform: uppercase;
			display: block;
			@screen md{
				font-size: 1rem;
			}
		}
		.reservation__tel{
			color: #ffffff;
			font-size: .70rem;
			text-transform: uppercase;
			@screen md{
				font-size: 1rem;
			}
		}
		&:before{
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 1px;
			background: #9a7c35;
			width: 40%;
		}
		&:after{
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 1px;
			background: #9a7c35;
			width: 40%;
		}
	}
	.section__address{
		margin: 20px 0;
		.address{
			color: #9a7c35;
			font-size: .70rem;
			font-style: normal;
			letter-spacing: .5rem;
			text-transform: uppercase;
			@screen md{
				font-size: 1rem;
			}
		}
	}
	.section__info{
		margin-bottom: 20px;
		letter-spacing: .5rem;
		font-size: .90rem;
		color: #ffffff;
		font-variant: small-caps;
		@screen md{
			font-size: 1.2rem;
			margin-bottom: 30px;
		}

	}
	.section__social{
		width: 80%;
		margin: 0 auto;
		.social{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ffffff;
			letter-spacing: .2rem;
			font-size: .50rem;
			margin-bottom: 10px;
			@screen md{
				font-size: 1rem;
			}
		}
		.icon{
			width: 20px;
			height: 20px;
			@screen xl{
				width: 40px;
				height: 40px;
			}
			margin-right: 10px;
		}
	}

	.wb {
		font-family: 'Lato', sans-serif;
		position: relative;
		overflow: hidden;
	}

	.bg_default {
		background-color: #000000;
	}
	@mixin imgBreakpoint($url, $bgColor, $fixed : true) {
		//640, 750, 860, 1024, 1920
		background: $bgColor url("#{$url}?size=640") no-repeat if($fixed == true, fixed, scroll);
		background-size: cover;
		@screen sm{
			background: $bgColor url("#{$url}?size=750") no-repeat if($fixed == true, fixed, scroll);
			background-size: cover;
		}
		@screen md{
			background: $bgColor url("#{$url}?size=860") no-repeat if($fixed == true, fixed, scroll);
			background-size: cover;
		}
		@screen lg{
			background: $bgColor url("#{$url}?size=1024") no-repeat top center if($fixed == true, fixed, scroll);
			background-size: cover;
		}
		@screen xl{
			background: $bgColor url("#{$url}?size=1920") no-repeat top center if($fixed == true, fixed, scroll);
			background-size: cover;
		}
	}
	.bg-home__1 {
		//background: #000000 url("~assets/img/bg_home_1.jpg?size=1080") no-repeat 0 0;
		//background-size: cover;
		@include imgBreakpoint('~assets/img/bg_home_1.jpg', #000000, false)
	}

	.bg-home__2 {
		@include imgBreakpoint('~assets/img/homepage/Homepage2_Main_visual_Deco_Trame.jpg', transparent, true);
		//background: url("~assets/img/homepage/Homepage2_Main_visual_Deco_Trame.jpg?size=1080") no-repeat fixed;
		//background-size: cover;
	}

	.bg-home__3 {
		margin-top: -55px;
	}


	.bg-menu {
		@include imgBreakpoint('~assets/img/menu/Menu_Main_Visual_Deco_Trame.jpg', transparent, true);
		//background: url("~assets/img/menu/Menu_Main_Visual_Deco_Trame.jpg?size=1080") no-repeat fixed;
		//background-size: cover;
		position: relative;
	}
	.bg-menu__2 {
		margin-top: -80px;
	}

	.main-bg-home3{
		@include imgBreakpoint('~assets/img/homepage/Homepage3_The_Mood_Main_visual_Deco_Trame.png', transparent, false);
		background-position: center 0;
	}

	.bg-menu__3{
		//@include imgBreakpoint('~assets/img/menu/Fond_Menu_Rhum.jpg', #000000, true);
		//background-position: 0 -1px;
		//background: #000000 url("~assets/img/menu/Menu_Rhums_Gin.jpg?size=1080") no-repeat 0 -1px fixed;
		//background-size: cover;
		//margin-top: -1px;
		background-color: #000000;
		margin-top: -1px;
		img{
			object-fit: cover;
		}
	}

	.bg-menu__4{
		//@include imgBreakpoint('~assets/img/menu/Fond_Menu_Whisky.jpg', #000000, true);
		//background: #000000 url("~assets/img/menu/Menu_Whisky.jpg?size=1080") no-repeat 0 0 fixed;
		//background-size: cover;
		background-color: #000000;
		img{
			object-fit: cover;
		}
	}
	.bg-menu__5{
		//@include imgBreakpoint('~assets/img/menu/Fond_Menu_Suggestions.jpg', #000000, true);
		//background: #000000 url("~assets/img/menu/Menu_Suggestions.jpg?size=1080") no-repeat 0 0 fixed;
		//background-size: cover;
		background-color: #000000;
		img{
			object-fit: cover;
		}
	}
	.bg-photos{
		@include imgBreakpoint('~assets/img/photos/Photos_Main_Visual_Deco_trame.jpg', transparent, true);
		//background: url("~assets/img/photos/Photos_Main_Visual_Deco_trame.jpg?size=1080") no-repeat 0 0 fixed;
		//background-size: cover;
	}

	.bg-contact{
		@include imgBreakpoint('~assets/img/contact/Contacts_Main_Visual_Deco_Trame.jpg', transparent, true);
		//background: url("~assets/img/contact/Contacts_Main_Visual_Deco_Trame.jpg?size=1080") no-repeat 0 0 fixed;
		//background-size: cover;
	}

	.content__text {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-top: 70px;
		@screen md{
			padding-top: 50px;
		}
		h1 {
			letter-spacing: 1rem;
			font-size: 1.25rem;
			@apply uppercase text-center font-normal text-white;
			@screen xl{
				@apply text-4xl;
			}
		}
		h2 {
			letter-spacing: .8rem;
			font-size: 1rem;
			margin-top: 10px;
			@apply uppercase text-center font-normal text-white;
			@screen xl{
				@apply text-2xl;
				text-shadow: 1px 1px 3px rgba(0,0,0,.2);
			}
		}
	}

	.title-gold {
		color: #9a7c36;
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 1rem;
		@screen md{
			font-size: 2rem;
		}
	}

	.intro__logo {
		width: 300px;
		@screen md{
			width: 520px;
		}
	}

	.intro__welcome {
		width: 255px;
	}

	.intro__link {
		width: 195px;
	}

	.bullet_arrow {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 30px;
		height: 30px;
		z-index: 5;
		@screen xl{
			width: 40px;
			height: 40px;
		}
	}

	.menu_cta{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 260px; height: 260px;
		cursor: pointer;
		@screen md{
			width: 440px; height: 440px;
		}
	}

	.photos_cta{
		width: 240px; height: 240px;
		margin: 0 auto;
		cursor: pointer;
		@screen md{
			width: 380px; height: 380px;
		}
	}

	.home__content {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: absolute;
		z-index: 1;
		display: none;
	}

	.menu__content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		color: red;
		.menu__content__inner{
			margin-top: 5rem;
		}
		&.menu__overflow{
			height: 100%;
			overflow-y: auto;
		}
	}

	.menu__head{
		position: absolute;
		bottom: 20%;
		width: 100%;
		text-align: center;
		&.photos{
			bottom: 15%;
			@screen md{
				bottom: 10%;
			}
		}
		&.contact{
			bottom: auto;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.hp-content{
		background: rgba(0,0,0,.3);
		padding: 1rem;
		@screen xl{
			background: transparent;
		}
		p{
			font-size: 1.2rem;
		}
	}

	.big-bullet__contact__root{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.big-bullet__contact{
		padding: 20px 10px;
		background: #130f00;
		//height: 100vw;
		//width: 100vw;
		@screen md{
			padding: 2%;
			border-radius: 100%;
			height: 60vw;
			width: 60vw;
		}
		@screen xl{
			height: 40vw;
			width: 40vw;
		}
		.logo-full{
			height: 100px;
			@screen md{
				height: 120px;
			}
			@screen xl{
				height: 150px;
			}
		}
	}

	.menu-content-wrap {
		object-fit: cover;
		height: 100%;
	}

	.mask {
		mask-image: url("~assets/img/big-mask.svg");
		width: 100%;
		height: 100%;
		mask-position: top center;
		mask-repeat: no-repeat;
		mask-size: cover;
	}
	.quotes{
		width: 100%;
		padding: 10px;
		margin: 0 auto;
		background: rgba(0,0,0,.4);
		@screen md{
			width: 50%;
			padding: 0;
			background: transparent;
		}
		h1{
			display: block;
			font-size: 1.8rem;
			font-weight: 300;
			text-transform: none;
			letter-spacing: .2rem;
		}
		.blockquotes{
			text-align: right;
			text-transform: uppercase;
			font-weight: 300;
			color: #ffffff;
			font-size: 1rem;
			@screen md{
				font-size: 1.7rem;
			}
		}
	}
	.big-bullet{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 25px;
		height: 25px;
		background: #e30613;
		border-radius: 100%;
		//border: 1px solid #e30613;
		z-index: 10;
		transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
		transform-origin: 50%;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		//opacity: 0;
		&.active{
			//opacity: 1;
			transform: scale(155);
		}
	}
	.close-modal{
		font-size: 2rem;
		position: absolute;
		top: 5px; right: 5px;
		color: #ffffff;
		z-index: 11;
	}
	.img-preview{
		width: 100%;
		margin: 0 auto;
		height: 65%;
		@screen md{
			height: 100%;
			//width: 50%;
		}
		.img{
			object-fit: contain;
			height: 100%;
			width: 100%;
			max-width: 100vh;
			max-height: 100vh;
			transform: scale(3);
			@screen md {
				object-fit: cover;
				height: auto;
				width: 100%;
				max-width: inherit;
				max-height: inherit;
				transform: scale(1);
			}
		}
	}
	.logo-full{
		height: 70px;
		margin: 0 auto;
		text-align: center;
		@screen md{
			height: 150px;
		}
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		transition : .2s ease-in-out;
		opacity: 0;
	}
	.fade-enter-active, .fade-leave-active {
		transition: .2s ease-in-out;
		opacity: 1;
	}

	.menu-popover-enter,
	.menu-popover-leave-to {
		opacity: 0;
		transform: rotateY(50deg);
	}
	.menu-popover-enter-to,
	.menu-popover-leave {
		opacity: 1;
		transform: rotateY(0deg);
	}
	.menu-popover-enter-active,
	.menu-popover-leave-active {
		transition: opacity, transform 200ms ease-out;
	}

	.photos__inner{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
		place-items: center;
		@screen md{
			grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		}
	}
    
</style>
