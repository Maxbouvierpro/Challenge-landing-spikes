<script setup lang="ts">
import { ref, computed } from 'vue'

// Represents the state of the switch: false = Monthly, true = Yearly
const isYearlyBilling = ref(true)

// Pricing data
const plans = {
  free: {
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Description of the tier list will go here, copy should be concise and impactful.',
    features: [
      'Access to All Features',
      '20% discount on backorders',
      'Domain Name Appraisal',
      '10 Social Profiles'
    ],
    buttonText: 'Try for Free'
  },
  pro: {
    name: 'Pro',
    priceMonthly: 12,
    priceYearly: Math.round(12 * 12 * 0.85), // 15% discount on annual price
    description: 'Description of the tier list will go here, copy should be concise and impactful.',
    features: [
      'Everything in the Free plan, plus',
      'Access to All Features',
      '20% discount on backorders',
      'Domain Name Appraisal',
      '10 Social Profiles',
      'Calendar View',
      '24/7 Support'
    ],
    buttonText: 'Subscribe Now'
  }
}

// Computed properties to get the current price based on the switch
const proPriceDisplay = computed(() => {
  if (isYearlyBilling.value) {
    // Display annual price broken down monthly for comparison if desired, or just the total
    // return plans.pro.priceYearly / 12 // Example: Show effective monthly cost
    return plans.pro.priceYearly // Show total annual cost
  } else {
    return plans.pro.priceMonthly
  }
})

const proBillingFrequency = computed(() => {
  return isYearlyBilling.value ? '/year' : '/month'
})

const freePriceDisplay = computed(() => {
    return plans.free.priceMonthly // Free is always 0
})

const freeBillingFrequency = computed(() => {
    return '' // No frequency needed for free
})


</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="flex justify-center items-center mb-8 space-x-3">
      <span :class="{'text-gray-900 font-medium': !isYearlyBilling, 'text-gray-500': isYearlyBilling}">Billed Monthly</span>
      <USwitch
      v-model="isYearlyBilling"
    />    <span :class="{'text-gray-900 font-medium': isYearlyBilling, 'text-gray-500': !isYearlyBilling}">
        Billed Yearly (Save 15%)
      </span>
    </div>

    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border border-gray-200 rounded-lg p-6 bg-linear-to-b from-[#FFFFFF] to-[#F1F1F1] shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900">{{ plans.free.name }}</h3>
        <p class="mt-2 text-4xl font-bold text-gray-900">
          ${{ freePriceDisplay }}<span class="text-base font-normal text-gray-500">{{ freeBillingFrequency }}</span>
        </p>
        <p class="mt-4 text-sm text-gray-600">{{ plans.free.description }}</p>
        <ul class="mt-6 space-y-3">
          <li v-for="feature in plans.free.features" :key="feature" class="flex items-center text-sm text-gray-700">
             <span class="mr-2">•</span>
            {{ feature }}
          </li>
        </ul>
        <button class="mt-8 w-full bg-[#F2B53C] hover:bg-black hover:text-white text-gray-900 font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
          {{ plans.free.buttonText }}
        </button>
      </div>

      <div class="border-2 border-[#F2B53C] rounded-lg p-6 bg-linear-to-b from-[#FFFFFF] to-[#F1F1F1] shadow-lg shadow-[#F2B53C]/50 relative">
         <h3 class="text-lg font-semibold text-gray-900">{{ plans.pro.name }}</h3>
         <p class="mt-2 text-4xl font-bold text-gray-900">
           ${{ proPriceDisplay }}<span class="text-base font-normal text-gray-500">{{ proBillingFrequency }}</span>
         </p>
        <p class="mt-4 text-sm text-gray-600">{{ plans.pro.description }}</p>
        <ul class="mt-6 space-y-3">
          <li v-for="feature in plans.pro.features" :key="feature" class="flex items-center text-sm text-gray-700">
             <span class="mr-2">•</span>
            {{ feature }}
          </li>
        </ul>
        <button class="mt-8 w-full bg-[#F2B53C] hover:bg-black hover:text-white text-gray-900 font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
          {{ plans.pro.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles if needed */
/* Using Tailwind CSS classes for styling */
</style>