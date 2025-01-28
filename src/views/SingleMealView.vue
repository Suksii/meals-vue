<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const id = route.params.id;

const mealById = computed(() => store.state.mealById);

onMounted(async () => {
    store.dispatch('fetchMealById', id);
})

const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i < 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure || ''} ${ingredient}`.trim());
        }
    }
    return ingredients;
}
</script>
<template>
    <div class="flex flex-col my-12 w-full md:w-[80%] mx-auto" v-for="meal in mealById">
        <h1 class="text-3xl font-semibold pb-2 text-center border-b-4 mb-8 border-gray-300">{{ meal.strMeal }}</h1>
        <div class="flex flex-col md:flex-row justify-center items-start">
            <div class="relative mx-6">
                <img :src="meal.strMealThumb" class="w-full h-auto object-cover" />
                <p
                    class="absolute left-0 top-0 bg-gray-800 text-2xl px-6 py-1.5 -translate-x-1/3 -translate-y-1/3 text-gray-50 italic">
                    {{ meal.strCategory }}</p>
            </div>
            <div class="mx-6 my-4 md:my-0 md:mx-0">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 pl-2 w-[400px]">
                    Ingredients
                </h2>
                <ul class="list-disc pl-5 space-y-1">
                    <li v-for="(ingredient, index) in getIngredients(meal)" :key="index"
                        class="lg:text-lg text-gray-700">
                        {{ ingredient }}
                    </li>
                </ul>
                <a :href="meal.strYoutube" target="_blank"
                    class="inline-flex items-center w-fit px-8 py-4 mt-4 text-lg font-semibold text-white bg-gradient-to-bl from-gray-400 to-gray-800 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:rotate-3 active:scale-95">
                    Watch on YouTube
                </a>
            </div>
        </div>
        <div class="pt-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 pl-2 w-[400px]">
                Instructions</h2>
            <p class="pl-5 text-lg tracking-wide">{{ meal.strInstructions }}</p>
        </div>
    </div>
</template>