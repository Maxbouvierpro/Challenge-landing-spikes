<script setup lang="ts">
const testimonials = [
  {
    user: {
      name: 'John Master',
      description: 'Director,  Blue',
      avatar: {
        src: '/Ellipse-64.png',
        loading: 'lazy'
      },
      line:1,
    },
    title: 'Brilliant houses to rent',
    quote:
      'All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.'
  },
{
    user: {
      name: 'John Master',
      description: 'Ceo,  Jinx',
      avatar: {
        src: '/Ellipse-54.png',
        loading: 'lazy'
      },
      line:1,
    },
    title:"Convenient for searching apartments",
    quote:
      "Cycle makes it easy to contact the most relevant users whenever I need feedback on a new product initiative. It helps me capture all the necessary customer context without friction."
  },
  {
    user: {
      name: 'John Master',
      description: 'Director,  Fynx',
      avatar: {
        src: '/Ellipse-63.png',
        loading: 'lazy'
      },
      line:2,
    },
    title:"It feels much safer",
    quote:
      "As a company with a strong Slack culture, it’s important that we find ways to meet our champions where they are, and Channeled allows us to do just that."
  },
  {
    user: {
      name: 'Secure search for all',
      description: 'Ceo,  Whyle',
      avatar: {
        src: '/Ellipse-66.png',
        loading: 'lazy'
      },
      line:2,
    },
    title:"Secure search for all",
    quote:
      "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
  },
]
</script>

<template>
    <div class="flex flex-col gap-[16px] w-full max-w-[600px] text-center">
        <h2 class="text-[48px] font-bold">What squaree users say</h2>
        <p>Here is how homely can help you</p>
    </div>
  <div class="flex flex-col gap-4 w-full">
    <UPageMarquee
      pause-on-hover
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial) in testimonials.filter(line => line.user.line === 1)"
        :key="testimonial.user.name"
        variant="subtle"
        :description="testimonial.quote"
        :title="testimonial.title"
        :ui="{
          title: 'text-[24px] font-bold',
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3 my-[16px]'
        }"
        class="w-128 shrink-0 bg-[#F6F6F6] p-[32px] border border-[#3E3E3E15]"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
    <UPageMarquee
      pause-on-hover
      reverse
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial) in testimonials.filter(line => line.user.line === 2)"
        :key="testimonial.user.name"
        variant="subtle"
        :description="testimonial.quote"
        :title="testimonial.title"
        :ui="{
          title: 'text-[24px] font-bold',
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3 my-[16px]'
        }"
        class="w-128 shrink-0 bg-[#F6F6F6] p-[32px] border border-[#3E3E3E15]"
        >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
  </div>
</template>
