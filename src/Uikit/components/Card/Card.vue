<template>


    <div class="card">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <slot />
    </div>

</template>

<script setup lang="ts">
interface Props {
    title?: string;
    description?: string;
}
const props = defineProps<Props>();

</script>

<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 100%;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    break-inside: avoid-column;

    h2 {
        font-size: 1.25rem;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 10px;
        line-height: 1.5;
        color: #444;
    }

}
</style>