<template>
	<header class="header p-1 fixed w-full px-5">
		<div class="flex justify-between items-center h-full">
			<div class="text-white">
				<div class="flex items-center">
					<nuxt-link to="#homepage">
						<img src="@/assets/img/logo__icon.svg" class="logo mr-1 md:mr-8 md:hidden" alt="">
						<img src="@/assets/img/logo.svg" class="logo mr-8 hidden md:block" alt="">
					</nuxt-link>
					<div class="scroll hidden md:block">
						<a
							v-for="(item, idx) in itemMenu"
							:key="idx"
							:class="{'active' : currentSection === item.url}"
							@click.prevent="$emit('view', item.url)"
							class="mx-2 md:mx-8 uppercase nav-item">{{ item.name }}</a>
					</div>
				</div>
			</div>
			<div class="text-white">
				<div class="header__social">
					<a href="https://www.facebook.com/Connollys-Nandrin-Restaurant-Bar-108415580720713" target="_blank" class="social">
						<img src="@/assets/img/ico_fb.svg" class="icon" alt="facebook" />
						<span class="hidden md:block">Connolly’s nandrin</span>
					</a>

					<a href="https://www.instagram.com/connollysnandrin" target="_blank" class="social">
						<img src="@/assets/img/ico_in.svg" class="icon" alt="instagram" />
						<span class="hidden md:block">Connolly's nandrin Restaurant-Bar</span>
					</a>
				</div>
			</div>
		</div>
		<div class="mobile-navigation">
			<a
				v-for="(item, idx) in itemMenu"
				:key="idx"
				:class="{'active' : currentSection === item.url}"
				@click.prevent="$emit('view', item.url)"
				class="mx-2 md:mx-8 uppercase nav-item">{{ item.name }}
				</a>
		</div>
	</header>
</template>

<script>
  export default {
		name: "Header",
		props: {
			currentSection: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				itemMenu: [
					{name: 'home page', url: 'homepage'},
					{name: 'menu', url: 'menu'},
					{name: 'photos', url: 'photos'},
					{name: 'contacts', url: 'contacts'},
				]
			}
		},
		methods: {
		}
  }
</script>

<style lang="scss" scoped>
	.header{
		background: rgba(4, 1, 0, .4);
		z-index: 10;
		padding-right: .8rem;
		@screen md{
			height: 50px;
			padding-right: 1.25rem;
		}
		.nav-item{
			cursor: pointer;
			font-size: 1rem;
			@screen md{
				@apply text-sm;
			}
			&.active{
				position: relative;
				&:after{
					content: "";
					position: absolute;
					bottom: -10px;
					width: 100%;
					left: 0;
					height: 6px;
					background: #e30613;
				}
			}
		}
	}
	.logo{
		height: 22px;

	}

	.header__social{
		display: flex;
		align-items: center;
		.social{
			display: flex;
			align-items: center;
			font-size: .75rem;
			color: #ffffff;
			margin-left: 10px;
			@screen md{
				margin-left: 20px;
			}
			.icon{
				height: 27px;
				width: 27px;
				margin-right: 5px;
				@screen md{
					margin-right: 15px;
				}
			}
		}
	}

	.scroll{
		// display: flex;
		// -webkit-overflow-scrolling: touch;
		// overflow: auto;
		display: none;
		@screen md{
			display: flex;
			align-items: center;
		}
	}
	.mobile-navigation{
		background: rgba(154,124, 53, .6);
		position: absolute;
		top: 35px; left: 0;
		width: 100%;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		@screen md{
			display: none;
		}
		.nav-item{
			color: #ffffff;
			&.active{
				&:after{
					content: "";
					background: #ffffff;
				}
			}
		}
	}
</style>
