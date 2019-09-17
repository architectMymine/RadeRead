<template>
  <div class="search-list-wrapper">
    <SearchItem
      :icon="category.icon"
      :title="category.title"
      :sub-title="category.subTitle"
      @onClick="showList(category.title,'category')"
    ></SearchItem>
    <SearchItem
      :icon="author.icon"
      :title="author.title"
      :sub-title="author.subTitle"
      @onClick="showList(author.title,'author')"
    ></SearchItem>
    <SearchItem
      :icon="pulisher.icon"
      :title="pulisher.title"
      :sub-title="pulisher.subTitle"
      @onClick="showList(pulisher.title,'pulisher')"
    ></SearchItem>
    <SearchTable
      :data="data.list"
      @onClick="onBookClick"
    ></SearchTable>
  </div>
</template>

<script>
  import SearchItem from './SearchItem'
  import SearchTable from './SearchTable'

  export default {
    components: { SearchTable, SearchItem },
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    computed: {
      category() {
        return this.data.item[0]
      },
      author() {
        return this.data.item[1]
      },
      pulisher() {
        return this.data.item[2]
      }
    },
    methods: {
      showList(text, key) {
        console.log(text, key)
      },
      onBookClick(book) {
        console.log(book)
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
