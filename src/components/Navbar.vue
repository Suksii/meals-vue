<script setup>
import SearchByName from './SearchByName.vue';
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-evenly gap-6 px-6 py-4 bg-gray-50 shadow-md rounded-lg">
        <div class="flex items-center gap-8">
            <p
                class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
                Search by category
            </p>
            <p
                class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out">
                Search by first letter
            </p>
        </div>
        <div class="w-full md:w-auto">
            <SearchByName />
        </div>
    </div>
</template>