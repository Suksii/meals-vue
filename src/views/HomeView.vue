<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
</script>

<template>
    <div class="flex justify-center gap-4">
        <div v-for="letter in letters" :key="letter" class="text-xl cursor-pointer">
            {{ letter }}
        </div>
    </div>
</template>