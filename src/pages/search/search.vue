<template>
  <div>
    <SearchList :data="data"></SearchList>
  </div>
</template>

<script>
  import SearchList from '../../components/search/SearchList'

  export default {
    computed: {
      data() {
        return {
          item: this.item,
          list: this.list
        }
      }
    },
    data() {
      return {
        item: [
          {
            icon: 'apps-o',
            title: 'Computer Science',
            subTitle: 'Category'
          },
          {
            icon: 'contact',
            title: 'Computer Science',
            subTitle: 'Author'
          },
          {
            icon: 'newspaper-o',
            title: 'Computer Science',
            subTitle: 'Publisher'
          }
        ],
        list: [
          {
            'id': 225,
            'fileName': '2016_Book_MicrofinanceEUStructuralFundsA',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg',
            'title': 'Microfinance, EU Structural Funds and Capacity Building for Managing Authorities',
            'author': 'Giovanni Nicola Pes',
            'publisher': 'Palgrave Macmillan',
            'bookId': '2016_Book_MicrofinanceEUStructuralFundsA',
            'category': 3,
            'categoryText': 'Economics',
            'language': 'en',
            'rootFile': 'OEBPS/9781137536013.opf'
          },
          {
            'id': 88,
            'fileName': '2018_Book_BetweenMobilityAndMigration',
            'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg',
            'title': 'Between Mobility and Migration',
            'author': 'Peter Scholten',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_BetweenMobilityAndMigration',
            'category': 2,
            'categoryText': 'SocialSciences',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 24,
            'fileName': '2018_Book_SecurityInComputerAndInformati',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg',
            'title': 'Security in Computer and Information Sciences',
            'author': 'Erol Gelenbe',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_SecurityInComputerAndInformati',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 225,
            'fileName': '2016_Book_MicrofinanceEUStructuralFundsA',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg',
            'title': 'Microfinance, EU Structural Funds and Capacity Building for Managing Authorities',
            'author': 'Giovanni Nicola Pes',
            'publisher': 'Palgrave Macmillan',
            'bookId': '2016_Book_MicrofinanceEUStructuralFundsA',
            'category': 3,
            'categoryText': 'Economics',
            'language': 'en',
            'rootFile': 'OEBPS/9781137536013.opf'
          },
          {
            'id': 88,
            'fileName': '2018_Book_BetweenMobilityAndMigration',
            'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg',
            'title': 'Between Mobility and Migration',
            'author': 'Peter Scholten',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_BetweenMobilityAndMigration',
            'category': 2,
            'categoryText': 'SocialSciences',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 24,
            'fileName': '2018_Book_SecurityInComputerAndInformati',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg',
            'title': 'Security in Computer and Information Sciences',
            'author': 'Erol Gelenbe',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_SecurityInComputerAndInformati',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }
        ]
      }
    },
    methods: {
      onTagClick(text, index) {
        console.log('tag...' + text + index)
      },
      onBtnClick() {
        console.log('btn....')
      }
    },
    components: {
      SearchList
    }
  }
</script>

<style scoped lang="scss">

</style>
