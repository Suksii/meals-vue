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
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="w-fit">
            <router-link :to="`/meal/${meal.idMeal}`" class="flex flex-col">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover" />
                <p class="text-center text-xl font-semibold py2">{{ meal.strMeal }}</p>

            </router-link>
        </div>
    </div>
</template>