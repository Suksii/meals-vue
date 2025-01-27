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
        <div v-for="(ingredient, index) in getIngredients(meal)" :key="index">
            {{ ingredient }}
        </div>
    </div>
</template>