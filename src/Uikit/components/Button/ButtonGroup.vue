<template>
    <div class="button-group">
        <slot />
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>