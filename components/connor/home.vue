<template>
  <div class="w-full h-screen container mx-auto pt-16 md:pt-32">
    <div class="flax text-center">
      <transition-group
        name="slide-fade"
        v-on:after-enter="fadeNext"
      >
        <p v-show="fade[0]" key="0" class="text-black font-extrabold text-6xl md:text-5xl">{{ ment }}</p>
        <p v-show="fade[1]" key="1" class="text-xl md:text-2xl text-gray-500">{{ subMent }}</p>
        <div v-show="fade[2]" key="3" class="border-solid inline-flex border-t-2 border-b-2 p-3 m-3 hover:bg-gray-300">
          <a href="#" v-scroll-to="'#nav-bar'">
            <p> View #About ME </p>
          </a>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  let fadeIdx = 0

  export default {
    name: 'home',

    data: () => ({
      ment: 'Modern하고 싶은 개발자',
      subMent: '안녕하세요! 만나뵙게되어 영광입니다.',

      fade: [false, false, false],
    }),

    methods: {
      fadeNext: function () {
        this.fade.splice(fadeIdx++, 1, true)
      }
    },

    mounted() {
      setTimeout(this.fadeNext, 300)
    }
  };
</script>

<style scoped>

  /** 1. 어떻게 노출될 것인가. 처음 진입 시작부 **/
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  /* 2. 애니메이션 진입 및 진출은 다른 지속 시간 및  */
  /* 타이밍 기능을 사용할 수 있습니다. */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  /* 3. leave-active 될때 */
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>
