<template>
    <div class="tabs">
        <slot name="default">
            <div class="tabs-default">
                <p>Нет контента</p>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, readonly, onMounted } from "vue";
const emit = defineEmits(['onTabChange'])
const tabIndex = ref<number>(0);
function onTabChange(value: number): void {
    tabIndex.value = value;
    console.log("Вкладка сменилась", tabIndex.value)
    emit('onTabChange', tabIndex.value); // Emit the event to parent component
}

provide('tabs', {
    /* данные для предоставления */
    tabIndex: readonly(tabIndex),
    onTabChange
})
const props = defineProps<{
    defaultIndex?: number;
}>();

onMounted(() => {
    if (props.defaultIndex) {
        tabIndex.value = props.defaultIndex;
    }
    console.log("Mounted Tabs with defaultIndex:", props.defaultIndex);
});

</script>

<style lang="scss" scoped></style>