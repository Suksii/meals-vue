<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
</script>

<template>
    <div class="flex justify-center gap-4 py-6">
        <router-link :to="`/letter/${letter}`" v-for="letter in letters" :key="letter" class="text-xl cursor-pointer">
            {{ letter }}
        </router-link>
    </div>
</template>