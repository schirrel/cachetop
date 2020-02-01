<template>
  <nav class="navigation">
    <section class="container">
      <a class="navigation-title">
      <h1 class="title">CacheTOP</h1>
      </a>
      <ul class="navigation-list float-right">
        <li class="navigation-item">
          <router-link class="navigation-link" to="/">Jogo </router-link>
        </li>
        <li class="navigation-item">
          <router-link class="navigation-link" to="/jogadores">Jogadores</router-link>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  background: #f4f5f6;
  border-bottom: 0.1rem solid #d1d1d1;
  display: block;
  height: 5.2rem;
  left: 0;
  max-width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}
.navigation-title{
  float: left;
}
.navigation .container {
  padding-bottom: 0;
  padding-top: 0;
}

.navigation .navigation-list {
  list-style: none;
  margin-bottom: 0;
  margin-right: 0;
}

@media (min-width: 80rem) {
  .navigation .navigation-list {
    margin-right: 0;
  }
}

.navigation .navigation-item {
  float: left;
  margin-bottom: 0;
  margin-left: 2.5rem;
  position: relative;
}

.navigation .img {
  fill: #9b4dca;
  height: 2rem;
  position: relative;
  top: 0.3rem;
}

.navigation .navigation-title,
.navigation .title {
  color: #606c76;
  font-family: Gotham Rounded A, Gotham Rounded B, Helvetica Neue, Arial,
    sans-serif;
  position: relative;
}

.navigation .navigation-link,
.navigation .navigation-title,
.navigation .title {
  display: inline;
  font-size: 1.6rem;
  line-height: 5.2rem;
  padding: 0;
  text-decoration: none;
}

.navigation .navigation-link.active,
.router-link-active {
  color: #606c76;
}
</style>
