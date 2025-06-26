<template>
    <div class="masonry-item">
        <slot />
    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.masonry-item {
    break-inside: avoid;
    margin-bottom: var(--gap);

    width: 100%;
    max-width: 500px;
}
</style>