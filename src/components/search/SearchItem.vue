<template>
  <div class="search-wrapper" @click="onCLick">
    <div class="search-item-icon">
      <div class="icon-wrapper">
        <van-icon
          :name="icon"
          color="rgba(0,0,0,.5)"
          size="20px"
          :style="{ width:'20px', height:'20px'}"></van-icon>
      </div>
    </div>
    <div class="search-item-info">
      <div class="search-item-title">{{title}}</div>
      <div class="search-item-sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      subTitle: String,
      icon: String
    },
    methods: {
      onCLick() {
        this.$emit('onClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-wrapper {
    display: flex;
    align-items: center;
    padding: 15px;
    height: 36.5px;
    .search-item-icon {
      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #f7f7f9;
      }
    }

    .search-item-info {
      margin-left: 10px;
      width: 100%;
      .search-item-title {
        color: #333;
        font-size: 14px;
        line-height: 20px;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .search-item-sub-title {
        color: rgba(0,0,0,.5);
        font-size: 12px;
        line-height: 16.5px;
      }
    }
  }
</style>
