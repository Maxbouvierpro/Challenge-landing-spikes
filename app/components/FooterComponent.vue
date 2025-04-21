<script setup lang="ts">

const columns = [
  {
    label: 'About',
    children: [
      {
        label: 'Contact',
        to: '#',
        target: '_blank',
      },
      {
        label: 'Blog Courses',
        to: '#',
        target: '_blank',
      },
      {
        label: 'Nuxt on GitHub',
        to: '#',
        target: '_blank',
      }
    ]
  },
  {
    label: 'Company',
    children: [
      {
        label: 'Product',
        to: '#',
        target: '_blank'
      },
      {
        label: 'Press',
        to: '#',
        target: '_blank'
      },
      {
        label: 'More',
        to: '#',
        target: '_blank'
      }
    ]
  }
]
</script>

<template>
  <UFooterColumns :columns="columns" :ui="{root: 'w-full max-w-[1280px] flex flex-col xl:grid xl:grid-cols-4 xl:gap-8 p-[64px]', linkLabelExternalIcon: 'size-0'}">
    <template #left>
      <NuxtImg src="/Frame.svg" class="w-10" /><p>
        Squaree
      </p>
    </template>
    <template #right>
      <UFormField name="email" label="Subscribe to our newsletter" size="lg">
        <UInput type="email" class="w-full">
          <template #trailing>
            <UButton type="submit" size="xs" color="neutral" label="Subscribe" />
          </template>
        </UInput>
      </UFormField>
    </template>
  </UFooterColumns>
</template>
