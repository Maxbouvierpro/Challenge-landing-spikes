<script setup lang="ts">
const iconsApps: { label: string; src: string; line: number }[] = [
    {
        label: 'Zapier',
        src: '/zapier.svg',
        line: 1
    },
    {
        label: 'Slack',
        src: '/slack.svg',
        line: 1
    },
    {
        label: 'Figma',
        src: '/figma.svg',
        line: 1
    },
    {
        label: 'Evernote',
        src: '/evernote.svg',
        line: 2
    },
    {
        label:'Notion',
        src: '/notion.svg',
        line: 2
    },
]
</script>
<template>
    <div class="flex flex-col md:grid md:grid-cols-2 gap-[16px] items-center"> 
        
        <div>
            <UPageMarquee class="w-full max-w-[1000px] mt-[32px]" :ui="{ root: '[--gap:--spacing(16)]', content: 'w-auto py-1' }">
                    <NuxtImg 
                        v-for="icon in iconsApps.filter(icon => icon.line === 1)" 
                        :key="icon.label" 
                        :src="icon.src" 
                    class="shrink-0 rounded-[8px] w-[96px] h-[96px] p-[24px] border border-[#3E3E3E26]"
                    />
            </UPageMarquee>
            <UPageMarquee class="w-full max-w-[800px] mt-[32px]" reverse :ui="{ root: '[--gap:--spacing(16)]', content: 'w-auto py-1' }">
                <NuxtImg 
                    v-for="icon in iconsApps.filter(icon => icon.line === 2)" 
                    :key="icon.label" 
                    :src="icon.src" 
                    class="shrink-0 rounded-[8px] w-[96px] h-[96px] p-[24px] border border-[#3E3E3E26]"
                    />
            </UPageMarquee>
        </div>

        <div class="flex flex-col gap-[16px] w-full max-w-[480px] md:text-left text-center">
            <h2 class="text-[48px] font-bold md:text-left text-center">Seamless integration with best apps</h2>
            <p class="text-[14px]">What ever you use, we integrate with the best of best</p>
        </div>

    </div>
</template>
