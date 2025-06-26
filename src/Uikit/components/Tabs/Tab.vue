<template>
    <button role="button" class="tab-item" :class="{ 'active': value === tabIndex }" @click="onTabChange(value)">
        <slot>{{ value }}</slot>
    </button>

</template>

<script setup lang="ts">
import { inject, readonly, ref } from 'vue'
import { type TabProps, type TabsContext } from "./Tabs.types"

const { tabIndex, onTabChange } = inject<TabsContext>('tabs', { tabIndex: readonly(ref(0)), onTabChange: () => { } });
const { value } = defineProps<TabProps>()
</script>

<style lang="scss" scoped>
.tab-item {
    height: var(--tab-height);
    border: none;
    border-bottom: 5px solid transparent;
    border-radius: 0;
    min-width: 90px;
    padding: 8px 16px;
    background: #fff;
    transition: all 0.5s ease;
    font-size: 1.25rem;

    &.active {
        border-bottom: 5px solid var(--color-active);
        color: var(--color-active);
    }
}
</style>