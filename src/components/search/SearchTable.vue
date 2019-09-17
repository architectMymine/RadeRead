<template>
  <div class="search-table-wrapper">
    <div class="search-table-inner">
      <div
        class="search-table-book"
        v-for="(book, index) in data"
        :key="index"
        @click="onClick(book)">
        <div class="book-img-wrapper">
         <div class="book-img">
           <ImageView
             :src="book.cover"
           ></ImageView>
         </div>
        </div>
        <div class="book-info-wrapper">
          <div class="book-title">{{book.title}}</div>
          <div class="book-author">{{book.author}}</div>
          <div class="book-category">{{book.categoryText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    methods: {
      onClick(book) {
        this.$emit('onClick', book)
      }
    },
    components: { ImageView }
  }
</script>

<style scoped lang="scss">
  .search-table-wrapper {
    padding: 0 16px;
    .search-table-inner {
      .search-table-book {
        margin: 14.5px 0;
        display: flex;
        align-items: center;
        .book-img-wrapper {
          .book-img{
            width: 47px;
            height: 68.5px;
          }
        }
        .book-info-wrapper {
          width: 80%;
          margin-left: 15.5px;
          .book-title {
            width: 100%;
            color: #333;
            font-size: 16px;
            font-weight: 500;
            line-height: 22.5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .book-author {
            color: rgba(0,0,0,.65);
            font-size: 13px;
            line-height: 18px;
            margin-top: 5px;
          }
          .book-category {
            color: rgba(0,0,0,.45);
            font-size: 13px;
            line-height: 18px;
          }
        }
      }
    }
  }
</style>
