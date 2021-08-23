<template>
  <Layout>
    <div class="container" >
      <div class="journal-hero" >
        <h1 class="journal-header" >
          全部的列表哦
        </h1>
      </div>
    </div>
    <g-link v-for="(item,id) in $page.produceInfo.edges" :key="id" :to="`/productInfo/${item.node.id}`" class="journal-post" >
      <div class="container journal" >
        <h2 class="journal-title" >{{item.node.name}}</h2>
        <p class="journal-excerpt" >{{item.node.des}}</p>
      </div>
    </g-link>
  </Layout>
</template>
<page-query>
query {
  produceInfo:allProductInfo{
    edges{
      node{
        id
        name
        des
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style scoped>
.container{max-width:1200px;margin:0 auto;padding:0 2rem}

.journal-container{max-width:840px}
.journal-header{padding:2rem 0 4rem}
.journal-title{font-size:4rem;margin:0 0 4rem;padding:0}
.journal-meta{display:flex;flex-wrap:wrap;font-size:.8rem}
.journal-meta>div{margin-right:4rem}
.journal-meta>div:last-of-type{margin:0}
.container.journal{max-width:720px}
.journal-hero{padding:4rem 0;text-align:center;color:#ededed}
.journal-header{font-size:3rem;font-weight:700;padding:0;margin:0}
.journal-post{display:block;padding:2rem 0;text-decoration:none;transition:background .5s ease}
.journal-post>div{transition:transform .5s ease}.journal-post:hover{background-color:#ededed}
.journal-post:hover>div{transform:translateX(4rem)}
.journal-post h1,.journal-post h2{margin:0;padding:0}
.journal-title{font-size:2rem;color:var(--color-contrast)}
.journal-excerpt{color:var(--color-contrast-1)}
@media (min-width:560px){.journal-post{padding:3rem 0}}
@media (min-width:860px){.journal-post{padding:5rem 0}}


</style>