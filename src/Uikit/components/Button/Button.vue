<template>
    <button class="btn">
        <slot>Send</slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.btn {
    flex: 1;
    padding: 10px 12px;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn:hover {
    background-color: #0056b3;
}
</style>