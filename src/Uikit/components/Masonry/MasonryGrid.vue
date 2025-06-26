<template>
    <div class="masonry-grid">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.masonry-grid {
    width: 100%;

    column-count: 1;
    column-gap: var(--gap);
    max-width: var(--card-width);
    column-width: var(--card-width);

    margin: 0 auto; // чтобы центрировать

    /* фиксированная ширина колонки */
    @media screen and (min-width: 1020px) {
        column-count: 2;
        max-width: 1020px;
    }

    @media screen and (min-width: 1560px) {
        column-count: 3;
        max-width: 1560px;
    }

    @media screen and (min-width: 2080px) {
        column-count: 4;
        max-width: 2080px;
    }
}
</style>