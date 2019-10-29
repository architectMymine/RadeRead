<template>
  <div>
    <Searchbar
      :hotSearch="hotSearchKeyword"
      :focus="searchFocus"
      @onChange="onChange"
      @onClick="onClear"
      @onConfirm="onConfirm"
      ref="searchbar"
    ></Searchbar>
    <TagGroup
      header-text="热门搜索"
      btn-text="换一批"
      :value="hotSearchArray"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetail"
      v-if="hotSearch.length > 0 && !showList"
    ></TagGroup>
    <TagGroup
      header-text="历史搜索"
      btn-text="清空"
      :value="historySearch"
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
  import { getStorageSync, setStorageSync, showToast } from '../../API/wechat'
  import { search, hotSearch } from '../../API'

  export default {
    computed: {
      showList() {
        const keys = Object.keys(this.searchList)
        return keys.length > 0
      },
      hotSearchArray() {
        let _hotSearch = []
        this.hotSearch.forEach(item => _hotSearch.push(item.title))
        console.log(_hotSearch)
        return _hotSearch
      }
    },
    data() {
      return {
        hotSearch: [],
        historySearch: [],
        hotSearchKeyword: '',
        searchList: {},
        searchFocus: true,
        openId: '',
        page: 1
      }
    },
    methods: {
      onConfirm(keyword) {
        if (!keyword || keyword.trim().length === 0) {
          keyword = this.hotSearchKeyword
          this.$refs.searchbar.setValue(keyword)
        }
        this.onSearch(keyword)
        if (!this.historySearch.includes(keyword)) {
          this.historySearch.push(keyword)
          setStorageSync('historySearch', this.historySearch)
        }
        this.searchFocus = false
      },
      onClear() {
        this.searchList = {}
      },
      onChange(keyword) {
        if (!keyword || keyword.trim().length === 0) {
          this.searchList = {}
          return
        }
        this.page = 1
        this.onSearch(keyword)
        if (!this.historySearch.includes(keyword)) {
          this.historySearch.push(keyword)
          setStorageSync('historySearch', this.historySearch)
        }
      },
      onSearch(keyword) {
        search({
          keyword,
          openId: this.openId,
          page: this.page
        }).then(res => {
          this.searchList = res.data.data
        })
      },
      changeHotSearch() {
        hotSearch().then(res => {
          this.hotSearch = res.data.data
        })
      },
      showBookDetail(text, index) {
        console.log('show book detail' + text + index)
      },
      clearHistorySearch() {
        this.historySearch = []
        setStorageSync('historySearch', [])
      },
      searchKeyWord(text) {
        this.$refs.searchbar.setValue(text)
        this.onSearch(text)
      }
    },
    mounted() {
      this.openId = getStorageSync('openId')
      hotSearch().then(res => {
        this.hotSearch = res.data.data
      })
      this.page = 1
      this.hotSearchKeyword = this.$route.query.hotSearch
      this.historySearch = getStorageSync('historySearch') || []
    },
    onPageScroll() {
      if (this.searchFocus) {
        this.searchFocus = false
      }
    },
    onReachBottom() {
      if (this.showList) {
        this.page++
        const searchWord = this.$refs.searchbar.getValue()
        search({
          keyword: searchWord,
          openId: this.openId,
          page: this.page
        }).then(res => {
          const { book } = res.data.data
          if (book && book.length > 0) {
            this.searchList.book.push(...book)
          } else {
            showToast('没有更多的数据了')
          }
        })
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
