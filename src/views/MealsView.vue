<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const store = useStore();
const route = useRoute();

// const category = computed(() => route.params.category)
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const letter = computed(() => route.params.letter);

// const mealsByCategory = computed(() => store.state.mealsByCategory);
const mealsByFirstLetter = computed(() => store.state.mealsByFirstLetter);


// onMounted(async () => {
//     await store.dispatch('fetchMealsByCategory', category.value)
// })

const fetchMeals = async () => {
    await store.dispatch('fetchMealsByFirstLetter', letter.value)
}
watch(letter, fetchMeals)

</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="w-fit overflow-hidden group rounded-lg pt-12">
            <router-link :to="`/meal/${meal.idMeal}`" class="relative">
                <img :src="meal.strMealThumb" :alt="meal.strMeal"
                    class="object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 group-hover:scale-50 duration-500"></div>
                <p
                    class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-50 shadow-lg shadow-gray-700 text-center w-4/5 text-xl group-hover:bg-gray-300 duration-500 font-semibold py-6">
                    {{ meal.strMeal }}</p>
            </router-link>
        </div>
    </div>
</template>