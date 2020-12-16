<template>
	<view class="product">
		<view class="product-item">
			<view class="product-img">
				<image :src="require('@/static/logo.png')"></image>
			</view>
			<view class="product-baseInfo">
				<text class="name">{{product.ProductName}}</text>
				<view>
					<text class="price">{{product.LabelPrice | formatPrice}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { formatPrice } from '@/common/js/utils';
	export default {
		data() {
			return {
			}
		},
		props: {
			product: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		methods: {
			
		},
		computed: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.product {
		margin-right: 10px;
		&-item {
			width: 160px;
			height: 210px;
			border: 1px solid #ccc;
			margin: 0 0 10px;
		}
		&-img {
			width: 100%;
			height: 160px;
		}
		&-baseInfo {
			height: calc(100% - 160px);
			padding: 0 5px;
		}
		uni-image {
			width: 100%;
			height: 100%;
		}
		.name {
			font-size: 14px;
		}
		.price {
			font-weight: bold;
		}
	}
</style>
