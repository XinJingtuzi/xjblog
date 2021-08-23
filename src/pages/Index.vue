<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">辛静</h1>
        <h2 class="hero-subtitle">18519592316</h2>
      </div>
      <div class="projects">
        <div class="project" v-for="(item,id) in $page.comInfo.edges" :key="id">
          <g-link :to="`/compInfo/${item.node.id}`" class="project-link">
            <g-image alt="Banana" :src="`${process.env.GRIDSOME_API_URL}${item.node.icon.url}`" class="img thumbnail"/>
            <h3 class="project-title">{{item.node.name}}</h3>
            <div class="categories">
              <span class="category" v-for="(tag,id) in item.node.tags" :key="id">{{tag.name}}</span>
            </div>
          </g-link>
        </div>
        <div style="float:none;clear:both"></div>
      </div>
      <div >
    </div>
    <div class="latest-journals-heading container" >
      <span class="label" >项目经验</span>
    </div>
    <div class="latest-journals" >
      <div class="container" >
        <g-link :to="`/productInfo/${item.node.id}`" class="journal" v-for="(item,id) in $page.produceInfo.edges" :key="id">
          <h3 class="journal-title" >{{item.node.name}}</h3>
        </g-link>
      </div>
    </div>
  </div>
  </Layout>
</template>
<page-query>
query {
   comInfo:allStrapiPost{
    edges{
      node{
        id
        name
        sortDes
        icon{
          url
        }
        tags{
          id
          name
        }
      }
    }
  },
  produceInfo:allProductInfo{
    edges{
      node{
        id
        name
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: '经历'
  }
}
</script>

<style scoped>
.container{max-width:1200px;margin:0 auto;padding:0 2rem}
@media (min-width:860px){.container{padding:0 6rem}}
.contact-header{padding:2rem 0 4rem}
.contact-title{font-size:4rem;margin:0 0 4rem;padding:0}
.sender-info{display:flex;flex-wrap:wrap;margin-bottom:2rem}
.sender-info>div{flex:1;margin-right:4rem}
.sender-info>div:last-of-type{margin:0}
input:focus,textarea:focus{border-color:var(--color-contrast-1)}
input,textarea{background:transparent;border:1px solid #ededed;outline:none;border-radius:.3rem;padding:.8rem 1rem;color:inherit;font-size:1rem;width:100%}textarea{resize:none;height:140px}
.button{color:var(--color-base);background:var(--color-contrast);outline:none;border:0;font-size:.8rem;padding:.8rem 1.6rem;border-radius:.3rem;margin-top:2rem;cursor:pointer;transition:opacity .25s ease;font-size:500;letter-spacing:.035em}
.button:hover{opacity:.6}.button:focus{border:1px solid #ededed}
.hero{text-align:center;width:480px;max-width:100%;margin:0 auto;padding:4rem 0 8rem}
.hero-title{font-size:3rem;font-weight:700;padding:0;margin:0 0 2rem}
.hero-subtitle,.hero-subtitle p,.hero-title p{margin:0;padding:0}
.hero-subtitle{font-size:1.15em;font-weight:400;line-height:1.68;opacity:.6}
.projects{display:grid;grid-template-columns:1fr 1fr;grid-gap:4rem}
.project-link{text-decoration:none}
.thumbnail{height:560px;-o-object-fit:cover;object-fit:cover;transition:all .15s ease;box-shadow:0 0 40px -20px rgba(0,0,0,.25)}
.project-title{font-size:1rem;color:var(--color-contrast);margin:2rem 0 1rem}
.categories{font-size:.8rem;color:var(--color-contrast-1)}
.category{margin-right:.8rem}
.category:last-of-type{margin:0}

.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
.project{
    grid-column: 1 / span 2;
    text-align: center;
}
.project .img{width: 100%;height:400px}
.project:nth-child(2),.project:nth-child(3){
    grid-column: 1 / span 1;
}

.project:nth-child(3),.project:nth-child(3){
    grid-column: 2 / span 1;
}

.project:hover .thumbnail{transform:scale(1.02);box-shadow:0 20px 40px -20px rgba(0,0,0,.25)}
@media (min-width:920px){
  .projec{grid-column:auto/span 1}
  .project:nth-child(3n+1){grid-column:auto/span 2}
}
.latest-journals-heading{margin-top:6rem;margin-bottom:1rem;font-size:.6rem;font-weight:400;text-transform:uppercase}
.latest-journals{    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;max-width:100%;border:1px solid #ededed}
.latest-journals>.container{display:flex;flex-wrap:wrap}
.journal {
    flex: 0 0 100%;
    display: block;
    padding: 2rem;
    transition: background .25s ease;
    text-decoration: none;
    border-bottom: 1px solid #ededed;
}
@media (min-width: 580px)
{.journal:first-child, .journal:nth-child(2) {
    border-bottom: 1px solid #ededed;
}}
@media (min-width: 580px)
{.journal:first-child {
    border-right: 1px solid #ededed;
}}
@media (min-width: 580px)
{.journal {
    flex: 0 0 50%;
}}
@media (min-width: 920px)
{.journal:first-child, .journal:nth-child(2), .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid #ededed;
}}
@media (min-width: 920px)
{.journal {
    flex: 0 0 25%;
}}
.journal:hover{
  background: #ededed;
}
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
.journal-post>{transition:transform .5s ease}.journal-post:hover{background-color:#ededed}
.journal-post:hover>{transform:translateX(4rem)}
.journal-post h1,.journal-post h2{margin:0;padding:0}
.journal-title{font-size:2rem;color:var(--color-contrast)}
.journal-excerpt{color:var(--color-contrast-1)}
@media (min-width:560px){.journal-post{padding:3rem 0}}
@media (min-width:860px){.journal-post{padding:5rem 0}}


</style>