<template>
  <div class="container mx-auto pt-16 md:pt-32 text-center break-normal">
    <div class="text-center">
      <p class="text-black font-extrabold text-6xl md:text-5xl">{{ ment }}</p>
      <p class="text-xl md:text-2xl text-gray-500">{{ subMent }}</p>
      <div class="border-solid inline-flex border-t-2 border-b-2 p-3 m-3 hover:bg-blue-300" >
        <a href="#" v-scroll-to="'#about'"  >
          <p>
            View #About ME
<!--            <i class="mdi mdi-arrow-right"></i>-->
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',

    data: () => ({
      ment: 'Modern하고 싶은 개발자',
      subMent: '안녕하세요! 만나뵙게되어 영광입니다.',
    }),

  };
</script>

<style scoped>

</style>
