<template>
  <div class="bg-gray-900" id="nav-bar">
    <nav class="flex max-w-6xl mx-auto items-center py-3">
      <div class="flex flex-wrap w-full mx-auto items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white">
          <ul class="list-reset flex justify-center flex-1 md:flex-none items-center uppercase">
            <li>
              <a class="py-2 px-3 text-white no-underline text-teal-dark border-b-2 border-teal-dark font-bold"
                 href="#">About</a>
            </li>
            <li>
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3 font-bold"
                href="#">portfolio</a>
            </li>
            <li>
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3 font-bold"
                href="#">blog</a>
            </li>
            <li>
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3 font-bold"
                href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'baseHeader',
  };
</script>

<style scoped>

</style>
