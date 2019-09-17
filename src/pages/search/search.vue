<template>
  <div>
    <Searchbar
      :focus="searchFocus"
      @onChange="onChange"
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
        searchList: {},
        searchFocus: true
      }
    },
    methods: {
      onChange(keyword) {
        console.log(keyword)
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
    components: {
      TagGroup,
      Searchbar,
      SearchList
    }
  }
</script>

<style scoped lang="scss">

</style>
