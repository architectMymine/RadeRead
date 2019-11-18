<template>
  <div>
    <DetailBook :book="book"></DetailBook>
    <DetailStat
      :readers="book.readers"
      :readerNum="book.readerNum"
      :rankNum="book.rankNum"
      :rankAvg="book.rankAvg"
    ></DetailStat>
    <DetailRate
      :rate-value="book.rateValue"
      @onRateChange="onRateChange"
    >
    </DetailRate>
    <DetailContents
      :contents="contents"
      @readBook="readBook"
    >
    </DetailContents>
  </div>
</template>

<script>
    import DetailBook from '../../components/detail/DetailBook'
    import DetailStat from '../../components/detail/DetailStat'
    import DetailRate from '../../components/detail/DetailRate'
    import DetailContents from '../../components/detail/DetailContents'
    import {bookDetail, bookRankSave, bookContents} from '../../API'
    import {getStorageSync} from '../../API/wechat'


    export default {
        components: {DetailContents, DetailRate, DetailStat, DetailBook},
        data() {
            return {
                book: {},
                contents: []
            }
        },
        methods: {
            onRateChange(value) {
                const openId = getStorageSync('openId')
                const {fileName} = this.$route.query
                bookRankSave({openId, fileName, rank: value}).then(res => {
                    this.getBookDetail()
                })
            },
            getBookDetail() {
                const openId = getStorageSync('openId')
                const {fileName} = this.$route.query
                if (openId && fileName) {
                    bookDetail({openId, fileName}).then(res => {
                        this.book = res.data.data
                    })
                }
            },
            getBookContents() {
                const {fileName} = this.$route.query
                if (fileName) {
                    bookContents({fileName}).then(res => {
                        this.contents = res.data.data
                    })
                }
            },
            readBook(href) {
                console.log('readbook...')
            }
        },
        mounted() {
            this.getBookDetail()
            this.getBookContents()
        }
    }
</script>

<style lang="scss" scoped>

</style>
