<template>
    <textarea :placeholder="placeholder" :rows="5"></textarea>
</template>

<script setup lang="ts">
interface Props {
    placeholder?: string;
    rows?: string;
}
const props = defineProps<Props>();

</script>

<style scoped>
textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
}
</style>