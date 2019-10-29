<template>
  <div>
    <Searchbar
      :hotSearch="hotSearchKeyword"
      :focus="searchFocus"
      @onChange="onChange"
      @onClick="onClear"
    ></Searchbar>
    <TagGroup
      header-text="热门搜索"
      btn-text="换一批"
      :value="[]"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetail"
      v-if="hotSearch.length > 0 && !showList"
    ></TagGroup>
    <TagGroup
      header-text="历史搜索"
      btn-text="清空"
      :value="[]"
      @onBtnClick="clearHistorySearch"
      @onTagClick="searchKeyWord"
      v-if="historySearch.length > 0 && !showList"
    ></TagGroup>
    <SearchList
      :data="searchList"
      v-if="showList"
    ></SearchList>
  </div>
</template>

<script>
  import SearchList from '../../components/search/SearchList'
  import Searchbar from '../../components/home/Searchbar'
  import TagGroup from '../../components/base/TagGroup'
  import { getStorageSync } from '../../API/wechat'
  import { search, hotSearch } from '../../API'

  export default {
    computed: {
      showList() {
        const keys = Object.keys(this.searchList)
        return keys.length > 0
      }
    },
    data() {
      return {
        hotSearch: [],
        historySearch: [],
        hotSearchKeyword: '',
        searchList: {},
        searchFocus: true,
        openId: ''
      }
    },
    methods: {
      onClear() {
        this.searchList = {}
      },
      onChange(keyword) {
        if (!keyword || keyword.trim().length === 0) {
          return
        }
        this.onSearch(keyword)
      },
      onSearch(keyword) {
        search({
          keyword,
          openId: this.openId
        }).then(res => {
          this.searchList = res.data.data
        })
      },
      changeHotSearch() {
        console.log('change hot search')
      },
      showBookDetail() {
        console.log('show book detail')
      },
      clearHistorySearch() {
        console.log('clear book detail')
      },
      searchKeyWord() {
        console.log('show book detail')
      }
    },
    mounted() {
      this.openId = getStorageSync('openId')
      hotSearch().then(res => {
        console.log(res)
      })
      this.hotSearchKeyword = this.$route.query.hotSearch
    },
    components: {
      TagGroup,
      Searchbar,
      SearchList
    }
  }
</script>

<style scoped lang="scss">

</style>
