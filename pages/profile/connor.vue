<template>
  <div class="w-full bg-cover bg-bottom">

    <!--  유동적으로 늘릴 예정..  -->
    <section id="about">
      <about-connor></about-connor>
    </section>
    <section id="portfolio" class="h-screen">
      <port-folio></port-folio>
    </section>
  </div>
</template>

<script>
  // http://findmatthew.com/

  export default {
    // scrollToTop: true,
    layout: 'baseLayout',
    name: 'connor',

    components: {
      AboutConnor: () => import('~/components/connor/about'),
      PortFolio: () => import('~/components/connor/portfolio'),
    },

    data: () => ({}),
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
    methods: { }
    ,
  };
</script>

<style scoped>

</style>
