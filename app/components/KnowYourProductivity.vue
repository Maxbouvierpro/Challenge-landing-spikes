<script lang="ts" setup>
</script>

<template>
    <div class="grid grid-cols-2">
        <div>
            <h2 class="text-[48px] font-bold">Know your productivity by squaree</h2>
            <p class="text-[14px] font-medium">
                The expectation that productivity should always lead to tangible results or accomplishments.
            </p>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col w-full max-w-[366px] gap-[24px] bg-linear-[180deg,#FFF,#F1F1F1] border border-[#3E3E3E26] rounded-[20px] p-[30px]"> 
                <NuxtImg src="/Group-1171274807.svg" class="w-full max-w-[145px]"/>
                <div class="grid grid-cols-2">
                    <div>
                        Employees<br>
                        1200+
                    </div>
                    <div>
                        Growth<br>
                        Reviewed
                    </div>
                </div>
                <div>
                    Productivity by squaree
                    <br>
                    <span class="font-bold text-[34px]">70%</span>
                </div>
            </div>
            <div class="grid grid-cols-3 w-full max-w-[366px] z-2 self-end relative gap-[24px] bg-linear-[180deg,#FFF,#F1F1F1] border border-[#3E3E3E26] rounded-[20px] p-[30px] mt-[-24px]">
                <NuxtImg src="/Rectangle-6825.png" class="w-full max-w-[94px]"/>
                <div>
                    <span class="font-semibold">Moana John</span><br>moana_j@mail.com
                </div>
                <UButton class="bg-[#141414] text-[12px] uppercase font-bold tracking-wide rounded-full absolute top-[30px] right-[10px]">
                    Profile
                </UButton>
            </div>
        </div>
    </div>
</template>