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

    <div class="flex flex-wrap content-center h-48 my-4 ">
      <div class="w-full text-center my-2">
        <p class="text-4xl md:text-3xl uppercase">Core Value</p>
      </div>

      <!-- Code -->
      <div class="flex w-full rounded-lg bg-gray-200">
        <div class="w-1/4 p-2">
          <div class="bg-white rounded-lg border overflow-hidden border-gray-400 p-4 text-center">
            <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                d="M0.707106781,10.7071068 L-2.00988464e-13,10 L5.48528137,4.51471863 L6.89949494,5.92893219 L2.82842712,10 L6.89949494,14.0710678 L5.48528137,15.4852814 L0.707106781,10.7071068 Z M19.2928932,10.7071068 L20,10 L14.5147186,4.51471863 L13.1005051,5.92893219 L17.1715729,10 L13.1005051,14.0710678 L14.5147186,15.4852814 L19.2928932,10.7071068 Z"
                id="Combined-Shape"></path>
            </svg>
            <div class="mb-1 font-bold">Code</div>
            <div class="text-xs">더 가치 있고, 모던한 코드를 생산하는것을 좋아합니다.</div>
          </div>
        </div>
        <!-- Recollect -->
        <div class="w-1/4 p-2">
          <div class="bg-white rounded-lg border overflow-hidden border-gray-400 p-4 text-center">
            <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                d="M4.99201702,4 C3.8918564,4 3,4.88670635 3,5.99810135 L3,12 L0,12 L4,16 L8,12 L5,12 L5,6 L12,6 L14,4 L4.99201702,4 Z M15,8 L12,8 L16,4 L20,8 L17,8 L17,14.0018986 C17,15.1054196 16.0998238,16 15.007983,16 L6,16 L8,14 L15,14 L15,8 Z"
                id="Combined-Shape"></path>
            </svg>
            <div class="mb-1 font-bold">Recollect</div>
            <div class="text-xs">더 나은 삽질을 위하여 항상 회고합니다.</div>
          </div>
        </div>
        <!-- Sharing -->
        <div class="w-1/4 p-2">
          <div class="bg-white rounded-lg border overflow-hidden border-gray-400 p-4 text-center">
            <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                d="M5.08261143,12.1593397 C4.54304902,12.6798471 3.80891237,13 3,13 C1.34314575,13 0,11.6568542 0,10 C0,8.34314575 1.34314575,7 3,7 C3.80891237,7 4.54304902,7.32015293 5.08261143,7.84066029 L14.0226687,3.37063167 C14.0077053,3.24918566 14,3.12549267 14,3 C14,1.34314575 15.3431458,0 17,0 C18.6568542,0 20,1.34314575 20,3 C20,4.65685425 18.6568542,6 17,6 C16.1910876,6 15.456951,5.67984707 14.9173886,5.15933971 L5.97733131,9.62936833 C5.99229467,9.75081434 6,9.87450733 6,10 C6,10.1254927 5.99229467,10.2491857 5.97733131,10.3706317 L14.9173886,14.8406603 C15.456951,14.3201529 16.1910876,14 17,14 C18.6568542,14 20,15.3431458 20,17 C20,18.6568542 18.6568542,20 17,20 C15.3431458,20 14,18.6568542 14,17 C14,16.8745073 14.0077053,16.7508143 14.0226687,16.6293683 L5.08261143,12.1593397 L5.08261143,12.1593397 Z"
                id="Combined-Shape"></path>
            </svg>
            <div class="mb-1 font-bold">Sharing</div>
            <div class="text-xs">많은 지식을 나누고, 함께 하는것을 좋아합니다.</div>
          </div>
        </div>
        <!-- Study -->
        <div class="w-1/4 p-2">
          <div class="bg-white rounded-lg border overflow-hidden border-gray-400 p-4 text-center">
            <svg class="fill-current text-teal-500 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
              <path
                d="M4,10 L12,10 L12,12 L4,12 L4,10 L4,10 Z M4,14 L12,14 L12,16 L4,16 L4,14 L4,14 Z M4,4 L12,4 L12,8 L4,8 L4,4 L4,4 Z M16,2 L16,1 L16,0 L0,0 L0,1 L0,1 L0,17.0057979 C0,18.656688 1.34320226,20 3.00012623,20 L17,20 C18.6534829,20 20,18.6601943 20,17.0074602 L20,3 L20,2 L16,2 L16,2 L16,2 Z M16,4 L16,17.0066023 C16,17.5552407 16.4438648,18 17,18 C17.5522847,18 18,17.5553691 18,16.9991283 L18,4 L16,4 L16,4 L16,4 Z M2,2 L14,2 L14,17.0057979 C14,17.3541355 14.0597981,17.6887794 14.1697239,18 L3.00748397,18 C2.44892021,18 2,17.5552407 2,17.0066023 L2,2 L2,2 L2,2 L2,2 Z"
                id="Combined-Shape"></path>
            </svg>
            <div class="mb-1 font-bold">Study</div>
            <div class="text-xs">부족한 것이 많습니다. 그렇기에 학습을 꾸준히 합니다.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex my-4 mb-4">
      <div class="p-3 w-2/6 bg-gray-300">
        <div class="flex flex-col">
          <div class="flex justify-center">
            <img class="rounded-full md:w-40" src="/Connor.jpg" title="To Profile">
          </div>
          <div class="text-center">
            <p class="text-6xl md:text-6xl uppercase">MinTae-Kim</p>
          </div>
        </div>
      </div>
      <div class="flex-col p-3 w-4/6 bg-gray-400">
        <p class="text-sm md:text-lg font-semibold">능력치(매우 주관적)</p>
        <div class="my-2">
          <div class="flex flex-row justify-between">
            <div v-for="item in itmes" class="mx-1">
              <!--              <vc-donut-->
              <!--                :sections="[{ 'value':item.value}]"-->
              <!--                :size="100"-->
              <!--              >-->
              <!--                <p class="text-sm md:text-mg uppercase">{{item.label}}</p>-->
              <!--              </vc-donut>-->
              <!--              <p class="text-center">{{ item.value }}점</p>-->

              <t-dropdown
                dropdown-class="w-64 bg-blue-500 text-white border-blue-500 rounded-lg border shadow-md p-6 z-10"
                :text="item.label"
              >
                <p></p>
              </t-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-1">
      <div>
        <p>흥미 있는 스택</p>
      </div>
      <div class="flex flex-wrap content-start bg-gray-200">
        <!-- php -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/iconfinder_php-logo_1012812.svg" alt="C#">
        </div>
        <!-- Laravel -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/laravel.svg" alt="Laravel">
        </div>
        <!-- JS -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/iconfinder_187_Js_logo_logos_4373213.svg" alt="javaScript">
        </div>
        <!-- Vue -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-vue-js.svg" alt="VueJS">
        </div>
        <!-- react -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-react.svg" alt="react">
        </div>
        <!-- mariadb -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/mariadb-ar21.svg" alt="mariadb">
        </div>
        <!-- docker -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-docker.svg" alt="docker">
        </div>
        <!-- python -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-python.svg" alt="python">
        </div>
        <!-- C# -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-c-sharp-logo.svg" alt="C#">
        </div>
        <!-- golang -->
        <div class="w-1/5 p-2 text-center">
          <img class="object-center inline-block w-20 h-20 mr-4" src="/svg/icons8-golang.svg" alt="golang">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'about',
    components: {},

    data: () => ({

      icons: null,
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
      itmes: [
        {label: 'PHP', value: 77},
        {label: 'JS', value: 60},
        {label: 'MySql', value: 60},
        {label: 'HTML/CSS', value: 50},
        {label: 'C#', value: 60},
        {label: 'Linux', value: 50},
        {label: 'python', value: 40},
      ],
      interests: [
        'php',
        'laravel',
        'js',
        'vuejs',
        'node',
        'react',
        'github',
        'python',
        'csharp',
      ],
    }),
    methods: {},
    mounted() {
    },
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
