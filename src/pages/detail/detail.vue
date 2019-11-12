<template>
  <div>
    <DetailBook :book="book"></DetailBook>
    <DetailStat
      :readers="book.readers"
      :readerNum="book.readerNum"
      :rankNum="book.rankNum"
      :rankAvg="book.rankAvg"
    ></DetailStat>
  </div>
</template>

<script>
    import DetailBook from '../../components/detail/DetailBook'
    import {bookDetail} from '../../API'
    import {getStorageSync} from '../../API/wechat'
    import DetailStat from '../../components/detail/DetailStat'

    export default {
        components: {DetailStat, DetailBook},
        data() {
            return {
                book: {}
            }
        },
        mounted() {
            const openId = getStorageSync('openId')
            const {fileName} = this.$route.query
            console.log(openId, fileName)
            if (openId && fileName) {
                bookDetail({openId, fileName}).then(res => {
                    this.book = res.data.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
