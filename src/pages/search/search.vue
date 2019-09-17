<template>
  <div>
    <Tag
      text="测试"
      @onClick="onTagClick"
    ></Tag>
  </div>
</template>

<script>
  import Tag from '../../components/base/Tag'

  export default {
    methods: {
      onTagClick() {
      console.log('tag...')
      }
    },
    components: { Tag }
  }
</script>

<style scoped lang="scss">

</style>
