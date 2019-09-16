<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView
            src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
            round="round"
          ></ImageView>
        </div>
        <div class="sub-title">登录小慕读书</div>
        <div class="title">全球好书免费读</div>
      </div>
      <button
        class="auth-btn"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >授权登录
      </button>
    </div>
  </div>
</template>

<script>
  import ImageView from './ImageView'

  export default {
    components: { ImageView },
    methods: {
      getUserInfo() {
        this.$emit('getUserInfo')
      }
    }
  }
</script>

<style scoped lang="scss">
  .auth-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #999;
    z-index: 1000;

    .auth {
      position: relative;
      width: 270px;
      height: 248px;
      background: #f5f5f5;
      border-radius: 18px;


      .auth-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 22.5px;

        .auth-img {
          width: 74px;
        }

        .sub-title {
          font-size: 13px;
          color: #999;
          line-height: 18.5px;
          margin-top: 18px;
        }

        .title {
          font-size: 16.5px;
          font-weight: bold;
          color: #333;
          line-height: 22.5px;
          margin-top: 3.5px;
        }

        .auth-btn {
        }
      }

      .auth-btn {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 49px;
        line-height: 49px;
        font-size: 15px;
        color: #FFFFFF;
        background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
        border-radius: 0 0 18px 18px;
      }
    }

  }
</style>
