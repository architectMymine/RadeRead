<template>
  <div>
    <div class="home" v-if="isAuth">
      <SearchBar
        :disabled="false"
        @onClick='onSearchBarClick'
        :hotSearch="hotSearch"
      >
      </SearchBar>
      <HomeCard
        :data="homeCard"
        @onClick="onHomeBookClick"
      ></HomeCard>
      <HomeBanner
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        title="Rade读书上线啦"
        subTitle="立即体验"
        @onClick="onBannerClick"
      ></HomeBanner>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="为你推荐"
          :row="1"
          :col="3"
          :data="recommend"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('recommend')"
          @onBookClick="onBookClick"
        ></HomeBook>
      </div>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="免费阅读"
          :row="2"
          :col="2"
          :data="freeRead"
          mode="row"
          btn-text="换一批"
          @onMoreClick="recommendChange('freeRead')"
          @onBookClick="onBookClick"
        ></HomeBook>
      </div>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="当前最热"
          :row="1"
          :col="4"
          :data="hotBook"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('hotBook')"
          @onBookClick="onBookClick"
        ></HomeBook>
      </div>
      <div :style="{marginTop: '23px'}">
        <HomeBook
          title="分类推荐"
          :row="3"
          :col="2"
          :data="category"
          mode="category"
          btn-text="查看全部"
          @onMoreClick="onCategoryMoreClick"
          @onBookClick="onCategoryClick"
        ></HomeBook>
      </div>
    </div>
    <Auth v-if="!isAuth" @getUserInfo="init"></Auth>
  </div>
</template>

<script>
  import SearchBar from '../../components/home/Searchbar'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook'
  import Auth from '../../components/base/Auth'
  import {
    getHomeData,
    recommend,
    freeRead,
    hotBook,
    register
  } from '../../API'
  import {
    getSetting,
    getUserInfo,
    setStorageSync,
    getStorageSync,
    getUserOpenId,
    showLoading,
    hideLoading
  } from '../../API/wechat'


  export default {
    data() {
      return {
        hotSearch: '',
        homeCard: {},
        banner: {},
        recommend: [],
        freeRead: [],
        hotBook: [],
        category: [],
        isAuth: false
      }
    },
    methods: {
      recommendChange(key) {
        switch (key) {
          case 'recommend':
            recommend().then(response => {
              this.recommend = response.data.data
            })
            break
          case 'freeRead':
            freeRead().then(response => {
              this.freeRead = response.data.data
            })
            break
          case 'hotBook':
            hotBook().then(response => {
              this.hotBook = response.data.data
            })
        }
      },
      onHomeBookClick(book) {
        this.$router.push({
          path: '/pages/detail/main',
          query: {
            fileName: book.fileName
          }
        })
      },
      onSearchBarClick() {
        this.$router.push({
          path: '/pages/search/main',
          query: { hotSearch: this.hotSearch }
        })
      },
      onBannerClick() {
        console.log('banner ...')
      },
      onCategoryClick(category) {
        console.log(category)
      },
      onCategoryMoreClick() {
        this.$router.push({
          path: '/pages/categorylist/main'
        })
      },
      onBookClick(book) {
        this.$router.push({
          path: '/pages/detail/main',
          query: {
            fileName: book.fileName
          }
        })
      },
      getHomeData(openId, userInfo) {
        getHomeData({ openId }).then(response => {
          const {
            data: {
              hotSearch: {
                keyword
              },
              shelf,
              banner,
              recommend,
              freeRead,
              hotBook,
              category,
              shelfCount
            }
          } = response.data
          this.hotSearch = keyword
          this.banner = banner
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: userInfo.userInfo
          }
          hideLoading()
        }).catch(() => {
          hideLoading()
        })
      },
      getUserInfo() {
        const onOpenIdComplete = (openId, userInfo) => {
          this.getHomeData(openId, userInfo)
          register(openId, userInfo)
        }
        getUserInfo(
          (userInfo) => {
            console.log(userInfo)
            setStorageSync('userInfo', userInfo)
            const openId = getStorageSync('openId')
            if (!openId || openId.length === 0) {
              getUserOpenId(openId => onOpenIdComplete(openId, userInfo))
            } else {
              onOpenIdComplete(openId, userInfo)
            }
          },
          () => {
            console.log('fail...')
          }
        )
      },
      getSetting() {
        getSetting(
          'userInfo',
          () => {
            this.isAuth = true
            showLoading('正在加载中.....')
            this.getUserInfo()
          },
          () => {
            this.isAuth = false
          }
        )
      },
      init() {
        this.getSetting()
      }
    },
    mounted() {
      this.init()
    },
    components: {
      Auth,
      HomeBook,
      SearchBar,
      HomeCard,
      HomeBanner
    }

  }
</script>

<style scoped>

</style>
