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
    <div v-for="meal in mealById">
        {{ meal.idMeal }}
    </div>
</template>