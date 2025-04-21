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
    <div class="flex flex-col gap-[24px] py-[100px] w-full max-w-[712px]">
        <h1 class="text-[78px] font-bold text-center">{{ props.titlePage }}</h1>
        <p class="text-[14px] font-medium text-center">{{ props.description }}</p>
    </div>
    <div class="flex flex-col md:flex-row flex-wrap items-center justify-between w-full">
        <ImagesHero />
    </div>
    <div class="text-center mt-[40px]">
        <h2 class="text-[20px] font-medium opacity-[0.5]">We have the fast paced growing companies with us</h2>
        <UPageMarquee class="w-full max-w-[800px] mt-[32px]">
            <NuxtImg src="/Group-1171274805.svg" class="shrink-0 h-[46px]"/>
            <NuxtImg src="/Group-1171274806.svg" class="shrink-0 h-[46px]"/>
            <NuxtImg src="/Group-1171274807.svg" class="shrink-0 h-[46px]"/>
        </UPageMarquee>
    </div>
</template>