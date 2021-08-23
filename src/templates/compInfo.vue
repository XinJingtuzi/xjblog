<template>
  <Layout>
    <div class="container">
      <div class="project-header">
        <h1 class="project-title">{{$page.compData.name}}</h1>
        <div class="project-info">
          <div class="categories-container">
            <div class="categories">
              <span class="label">技术</span>
              <span class="category" v-for="(item,id) in $page.compData.tags" :key="id">{{item.name}}</span>
            </div>
          </div>
          <div class="year-container">
            <span class="label">{{$page.compData.beginTime}}</span>
            <div>{{$page.compData.endTime}}</div>
          </div>
        </div>
      </div>
      <div class="content">
        <p>
          <g-image :src="`${process.env.GRIDSOME_API_URL}${$page.compData.icon.url}`" width="2560"/>
        </p>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  compData: strapiPost(id:$id){
        id
        name
        sortDes
        des
        icon{
          url
        }
        beginTime
        endTime
        tags{
          name
        }
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
.project-title{
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
h1 {
    letter-spacing: -.01em;
}
.project-info {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
}
.project-info>div {
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
.category:after {
    content: ", ";
}
.project-info>div:last-of-type {
    margin: 0;
}
.content>p>img{
  width:100%;
}
</style>