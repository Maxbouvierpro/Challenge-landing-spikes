<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Features',
    to: '/features',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
      },
      {
        label: 'Icons',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      }
    ]
  },
  {
    label: 'Resources',
    to: '/composables',
    children: [
      {
        label: 'defineShortcuts',
        description: 'Define shortcuts for your application.',
        to: '/composables/define-shortcuts'
      },
      {
        label: 'useOverlay',
        description: 'Display a modal/slideover within your application.',
        to: '/composables/use-overlay'
      },
      {
        label: 'useToast',
        description: 'Display a toast within your application.',
        to: '/composables/use-toast'
      }
    ]
  },
  {
    label: 'Contact Sales',
    to: '/contact'
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
      <UNavigationMenu arrow content-orientation="vertical" :items="items" class="w-full justify-center" :ui="{link: 'text-[#242424]'}"/>
    </div>
    <div>
        <NuxtImg 
        class="w-[24px] h-[24px]"
        src="/Iconly-outline.svg" />
    </div>
  </header>
</template>
