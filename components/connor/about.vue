<template>
  <div class="container mx-auto ">
    <div class="flex my-20 mb-4">
      <div class="w-3/4 bg-gray-500">
        <div class="flex flex-col">
          <!--      <p class="text-black font-extrabold text-3xl md:text-3xl">About</p>-->
          <div>
            <img class="float-left rounded-full mr-4 md:w-40" src="/Connor.jpg" title="To Profile">
          </div>
          <div>
            <p class="text-6xl md:text-6xl uppercase">MinTae Kim</p>
          </div>
          <div>
            <p class="text-4xl md:text-3xl uppercase">Core Value</p>
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

    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia
          diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
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
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
