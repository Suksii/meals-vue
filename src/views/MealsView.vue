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
    <div class="grid grid-cols-7 gap-2 p-4">
        <router-link :to="`/meals/letter/${letter}`" v-for="letter in letters" :key="letter"
            class="text-xl cursor-pointer w-8 flex justify-center items-center">
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="w-fit overflow-hidden group rounded-lg">
            <router-link :to="`/meal/${meal.idMeal}`" class="relative">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover group-hover:scale-110 transform duration-300" />
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <p
                    class="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full text-2xl group-hover:text-blue-200 duration-300 text-white font-semibold py-2">
                    {{ meal.strMeal }}</p>

            </router-link>
        </div>
    </div>
</template>