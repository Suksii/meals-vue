<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const store = useStore();
const route = useRoute();

const category = computed(() => route.params.category)

const mealsByCategory = computed(() => store.state.mealsByCategory);



onMounted(async () => {
    await store.dispatch('fetchMealsByCategory', category.value)
})

</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="meal in mealsByCategory" :key="meal.idMeal" class="w-fit">
            <router-link :to="`/meal/${meal.idMeal}`" class="flex flex-col">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover" />
                <p class="text-center text-xl font-semibold py2">{{ meal.strMeal }}</p>

            </router-link>
        </div>
    </div>
</template>