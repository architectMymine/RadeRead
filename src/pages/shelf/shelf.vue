<template>
  <div>
    <ShelfUserInfo
      :user-info="userInfo"
      :read-day="readDay"
      :num="shelfList.length"
    >
    </ShelfUserInfo>
    <ShelfList
      :shelf-list="shelfList"
    ></ShelfList>
  </div>
</template>

<script>
  import ShelfUserInfo from '../../components/shelf/ShelfUserInfo'
  import { getStorageSync } from '../../API/wechat'
  import { userDay, bookIsInShelf } from '../../API'
  import ShelfList from '../../components/shelf/ShelfList'

  export default {
    components: { ShelfList, ShelfUserInfo },
    data() {
      return {
        userInfo: {},
        readDay: 0,
        shelfList: []
      }
    },
    onShow() {
      this.userInfo = getStorageSync('userInfo')
      const openId = getStorageSync('openId')
      userDay({ openId }).then(res => {
        this.readDay = res.data.data.day
      })
      bookIsInShelf({ openId }).then(res => {
        this.shelfList = res.data.data
        this.shelfList.push({})
      })
    }

  }
</script>

<style scoped lang="scss">

</style>
