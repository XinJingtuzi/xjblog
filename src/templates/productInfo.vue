<template>
  <Layout>
    <div class="journal">
        <div class="container journal-container">
            <div class="journal-header">
                <h1 class="journal-title">{{$page.productInfo.name}}</h1>
                <div class="journal-meta"><div class="journal-author">
                    <span class="label">Author</span>
                    <span class="author-name">{{$page.productInfo.author}}</span>
                </div>
                <div class="journal-date">
                    <span class="label">beginDate</span>
                    <div>{{$page.productInfo.beginTime.split('T')[0]}}</div>
                </div>
                <div class="journal-time">
                    <span class="label">endDate</span>
                    <span>{{$page.productInfo.endTime.split('T')[0]}}</span>
                </div>
            </div>
        </div>
        <div class="journal-content">
            <h4>
                项目介绍
            </h4>
            <p>
              {{$page.productInfo.des}}
            </p>
            
            <p>
                <g-image :src="`${$page.productInfo.icon.url}`" width="2560" />
            </p>
        </div>
    </div>
</div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  productInfo: productInfo(id:$id){
        id
        name
        author
        des
        icon{
          url
        }
        tags{
            id
            name
        }
        beginTime
        endTime
        
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      // title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.journal-container {
    max-width: 840px;
}
@media (min-width: 860px){
    .container {
        padding: 0 6rem;
    }
}
.journal-header {
    padding: 2rem 0 4rem;
}
.journal-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
h1 {
    letter-spacing: -.01em;
}
.journal-meta {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
}
.journal-meta>div {
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
h4, h5, h6 {
    font-size: 1.15rem;
}
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
.content>p>img{
  width:100%;
}
</style>