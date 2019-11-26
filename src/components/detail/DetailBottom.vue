<template>

</template>

<script>
  export default {
    props: {
      isInShelf: Boolean
    },
    methods: {
      readBook() {
        this.$emit('readBook')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
  .detail-bottom {

    .detail-btn-read {
      width: 100%;
      border: none;
      color: #fff;
      background: #1EA3F5;
      margin-left: 7.5px;
    }

    .detail-btn-shelf {
      width: 100%;
      color: #1EA3F5;
      background: #fff;
      border: 1px solid #1EA3F5;
      margin-right: 7.5px;
    }

    .detail-btn-remove {
      width: 100%;
      color: #F96128;
      background: rgba(255, 175, 155, .3);
      border: 1px solid #FFAF9B;
      margin-right: 7.5px;
    }
  }
</style>
