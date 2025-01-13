<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const modules = [Autoplay]
const store = useStore();
const categories = computed(() => store.getters.allCategories);

onMounted(async () => {
    await store.dispatch('fetchCategories')
})

const onSwiper = (swiper) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log('slide change');
};

</script>

<template>
    <div class="flex justify-center gap-4 py-6">
    </div>
    <div class="flex justify-center gap-4 md:w-[80%] px-4 mx-auto">
        <swiper :modules="modules" :slides-per-view="6" :space-between="50" :loop="true"
            :autoplay="{ delay: 1, disableOnInteraction: false }" :speed="2000" @swiper="onSwiper"
            @slideChange="onSlideChange">
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
</template>