<template>
    <div class="masonry">
        <div class="title">{{ title }}</div>
        <masonry-grid>
            <masonry-item>
                <Card title="Карточка 1" description="Описание карточки 1">

                    <Input type="text" placeholder="Ваше имя" />
                    <button-group>
                        <Button>Кнопка 1</Button>
                        <Button>Кнопка 2</Button>
                    </button-group>
                </Card>
            </masonry-item>
            <masonry-item>
                <Card title="Карточка 2" description="Описание карточки 2">
                    <p>Просто текст, Просто текст, Просто текст, Просто текст, Просто текст</p>
                    <Input type="text" placeholder="Ваше имя" />
                    <Input type="email" placeholder="Ваш E-mail" />
                    <TextArea rows="5" placeholder="Комментарий" />
                    <button-group>
                        <Button>Кнопка 1</Button>
                        <Button>Кнопка 2</Button>
                    </button-group>
                </Card>
            </masonry-item>
            <masonry-item>
                <Card title="Карточка 3" description="Описание карточки 3">
                    <Input type="text" placeholder="Ваше имя" />
                    <TextArea rows="5" placeholder="Комментарий" />
                    <button-group>
                        <Button>Кнопка 2</Button>
                    </button-group>
                </Card>
            </masonry-item>
            <masonry-item>
                <Card title="Карточка 4" description="Описание карточки 4">
                    <TextArea rows="5" placeholder="Комментарий" />
                    <button-group>
                        <Button>Кнопка 1</Button>
                        <Button>Кнопка 2</Button>
                    </button-group>
                </Card>
            </masonry-item>
            <masonry-item>
                <Card title="Карточка 5" description="Описание карточки 5">
                    <p>Просто текст, Просто текст, Просто текст, Просто текст, Просто текст</p>
                </Card>
            </masonry-item>
            <masonry-item>
                <Card title="Карточка 6" description="">
                    <Input type="text" placeholder="Ваше имя" />
                    <Input type="email" placeholder="Ваш E-mail" />
                    <TextArea rows="5" placeholder="Комментарий" />
                    <button-group>
                        <Button>Кнопка 1</Button>
                        <Button>Кнопка 2</Button>
                    </button-group>
                </Card>
            </masonry-item>
        </masonry-grid>
    </div>
</template>

<script setup lang="ts">
import MasonryGrid from './MasonryGrid.vue';
import MasonryItem from './MasonryItem.vue';
import { Card } from '@/Uikit/components/Card';
import { Input } from '@/Uikit/components/Input';
import { TextArea } from '@/Uikit/components/TextArea';
import { ButtonGroup, Button } from '@/Uikit/components/Button';

interface Props {
    title?: string
}

const props = withDefaults(defineProps<Props>(), {

    title: 'Masonry Layout Example'
})

</script>

<style scoped lang="scss">
.masonry {
    width: 100%;

    .title {
        padding: var(--gap);
        font-size: 2rem;
    }
}
</style>