<template>
  <div class="flex content-between bg-gray-500 w-full h-screen">
    <div class="relative container w-1/3 bg-gray-100">
      <nuxt-link to="/profile/connor" class="rounded h-full text-grey-darkest no-underline shadow-md">
        <img class="absolute object-cover w-full h-full" src="/Connor.jpg" title="To Profile">
      </nuxt-link>
      <div class="absolute z-10 text-gray-100 font-bold bottom-0">
        <div class="text-3xl">
          JING COUNTY
        </div>
        <div class="text-5xl">
          MINTAE-KIM
        </div>
      </div>
    </div>
    <div class="relative w-1/3 bg-gray-400">
      <!--      <div class="absolute z-10">HIIIIII</div>-->
      <!--      <nuxt-link to="/profile/connor">-->
      <!--        <img class="absolute object-cover w-full h-full cursor-pointer" src="/Connor.jpg">-->
      <!--      </nuxt-link>-->
    </div>
    <div class="w-1/3 bg-gray-300">
      <!--      <nuxt-link to="/user2">user2</nuxt-link>-->
      <!--      <img class="object-cover w-full h-full cursor-pointer" src="/Connor.jpg">-->
    </div>

  </div>
</template>

<script>
  // import TInput from 'vue-tailwind/src/elements/TInput.vue';

  export default {
    name: 'index',

    components: {
      // TInput,
    },

    data: () => ({
      model: '',
    }),
  };
</script>

<style>


</style>
