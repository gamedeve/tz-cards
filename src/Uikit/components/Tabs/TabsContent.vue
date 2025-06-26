<template>
    <div v-show="value == tabIndex" class="tab-content">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { inject, readonly, ref } from 'vue'
import { type TabProps, type TabsContext } from "./Tabs.types"

const { tabIndex } = inject<TabsContext>('tabs', { tabIndex: readonly(ref(0)), onTabChange: () => { } });
const { value } = defineProps<TabProps>()
</script>

<style lang="scss" scoped>
.tab-content {
    font-size: 1.125rem;
    padding: var(--gap);
}
</style>