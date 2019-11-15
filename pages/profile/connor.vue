<template>

  <div class=" w-full bg-cover bg-bottom">
    <section id="main" class=" h-screen">
      <home-connor></home-connor>
    </section>
    <section id="about" class="h-screen">
      <about-connor></about-connor>
    </section>
    <section id="portfolio" class="h-screen">
      <about-connor></about-connor>
    </section>
  </div>
</template>

<script>
  // http://findmatthew.com/

  import simpleIcons from 'simple-icons';

  export default {
    // scrollToTop: true,

    name: 'connor',

    components: {
      'HomeConnor': () => import('@/components/connor/home'),
      'AboutConnor': () => import('@/components/connor/about'),
    },

    data: () => ({
      icons: simpleIcons,
    }),
    fetch() {

    },
    mounted() {

      window.addEventListener('scroll', this.onscroll);
    }
    ,
    beforeDestroy() {
      window.removeEventListener('scroll', this.onscroll);
    }
    ,
    methods: {
      onScroll() {

      }
      ,
    }
    ,
  };
</script>

<style scoped>

</style>
