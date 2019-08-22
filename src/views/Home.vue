<template>

  <div class="home">
    <!-- <Header /> -->
    <PostExpences msg="PostExpences Page"/>
    <!-- <Footer />   -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '../components/layout/Header.vue'
// import Footer from '../components/layout/Footer.vue'
import PostExpences from '@/components/PostExpences.vue'

export default {
  name: 'home',
  components: {
    PostExpences,
  }
}
</script>
