<script setup>
import { ref } from 'vue';
import SearchByName from './SearchByName.vue';

const lettersShown = ref(false);
const categoriesShown = ref(false);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const showLetters = () => {
    categoriesShown.value = false;
    lettersShown.value = !lettersShown.value;
}
const showCategories = () => {
    lettersShown.value = false;
    categoriesShown.value = !categoriesShown.value;
}

</script>

<template>
    <div class="bg-gray-50 shadow-md lg:h-[110px]">
        <div
            class="flex flex-col lg:flex-row w-full md:w-[80%] mx-auto items-center justify-between gap-6 px-6 md:px-0 py-4">
            <div class="flex items-center text-center gap-8 group">
                <div class="relative">
                    <router-link to="/" class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer text-gray-700 hover:text-gray-800
                        border-b-2 border-transparent hover:border-gray-800 transition-all duration-300 ease-in-out">
                        Home
                    </router-link>
                </div>
                <div class="relative">
                    <p class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer text-gray-700 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800 transition-all duration-300 ease-in-out"
                        @click="showCategories">
                        Search by category
                    </p>
                    <transition name="fade" enter-active-class="transition duration-300 ease-out transform"
                        enter-from-class="opacity-0 scale-95 -translate-y-12" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-300 ease-in transform"
                        leave-from-class="opacity-100 scale-100 " leave-to-class="opacity-0 scale-95 translate-y-12">
                        <div v-if="categoriesShown"
                            class="bg-gray-50 shadow-md rounded-md w-96 absolute top-[100%] mt-6 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-2 p-4 z-50">
                            <input type="checkbox">
                        </div>
                    </transition>
                </div>
                <div class="relative">
                    <p class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer text-gray-700 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800 transition-all duration-300 ease-in-out"
                        @click="showLetters">
                        Search by first letter
                    </p>
                    <transition name="fade" enter-active-class="transition duration-300 ease-out transform"
                        enter-from-class="opacity-0 scale-95 -translate-y-12" enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition duration-300 ease-in transform"
                        leave-from-class="opacity-100 scale-100 " leave-to-class="opacity-0 scale-95 translate-y-12">
                        <div v-if="lettersShown"
                            class="bg-gray-50 shadow-md rounded-md w-96 absolute top-[100%] mt-6 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-2 p-4 z-50">
                            <router-link :to="`/meals/letter/${letter}`" v-for="letter in letters" :key="letter"
                                @click="lettersShown = false"
                                class="text-lg font-medium cursor-pointer w-12 h-12 flex justify-center items-center bg-gray-200 hover:bg-gray-700 hover:text-white rounded-full transition-colors duration-300 ease-in-out">
                                {{ letter }}
                            </router-link>
                        </div>
                    </transition>
                </div>

            </div>
            <div class="w-full md:w-auto">
                <SearchByName />
            </div>
        </div>

    </div>
</template>