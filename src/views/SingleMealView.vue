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
    <div class="" v-for="meal in mealById">
        <div class="relative w-fit mx-auto my-12">
            <img :src="meal.strMealThumb" />
            <p
                class="absolute left-0 top-0 bg-gray-800 text-2xl px-6 py-1.5 -translate-x-1/3 -translate-y-1/3 text-gray-50 italic">
                {{ meal.strCategory }}</p>
        </div>
        <div class="px-12 py-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 pl-2 w-[400px]">
                Ingredients
            </h2>
            <ul class="list-disc pl-5 space-y-1">
                <li v-for="(ingredient, index) in getIngredients(meal)" :key="index"
                    class="text-lg text-gray-700">
                    {{ ingredient }}
                </li>
            </ul>
        </div>
    </div>
</template>