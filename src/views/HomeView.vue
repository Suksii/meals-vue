<script setup>
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const modules = [Autoplay]
const store = useStore();
const categories = computed(() => store.getters.allCategories);
const randomMeal = computed(() => store.getters.randomMeal);

onMounted(async () => {
    await store.dispatch('fetchCategories')
})

onMounted(async () => {
    await store.dispatch('fetchRandomMeal')
})

const onSwiper = (swiper) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log('slide change');
};



</script>

<template>
    <div class="relative flex items-center justify-center bg-black text-white overflow-hidden min-h-[calc(100vh-110px)]"
        v-for="meal in randomMeal">
        <div class="absolute inset-0 z-0 brightness-75">
            <img v-if="meal" :src="meal.strMealThumb" :alt="meal.strMeal"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent">
            </div>
        </div>
        <div class="relative z-10 text-center px-8 max-w-7xl">
            <h1
                class="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300">
                This can be your next favorite meal</h1>
            <p
                class="my-6 text-lg md:text-xl text-gray-300 font-light italic tracking-wide opacity-80 max-w-2xl mx-auto">
                Explore the world of flavors and elevate your cooking with delicious
                recipes from around the
                globe.</p>
            <h2 v-if="meal" class="text-3xl md:text-4xl font-semibold text-white mt-6 tracking-widest opacity-90">
                {{ meal.strMeal }}</h2>
            <div class="py-6">
                <router-link :to="`/meal/${meal?.idMeal}`"
                    class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-bl from-gray-400 to-gray-800 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:rotate-3 active:scale-95">
                    Get Recipe
                </router-link>
            </div>
        </div>
    </div>
    <div
        class="flex flex-col justify-center items-center w-full mx-auto bg-gradient-to-bl from-gray-100 via-gray-300 to-gray-100 py-12">
        <div class="text-center">
            <h2 class="text-4xl font-semibold text-gray-800">Browse Meal Categories</h2>
            <p class="text-lg text-gray-600 mt-2">Explore meals by category and find your next favorite dish!</p>
        </div>
        <div class="flex justify-center w-full mx-auto pt-12">
            <swiper :modules="modules" :space-between="50" :loop="true"
                :autoplay="{ delay: 1, disableOnInteraction: false }"
                :breakpoints="{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }"
                :speed="2000" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="category in categories" :key="category.idCategory">
                    <router-link :to="`/meals/${category.strCategory}`"
                        class="flex flex-col items-center justify-center gap-4 hover:bg-gray-600 py-8 transition-bg duration-300 group hover:scale-105">
                        <img :src="category.strCategoryThumb" :alt="category.strCategory"
                            class="rounded-full group-hover:border-gray-50 border-gray-700 border-4 w-32 h-32 min-h-32 min-w-32 object-cover shrink-0" />
                        <h3 class="text-2xl group-hover:text-gray-50">{{ category.strCategory }}
                        </h3>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
