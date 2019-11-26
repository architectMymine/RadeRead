<template>
  <div>
    <HomeBook
      :row="category.length / 2"
      :col="2"
      :data="category"
      mode="category"
      :showTitle="false"
      :showBtn="false"
    ></HomeBook>
  </div>
</template>

<script>
  import { categoryList } from '../../API'
  import HomeBook from '../../components/home/HomeBook'

  export default {
    data() {
      return {
        category: []
      }
    },
    mounted() {
      categoryList().then(res => {
        this.category = res.data.data
      })
    },
    components: { HomeBook }
  }
</script>

<style scoped lang="scss">

</style>
