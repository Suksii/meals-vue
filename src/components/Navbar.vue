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

console.log(lettersShown.value);

</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-evenly gap-6 px-6 py-4 bg-gray-50 shadow-md rounded-lg">
        <div class="flex items-center gap-8 group">
            <div class="relative">
                <p class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
                    @click="showCategories">
                    Search by category
                </p>
                <div v-if="categoriesShown">3333</div>
            </div>
            <div class="relative">
                <p class="text-lg font-semibold px-4 py-2 md:py-6 cursor-pointer hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
                    @click="showLetters">
                    Search by first letter
                </p>
                <transition name="fade" enter-active-class="transition duration-300 ease-out transform"
                    enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition duration-300 ease-in transform"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <div v-if="lettersShown"
                        class="bg-gray-50 shadow-md rounded-md w-96 absolute top-[100%] mt-6 left-1/2 -translate-x-1/2 grid grid-cols-6 gap-2 p-4 z-50">
                        <router-link :to="`/meals/letter/${letter}`" v-for="letter in letters" :key="letter"
                            @click="lettersShown = false"
                            class="text-lg font-medium text-gray-700 cursor-pointer w-12 h-12 flex justify-center items-center bg-blue-100 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-300 ease-in-out">
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
</template>