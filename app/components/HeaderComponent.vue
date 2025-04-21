<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Features',
    children: [
      {
        label: 'Introduction',
        description: 'Squaree helps you grow your business with powerful tools and insights.',
      },
      {
        label: 'Growth Analytics',
        description: 'Track and optimize your business growth with real-time analytics.',
      },
      {
        label: 'Productivity Tools',
        description: 'Streamline your workflow and boost team efficiency.',
      }
    ]
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Integration',
        description: 'Seamlessly connect with leading apps like Slack, Figma, and Notion.',
      },
      {
        label: 'Support',
        description: 'Get help and guidance to maximize your Squaree experience.',
      },
      {
        label: 'Documentation',
        description: 'Detailed guides and API documentation for developers.',
      }
    ]
  },
  {
    label: 'Contact Sales',
  }
])
</script>

<template>
  <header class="flex items-center justify-between w-full">
    <div class="flex items-center gap-[14px]">
      <NuxtImg 
      src="/Frame.svg" 
      class="w-[24px] h-[24px]"/>
      <p class="text-[16px] font-bold">Squaree</p>
    </div>
    <div>
      <UNavigationMenu arrow content-orientation="vertical" :items="items" class="w-full justify-center" :ui="{link: 'text-[#242424] w-full', list:'md:flex-row flex-col'}"/>
    </div>
    <div>
      <UContentSearchButton />
    </div>
  </header>
</template>
