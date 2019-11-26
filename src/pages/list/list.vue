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
  import { setNavigationBarTitle, showToast } from '../../API/wechat'

  export default {
    components: { SearchTable },
    data() {
      return {
        data: [],
        page: 1
      }
    },
    methods: {
      getSearchList() {
        const { key, text } = this.$route.query
        const params = {}
        if (key && text) {
          params[key] = text
        }
        params.page = this.page
        searchList(params).then(res => {
          const { data } = res.data
          if (data.length > 0) {
            this.data.push(...data)
          } else {
            showToast('没有更多的数据了')
          }
        })
      }
    },
    mounted() {
      this.page = 1
      const { title } = this.$route.query
      this.data = []
      this.getSearchList()
      setNavigationBarTitle(title)
    },
    onReachBottom() {
      this.page++
      this.getSearchList()
    }
  }
</script>

<style scoped>

</style>
