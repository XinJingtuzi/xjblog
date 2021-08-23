// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // const authors = addCollection('Author')
    // const conpnyInfo = addCollection('conpnyInfo')
    const productInfo = addCollection('productInfo')
    const compInfo = addCollection('compInfo')

    // const author = authors.addNode({
    //   id: '1',
    //   title: 'The author'
    // })

    // posts.addNode({
    //   // id:1,
    //   title: 'The post',
    //   author1: store.createReference('Author', '1'),
    //   author2: store.createReference(author)
    // })
    const { data:data1 } = await axios.get(`${process.env.GRIDSOME_API_URL}/posts`)

    for (const item of data1) {
      compInfo.addNode({
        id: item.id,
        compnyName: item.name,
        sortDes: item.sortDes,
        des: item.des,
        beginTime: item.beginTime,
        endTime: item.endTime,
        icon:item.icon,
      })
    }
    const { data } = await axios.get(`${process.env.GRIDSOME_API_URL}/intruduses`)

    for (const item of data) {
      productInfo.addNode({
        ...item
      })
    }
    
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
// 自定义路由
  api.createPages(({ createPage }) => {
    console.log(createPage)
    createPage({
      path: '/productInfo',
      component: './src/pages/productInfo.vue'
    })
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
