import type { Ref } from 'vue';

export interface TabsContext {
    tabIndex: Readonly<Ref<number>>;
    onTabChange: (value: number) => void;
}

export interface TabProps {
    value: number;
}
