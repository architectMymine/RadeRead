<template>
  <div>
    <SearchTable
      :data="data"
    ></SearchTable>
  </div>
</template>

<script>
  import SearchTable from '../../components/search/SearchTable'
  import { searchList } from '../../API'
  import { setNavigationBarTitle } from '../../API/wechat'

  export default {
    components: { SearchTable },
    data() {
      return {
        data: []
      }
    },
    methods: {
      getSearchList() {
        const { key, text } = this.$route.query
        const params = {}
        if (key && text) {
          params[key] = text
        }
        searchList(params).then(res => {
          this.data = res.data.data
        })
      }
    },
    mounted() {
      const { title } = this.$route.query
      this.data = []
      this.getSearchList()
      setNavigationBarTitle(title)
    }
  }
</script>

<style scoped>

</style>
