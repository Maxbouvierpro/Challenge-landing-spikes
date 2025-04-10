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
    <h1>{{ props.titlePage }}</h1>
    <p>{{ props.description }}</p>
</template>