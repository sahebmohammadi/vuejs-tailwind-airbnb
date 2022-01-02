<template>
  <section class="bg-gray-800">
    <div class="flex justify-between px-4 py-2 items-center">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input class="w-full pl-10 pr-3 py-2 rounded-lg outline-none bg-gray-900 text-white focus:outline-none" type="text" placeholder="Search by keywords" />
      </div>

      <button type="button" class="outline-none border-0 inline-flex p-2 rounded-lg px-3 hover:bg-gray-600" @click="toggle" :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <!-- <span class="text-white ml-1 font-medium"> Filters</span> -->
      </button>
    </div>
    <form v-show="isOpen">
      <!--filter top section -->
      <fieldset class="border-t border-gray-900 py-4 px-4">
        <div class="flex items-center space-x-2">
          <label class="block w-1/2">
            <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
            <select name="" id="" class="form-select mt-1 w-full select">
              <option value="4">4</option>
            </select>
          </label>
          <label class="block w-1/2">
            <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
            <select name="" id="" class="form-select mt-1 w-full select">
              <option value="2">2</option>
            </select>
          </label>
        </div>
        <div class="mt-4">
          <label class="block">
            <span class="text-sm font-semibold text-gray-500">Price Range</span>
            <select name="" id="" class="form-select mt-1 select w-full">
              <option value="4">Up to 2,000$ /wk</option>
            </select>
          </label>
        </div>
      </fieldset>
      <fieldset class="border-t border-gray-900 py-4 px-4">
        <span class="text-sm font-semibold text-gray-500">Property Type</span>
        <label class="mt-3 flex text-white items-center">
          <input class="form-radio bg-gray-900 border-0 w-5 h-5" type="radio" name="propertyType" id="" value="house" />
          <span class="ml-2"> House</span>
        </label>
        <label class="mt-3 flex text-white items-center">
          <input class="form-radio bg-gray-900 border-0 w-5 h-5" type="radio" name="propertyType" id="" value="apartment" />
          <span class="ml-2"> Apartment</span>
        </label>
        <label class="mt-3 flex text-white items-center">
          <input class="form-radio bg-gray-900 border-0 w-5 h-5" type="radio" name="propertyType" id="" value="loft" />
          <span class="ml-2">Loft</span>
        </label>
        <label class="mt-3 flex text-white items-center">
          <input class="form-radio bg-gray-900 border-0 w-5 h-5" type="radio" name="propertyType" id="" value="townhouse" />
          <span class="ml-2"> Townhouse</span>
        </label>
      </fieldset>
      <fieldset class="border-t border-gray-900 py-4 px-4">
        <span class="text-sm font-semibold text-gray-500">Amenities</span>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="balcony" />
          <span class="ml-2 text-white">House</span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="airConditioning" />
          <span class="ml-2 text-white"> Air conditioning </span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="pool" />
          <span class="ml-2 text-white">Pool</span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="beach" />
          <span class="ml-2 text-white">Beach</span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="petFriendly" />
          <span class="ml-2 text-white"> Pet friendly</span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="kidFriendly" />

          <span class="ml-2 text-white"> Kid friendly</span>
        </label>
        <label class="mt-3 flex items-center">
          <input class="form-checkbox bg-gray-900 border-none rounded-md" type="checkbox" name="parking" />
          <span class="ml-2 text-white"> Parking</span>
        </label>
      </fieldset>
      <div class="bg-gray-900 py-4 px-4">
        <button class="block w-full bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
      </div>
    </form>
  </section>
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
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
