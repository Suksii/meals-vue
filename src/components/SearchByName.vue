<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');

const searchByName = () => {
    if (searchQuery.value.trim()) {
        router.push({ name: 'byName', params: { name: searchQuery.value.trim() } })
        searchQuery.value = "";
    }
}

</script>
<template>
    <div class="relative w-full flex justify-center items-center min-w-[400px]">
        <input v-model="searchQuery" placeholder="" id="search"
            class="peer w-full py-2 px-3 bg-gray-200 cursor-default focus:outline-none" @keyup.enter="searchByName" />
        <label for="search"
            class="absolute -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-focus:text-gray-900 peer-focus:text-[14px] peer-focus:font-semibold peer-focus:-top-3.5 left-2 px-1.5 transition-all duration-300 z-45"
            :class="searchQuery !== '' ? '-top-3.5 text-[14px] font-semibold' : ''">Search
            by name</label>
        <button @click="searchByName"
            class="py-2 px-4 bg-gray-700 text-white font-semibold outline-none hover:bg-gray-900 duration-300 transition-all ease-in-out">
            Search
        </button>
    </div>
</template>
