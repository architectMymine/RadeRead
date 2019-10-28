<template>
  <div class="search-list-wrapper">
    <SearchItem
      icon="apps-o"
      :title="category"
      sub-title="Category"
      @onClick="showList(category,'category')"
      v-if="category"
    ></SearchItem>
    <SearchItem
      icon="user-o"
      :title="author"
      sub-title="Author"
      @onClick="showList(author,'author')"
      v-if="author"
    ></SearchItem>
    <SearchItem
      icon="newspaper-o"
      :title="pulisher"
      sub-title="Pulisher"
      @onClick="showList(pulisher,'pulisher')"
      v-if="pulisher"
    ></SearchItem>
    <SearchTable
      :data="data.book"
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
        if (this.data && this.data.category && this.data.category.length > 0) {
          return this.data.category[0].categoryText
        } else {
          return false
        }
      },
      author() {
        if (this.data && this.data.author && this.data.author.length > 0) {
          return this.data.author[0].author
        } else {
          return false
        }
      },
      pulisher() {
        if (this.data && this.data.publisher && this.data.publisher.length > 0) {
          return this.data.publisher[0].publisher
        } else {
          return false
        }
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
