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
    <div class="flex justify-center gap-4 md:w-[80%] px-4 py-8 mx-auto">
        <swiper :modules="modules" :space-between="50" :loop="true"
            :autoplay="{ delay: 1, disableOnInteraction: false }"
            :breakpoints="{ 0: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }"
            :speed="2000" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="category in categories" :key="category.idCategory">
                <router-link :to="`/meals/${category.strCategory}`"
                    class="flex flex-col items-center justify-center gap-4">
                    <img :src="category.strCategoryThumb" :alt="category.strCategory"
                        class="rounded-full h-24 w-24 object-cover shrink-0" />
                    <h3 class="text-xl font-semibold uppercase">{{ category.strCategory }}</h3>
                </router-link>
            </swiper-slide>
        </swiper>
    </div>

    <div class="relative flex items-center justify-center bg-black text-white overflow-hidden min-h-screen"
        v-for="meal in randomMeal">
        <div class="absolute inset-0 z-0">
            <img v-if="meal" :src="meal.strMealThumb" :alt="meal.strMeal"
                class="w-full h-full object-cover filter brightness-75 transition-all duration-700 ease-in-out transform hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent"></div>
        </div>
        <div class="relative z-10 text-center px-8 max-w-7xl">
            <h1 class="">This can be your next favorite meal </h1>
            <h2 v-if="randomMeal" class="">
                {{ meal.strMeal }}
            </h2>
            <p class="">
                Explore the world of flavors and elevate your cooking with delicious recipes from around the globe.
            </p>
            <div class="">
                <router-link :to="`/meal/${meal?.idMeal}`" class="">Get Recipe</router-link>
            </div>
        </div>
    </div>
</template>
