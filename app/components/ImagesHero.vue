<script lang="ts" setup>

</script>

<template>
    <div class="flex flex-col md:flex-row flex-wrap items-center justify-between w-full">
        <div class="bg-[url(Rectangle-6821.png)] bg-cover bg-no-repeat w-[290px] h-[290px] relative">
            <UButton class="bg-[#141414] text-[12px] uppercase font-bold tracking-wide rounded-full absolute top-[30px] left-[30px]">
                Profile
            </UButton>
        </div>
        <div class="bg-[url(Rectangle-6821-1.png)] bg-cover bg-no-repeat w-[366px] h-[384px] relative flex flex-col gap-[16px] px-[30px] py-[42px]">
            <div class="flex gap-[24px]">
                <NuxtImg src="/Rectangle-6824.png" class="object-cover h-[94px]"/>
                <div class="flex flex-col">
                    <p class="text-[24px] font-bold">Moana <br>John</p>
                    <p class="text-[14px] font-medium">5mins ago</p>
                </div>
            </div>
            <NuxtImg src="/caption.svg" class="object-cover absolute right-[30px] top-[30px] h-[24px]"/>
            <div class="p-[10px] bg-[#242424] rounded-[16px] flex items-center gap-[24px]">
                <NuxtImg src="/Group-1171274844.svg" class="object-cover h-[72px]"/>
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[24px] font-bold text-white">Review sync</p>
                    <p class="text-[14px] font-medium text-white opacity-[0.5]">12:00 - 01:30 PM</p>
                </div>
            </div>
            <div class="p-[10px] bg-[#242424] rounded-[16px] flex items-center gap-[24px]">
                <NuxtImg src="/Group-1171274844-1.svg" class="object-cover h-[72px]"/>
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[24px] font-bold text-white">Marketing</p>
                    <p class="text-[14px] font-medium text-white opacity-[0.5]">02:00 - 02:30 PM</p>
                </div>
            </div>
            
        </div>
        <div class="relative flex flex-col gap-[72px]">
            <div class="flex gap-[24px] bg-[#242424] p-[30px] rounded-[16px]">
                <NuxtImg src="/icon.svg" class="object-cover h-[72px]"/>
                <div class="flex flex-col gap-[12px]">
                    <p class="text-[24px] font-bold text-white">Clear roadmap</p>
                    <p class="text-[14px] font-medium text-white opacity-[0.5]">notion.com</p>
                </div>
            </div>
            <div class="flex flex-col gap-[24px] bg-[#CFDDDB] p-[30px] relative rounded-[16px]">
                <p class="text-[40px] font-bold text-black">72K</p>
                <UButton class="bg-[#141414] text-[12px] uppercase absolute top-[30px] right-[30px] font-bold tracking-wide rounded-full">
                    Profile
                </UButton>
                <NuxtImg src="/Vector.svg" class="h-[72px]"/>
                <div class="flex flex-col gap-[4px]">
                    <p class="text-[18px] font-regular text-black">Product title</p>
                    <p class="text-[14px] font-medium text-black">Short description goes here</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-end gap-[24px] bg-[url(Group-1171274871.svg)] rounded-[16px] bg-size-[100%] md:bg-size-[75%] bg-right bg-no-repeat bg-[#DDD6CF] py-[30px] px-0 relative rounded-l-lg w-full md:w-full md:max-w-[400px] h-[434px]">
                        
            <UButton class="bg-[#B1ABA6] text-[12px] uppercase absolute top-[30px] left-[30px] font-bold tracking-wide rounded-full">
                Value
            </UButton>
            
            <UButton class="bg-[#141414] text-[12px] uppercase absolute top-[30px] right-[10px] md:top-[30px] md:right-[30px] font-bold tracking-wide rounded-full">
                DAILY
            </UButton>
            <div class="flex flex-col items-center gap-[14px]">
                <p class="self-center font-bold text-[38px]">
                    $5476
                </p>
                <p>
                Spending This Week
            </p>
            </div>
            <div class="flex flex-col items-center gap-[24px]">
                <div class="flex flex-col gap-[4px] px-[30px]">
                    <p class="text-[18px] font-regular text-black">Work force</p>
                    <p class="text-[14px] font-medium text-black opacity-[0.5]">Short description goes here</p>
                </div>
            </div>
        </div>
    </div>
</template>