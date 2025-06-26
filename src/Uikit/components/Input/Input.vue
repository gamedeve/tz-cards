<template>
    <input :type="type" :placeholder="placeholder" />
</template>

<script setup lang="ts">
interface Props {
    placeholder?: string;
    type?: string;
}
const props = defineProps<Props>();

</script>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
}
</style>