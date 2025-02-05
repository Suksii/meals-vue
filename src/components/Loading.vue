<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

const loading = computed(() => store.getters.isLoading);
</script>

<template>
    <div v-if="loading" class="flex justify-center items-center min-h-[calc(100vh-110px)]">
        <div class="w-12 h-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
    </div>
</template>
