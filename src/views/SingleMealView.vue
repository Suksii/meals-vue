<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const id = route.params.id;

const mealById = computed(() => store.state.mealById);

console.log(mealById.value);


onMounted(async () => {
    store.dispatch('fetchMealById', id);
})

</script>
<template>
<div class="" v-for="meal in mealById">
    <div class="relative w-fit mx-auto my-12">
        <img :src="meal.strMealThumb"/>
        <p class="absolute left-0 top-0 bg-gray-800 text-3xl px-6 py-4 -translate-x-1/3 -translate-y-1/3 text-gray-50 italic">{{ meal.strCategory }}</p>
    </div>
</div>
</template>