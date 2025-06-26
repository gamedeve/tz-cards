<template>

    <div class="tab-list">

        <slot />
    </div>
</template>

<style lang="scss" scoped>
.tab-list {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: var(--gap);
}
</style>