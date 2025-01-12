<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';
const store = useStore();

const mealsByCategory = computed(() => store.getters.allMealsByCategory);

onMounted(async () => {
    await store.dispatch('fetchMealsByCategory')
})

</script>
<template>
    <div>

    </div>
</template>