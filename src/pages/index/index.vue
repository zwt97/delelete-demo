<template>
	<view class="content">
		<text>我是首页哦~</text>
		<searchBar />
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<button type="default" @click="handleToLogin">跳转登录页面</button>
		</view>
		<div class="product-list">
			<product v-for="(item, index) in list" :product="item" :key="index"></product>
		</div>
	</view>
</template>

<script>
	import product from "./components/product";
	import { getProductPageList } from "@/api/modules/home";
	export default {
		data() {
			return {
				title: '商品列表'
			}
		},
		components: {
			product
		},
		onLoad() {
			this.getProductList();
		},
		methods: {
			handleToLogin() {
				// 关闭当前页，跳转到登录页面
				uni.redirectTo({
					url: "/pages/login/login"
				});
			},
			getProductList() {
				this.getAjaxList(getProductPageList, this.organizeData({}, false)).then((res) => {
					let data = res.data;
					let list = [];
					if (data) {
					  if (_.isArray(data)) {
							list = data || [];
					  } else if (_.isArray(data.DataList)) {
							list = data.DataList || [];
					  }
					}
					this.list = list;
					console.log(this.list);
				}).catch(() => {
					this.list = [];
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.product-list {
		/* width: 100%; */
		display: flex;
		flex-wrap: wrap;
		padding: 0 10px;
		justify-content: center;
	}
</style>
