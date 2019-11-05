<template>
  <div class="w-full m-0 p-0 bg-cover bg-bottom">
    <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <p class="text-black font-extrabold text-3xl md:text-5xl">{{ ment }}</p>
      <p class="text-xl md:text-2xl text-gray-500">{{ subMent }}</p>

      <div class="flex flex-wrap mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto items-center justify-between">
        <a class="link" href="#" data-tippy-content="@connor">
          <svg class="">
            <title>github</title>
            <path v-bind:d="simpleIcons.get('github').path"></path>
          </svg>
        </a>
        <a class="link" href="#" data-tippy-content="@connor">
          <svg class="">
            <title>github</title>
            <path v-bind:d="simpleIcons.get('github').path"></path>
          </svg>
        </a>
        <a class="link" href="#" data-tippy-content="@connor">
          <svg class="">
            <title>github</title>
            <path v-bind:d="simpleIcons.get('github').path"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // import simpleIcons from 'simple-icons';

  export default {
    name: 'connor',
    layout: 'baseLayout',

    data: () => ({
      simpleIcons: simpleIcons,
      ment: '안녕하세요! 만나뵙게되어 영광입니다.',
      subMent: '환영합니다!',
    }),
  };
</script>

<style scoped>

</style>
