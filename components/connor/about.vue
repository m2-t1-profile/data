<template>
  <div class="container mx-auto">
    <!--<transition-group-->
    <!--name="slide-fade"-->
    <!--appear-->
    <!--duration="{ enter: 500, leave: 800 }"-->
    <!--&gt;-->
    <!--<div class="flex flex-inline my-10">-->
    <!--<div key="0" class="w-1/4 bg-gray-200 text-center"><i class="mdi mdi-speedometer"></i></div>-->
    <!--<div key="1" class="w-1/4 bg-gray-300 text-center">2</div>-->
    <!--<div key="2" class="w-1/4 bg-gray-400 text-center">3</div>-->
    <!--<div key="3" class="w-1/4 bg-gray-500 text-center">4</div>-->
    <!--</div>-->
    <!--</transition-group>-->

    <div class="flex content-center flex-wrap bg-gray-200 h-48 my-4">

      <p class="text-4xl md:text-3xl uppercase">Core Value</p>

      <div class="w-1/4 bg-gray-200 p-2">

        <!--<div class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 text-center">-->
          <!--<svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
            <!--<path d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z"/>-->
          <!--</svg>-->
        <!--</div>-->
        <div class="bg-white rounded-t-lg border-t border-l border-r overflow-hidden  border-gray-400 p-4 text-center">
          <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z"/>
          </svg>
          <div>확실한아아앙</div>
        </div>

        <!--<div class="flex-col">-->
        <!--<div>나는 사각형입니다.</div>-->
        <!--<div>나는 사각형입니다.</div>-->
        <!--<div>나는 사각형입니다.</div>-->
        <!--<div>나는 사각형입니다.</div>-->
        <!--</div>-->
      </div>
      <div class="w-1/4 bg-gray-300 text-center p-2">핵심 가치ㄹㅇㄴ<br/>ㅇㅁㄹㄴㅇㅁㄹㅇㄴㅁㄹㄴㅁㅇㄹㅇㄴㅁㄹㄴㅁㄹㄴㅇㅁ</div>
      <div class="w-1/4 bg-gray-400 text-center p-2">ㄹㅇㄴㅁㄹㄴㅇㅁㄹㄴㅇㅁㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅇㅁㄹ</div>
      <div class="w-1/4 bg-gray-500 text-center p-2">ㄹㄴㅇㅁㄹㄴㅇㅁㄹㄴㅁㅇㄹㄴㅇㅁㄹㅇㄴㅁㄹㄴㅇㅁㅍㅊㅌㅋㅍㅌㅋㅊㅍㅌㅊㅋㅍㅍㅊㅌㅋㅍㅌㅋㅊㅍㅌㅋㅊㅍㅌㅋㅍㅌㅋㅊㅋㅊㅋ</div>
    </div>

    <div class="flex my-4 mb-4">
      <div class="w-3/4 bg-gray-500">
        <div class="flex flex-col">
          <div>
            <img class="float-left rounded-full mr-4 md:w-40" src="/Connor.jpg" title="To Profile">
          </div>
          <div>
            <p class="text-6xl md:text-6xl uppercase">MinTae Kim</p>
          </div>
          <div>

            <div>PHP for Laravel</div>
            <div>JS</div>
            <div>123123</div>
          </div>
        </div>
      </div>

      <div class="w-1/4 bg-gray-400">
        <div class="flex flex-col">
          <div>
            <line-chart
              :chartdata="chartdata"
              :options="options">
            </line-chart>
          </div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  export default {
    name: 'about',
    components: {
      LineChart: () => import('~/components/Charts'),
    },

    data: () => ({
      show: true,

      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }),
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
