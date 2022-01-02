<template>
  <header class="bg-gray-900">
    <div class="flex items-center justify-between text-white px-4 py-3">
      <div class="text-gray-400 font-bold">DIGITIZE</div>
      <div class="flex" :class="{ antialiased: isOpen }">
        <button @click="toggle" class="px-2 text-gray-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <nav class="text-white" v-show="isOpen">
      <div class="px-2 pt-1 pb-5 border-b border-gray-100">
        <a href="#" class="block px-2 py-1 rounded font-semibold hover:bg-gray-800">List your property</a>
        <a href="#" class="block px-2 py-1 rounded font-semibold mt-1 hover:bg-gray-800">Trips</a>
        <a href="#" class="block px-2 py-1 rounded font-semibold mt-1 hover:bg-gray-800">Messages</a>
      </div>
      <div class="px-4 py-5">
        <div class="flex items-center">
          <img class="w-10 h-10 object-cover rounded-full border-gray-600 border-2" src="https://avatars.githubusercontent.com/u/60036248?v=4" alt="" />
          <span class="ml-4 text-gray-200">Saheb Mohammadi</span>
        </div>
        <div class="mt-5">
          <a href="#" class="block text-gray-400 hover:text-white">Account Settings</a>
          <a href="#" class="mt-3 block text-gray-400 hover:text-white">Support</a>
          <a href="#" class="mt-3 block text-gray-400 hover:text-white">Signout</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      console.log("clicked");
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
