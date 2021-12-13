<template>
    <div class="slide">
			<span class="close" @click="$emit('close')">&#215;</span>

			<div class="slide__viewer w">
				<img :srcset="getResources(imgIdx).srcSet" class="img object-cover" alt="">
			</div>
			<template v-if="control">
				<span class="control control__left" @click="decr"> &#10094; </span>
				<span class="control control__right" @click="incr"> &#10095; </span>
			</template>
		</div>
</template>

<script>

	export default {
		name: "slideShow",
		props: {
			imgIdx: {
				type: [Number, String],
				required: true
			},
			control: {
				type: Boolean,
				default: true
			},
			section: {
				type: String,
				default: 'photos'
			},
			numberPhotos: {
				type: Number,
				required: true
			}
		},
		computed: {
			isPhotos() {
				return this.section === 'photos'
			}
		},
		methods: {
			getResources(index){
				const whichSection = this.section === 'photos' ? '@/assets/img/photos/images/compressed/' : 'static/img/';
				const images = require.context('@/assets/img/photos/images/compressed/', false, /\.jpg$/)
				const menu = require.context('static/img/', false, /\.jpg$/)
				if(this.section === 'photos') {
					return menu(`./photos${index}.jpg`)
				}
				return menu(`./${index}`)
			},
			incr(){
				this.isPhotos && this.$emit('incr', this.imgIdx >= this.numberPhotos ? 1 : this.imgIdx + 1)
			},
			decr(){
				this.isPhotos && this.$emit('decr', this.imgIdx <= 1 ? 1 : this.imgIdx - 1)
			},
			processKeyEvent(event) {
				console.log(event.code);
				// escape key
				if (event.code === 'Escape') {
					this.$emit('close');
				}
				if(event.code === 'ArrowRight' && this.isPhotos) {
					this.$emit('incr', this.imgIdx >= this.numberPhotos ? 1 : this.imgIdx + 1)
				}
				if(event.code === 'ArrowLeft' && this.isPhotos) {
					this.$emit('decr', this.imgIdx <= 1 ? 1 : this.imgIdx - 1)
				}
			}
		},
		mounted() {
			window.addEventListener('keyup', this.processKeyEvent, false)
		},
		destroyed() {
			window.removeEventListener('keyup', this.processKeyEvent, false)
		}
	}
</script>

<style lang="scss" scoped>
	.slide{
		background: rgba(0, 0, 0, .9);
		position: fixed;
		top: 0; left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 100;
		.slide__viewer{
			text-align: center;
			height: 100%;
			display: flex;
			align-items: center;
			.img{
				margin: 0 auto;
				height: 75%;
				@screen md{
					height: 70%;
				}
				@screen lg{
					height: 90%;
				}
				@screen xl{
					height: 100%;
				}
			}
		}
		.close{
			position: absolute;
			top: 30px;
			right: 30px;
			font-size: 40px;
			cursor: pointer;
			color: #ffffff;
		}
		.control{
			font-size: 3rem;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			cursor: pointer;
			color: #e30613;
			user-select: none;
			&.control__left{
				left: 30px;
			}
			&.control__right{
				right: 30px;
			}
		}
	}
</style>
