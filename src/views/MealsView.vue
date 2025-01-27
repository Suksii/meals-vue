<script setup>
import { useStore } from 'vuex'
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
const store = useStore();
const route = useRoute();

const category = computed(() => route.params.category)
const letter = computed(() => route.params.letter);
const name = computed(() => route.params.name);

const meals = computed(() => {
    if (category.value) {
        return store.state.mealsByCategory;
    } else if (letter.value) {
        return store.state.mealsByFirstLetter;
    } else if (name.value) {
        return store.state.mealsByName;
    }
    return []
})

const fetchMeals = async () => {
    if (category.value) {
        await store.dispatch('fetchMealsByCategory', category.value)
    } else if (letter.value) {
        await store.dispatch('fetchMealsByFirstLetter', letter.value)
    } else if (name.value) {
        await store.dispatch('fetchMealsByName', name.value);
    }
}
watch([category, letter, name], fetchMeals, { immediate: true })

</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] mx-auto">
        <div v-for="meal in meals" :key="meal.idMeal" class="w-fit overflow-hidden group rounded-lg pt-24">
            <router-link :to="`/meal/${meal.idMeal}`" class="relative">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover" />
                <div
                    class="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 group-hover:scale-50 duration-500">
                </div>
                <p
                    class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-50 shadow-sm shadow-gray-400 text-center w-4/5 text-xl group-hover:bg-gray-100 duration-500 font-semibold py-6">
                    {{ meal.strMeal }}</p>
            </router-link>
        </div>
    </div>
</template>