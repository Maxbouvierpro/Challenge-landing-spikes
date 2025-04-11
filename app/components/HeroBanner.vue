<script lang="ts" setup>
const props = withDefaults(defineProps<{
    titlePage?: string
    description?: string
}>(), {
    titlePage: 'Predictable growth starts here',
    description: 'Squaree is a platform that helps you grow your business by providing you with the tools you need to succeed.'
})
</script>

<template>
    <div class="flex flex-col gap-[24px] py-[100px]">
        <h1 class="text-[78px] font-bold text-center">{{ props.titlePage }}</h1>
        <p class="text-[14px] font-medium text-center">{{ props.description }}</p>
    </div>
</template>