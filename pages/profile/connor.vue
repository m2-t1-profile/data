<template>
  <div class="w-full bg-cover bg-bottom">

    <section id="about" class="h-screen">
      <about-connor></about-connor>
    </section>
    <section id="portfolio" class="h-screen">
      <port-folio></port-folio>
    </section>
  </div>
</template>

<script>
  // http://findmatthew.com/
  import simpleIcons from 'simple-icons';

  export default {
    // scrollToTop: true,
    layout: 'baseLayout',
    name: 'connor',

    components: {
      AboutConnor: () => import('~/components/connor/about'),
      PortFolio: () => import('~/components/connor/portfolio'),
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
