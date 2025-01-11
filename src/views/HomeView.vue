<script setup>
import { onMounted, ref } from 'vue';
import { request } from '../api';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const categories = ref([]);

onMounted(async () => {
    try {

        const response = await request.get('/categories.php')
        console.log(response.data);
        categories.value = response.data.categories
    } catch (err) {
        console.error(err);
    }
})

</script>

<template>
    <div class="flex justify-center gap-4 py-6">
        <router-link :to="`/letter/${letter}`" v-for="letter in letters" :key="letter" class="text-xl cursor-pointer">
            {{ letter }}
        </router-link>
    </div>
    <div class="flex justify-center gap-4">
        <div v-for="category in categories" :key="category.idCategory"
            class="flex flex-col items-center justify-center gap-4">
            <img :src="category.strCategoryThumb" :alt="category.strCategory"
                class="rounded-full h-24 w-24 object-cover shrink-0" />
            <h3 class="text-xl font-semibold uppercase">{{ category.strCategory }}</h3>
        </div>
    </div>
</template>