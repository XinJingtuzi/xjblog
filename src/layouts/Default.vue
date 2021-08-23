<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link active">
            <img src="https://img.hengchang6.com/hyd/h5/entryH5PbocPro/static/img/bac-blue-top.0fb6ebc.jpg" class="logo">
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/productInfo/" :class="$route.path.includes('productInfo')?'active':''">项目介绍</g-link>
          <g-link to="/contact" :class="$route.path.includes('Say')?'active':''">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <footer class="footer" ><div class="container" ><span >Copyright © 2021</span></div></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>

.header{position:relative;height:6rem;z-index:10}
.header.sticky{position:fixed;top:0;left:0;width:100%}
.header>.container{display:flex;align-items:center;justify-content:space-between;height:100%}
.home-link{text-decoration:none}
.logo{height:1.5rem}
.site-name{font-size:.9rem;font-weight:700;letter-spacing:.05em;text-decoration:none;text-transform:uppercase}
.nav>a{font-size:.9rem;font-weight:600;text-decoration:none;margin-top:4px;margin-right:3rem;padding-bottom:4px;border-bottom:1px solid;border-color:transparent;transition:border .15s}
.nav>:last-of-type{margin:0}
.nav>.active,.nav>:hover{border-color:inherit}
.footer[data-v-07acb5f8]{font-size:.8rem;padding:6rem 0}
*{box-sizing:border-box}
.container{max-width:1200px;margin:0 auto;padding:0 2rem}
@media (min-width:860px){.container{padding:0 6rem}}
a{color:inherit}
img{max-width:100%}
.footer{
    font-size: .8rem;
    padding: 6rem 0;
}
</style>
