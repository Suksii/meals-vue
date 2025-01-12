<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const id = route.params.id;
console.log(id);

const mealById = computed(() => store.state.mealById);

onMounted(async () => {
    store.dispatch('fetchMealById', id);
})
</script>
<template></template>
