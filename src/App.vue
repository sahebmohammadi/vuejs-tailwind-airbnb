<template>
  <div id="app" class="min-h-screen bg-gray-200 antialiased">
    <SiteHeader />
    <section class="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input class="w-full pl-10 pr-3 py-2 rounded-lg outline-none bg-gray-900 text-white focus:outline-none" type="text" placeholder="Search by keywords" />
      </div>

      <button class="outline-none border-0 inline-flex p-2 rounded-lg px-3 bg-gray-700 hover:bg-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <!-- <span class="text-white ml-1 font-medium"> Filters</span> -->
      </button>
    </section>
    <main class="px-4 py-6">
      <h3 class="text-xl tex-gray-900">Los Angeles</h3>
      <p class="text-gray-600">Live like the stars in these luxurious Southern California estates.</p>
      <div class="mt-6">
        <article class="">
          <div>
            <img class="rounded-lg h-64 object-cover w-full" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div class="relative -mt-16 px-4">
            <div class="shadow-xl rounded-lg p-4 bg-white">
              <span class="rounded-full bg-green-200 text-green-800 px-2 py-1 leading-none font-medium text-xs uppercase tracking-wide">Plus</span>
              <span class="text-gray-400 font-semibold uppercase ml-3">3 beds &bull; 2 baths</span>
              <h4 class="text-gray-900 mt-2 font-semibold text-base">Modern home in city center</h4>
              <div class="mt-1">
                <span class="text-gray-900">$1,400</span>
                <span class="text-gray-600 ml-1 text-sm">/wk</span>
              </div>
              <div class="mt-2 text-sm text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="ml-2">40 reviews</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";

export default {
  name: "app",
  components: {
    SiteHeader,
  },
};
</script>
