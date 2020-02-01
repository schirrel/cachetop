<template>
  <main id="app">
      <ct-menu></ct-menu>
    <section>
       <router-view></router-view>
      
    </section>
    <footer>
      Feito por Alan (@schirrel)
      </footer>
  </main>
  
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    'ct-menu': Menu
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main,section{
  position: relative;
  margin: 0px;
}
section {
  margin-top: 60px;
}
</style>
