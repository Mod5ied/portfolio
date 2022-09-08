<template>
    <div class="introTabCard" v-if="Props.useIntro">
        <!-- hovering redirect icon. -->
        <a href="https://www.github.com/mod5ied/" class="absolute z-20 pr-0 md:pr-5 top-6 right-10 md:right-1/4">
            <svg class="w-6 h-6 text-indigo-600 hover:text-indigo-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
        </a>
        <!-- my image. -->
        <span class="h-64 overflow-hidden rounded-t-lg md:h-40 md:w-40">
            <img src="../assets/Screenshot_20220311-192805~2.png" class="relative w-full rounded-t-lg h-80 md:h-48 bottom-5 opacity-80"
                alt="me-myself" />
        </span>
        <!-- my short bio below. -->
        <div class="introTabCardRight">
            <div class="flex justify-between">
                <p class="text-xl font-bold text-left">Ogwuru Patrick</p>
                <div class="flex items-center gap-1">
                    <ion-icon name="earth-outline" class="hidden text-blue-500 md:block"></ion-icon>
                    <ion-icon name="location-sharp" class="text-blue-500 md:hidden"></ion-icon>
                    <p class="text-sm font-semibold">Lagos, Nigeria</p>
                </div>
            </div>
            <span class="flex items-center gap-1">
                <svg class="w-5 h-4 text-indigo-800 dark:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                </svg>
                <p class="font-bold text-left ">Frontend software engineer</p>
            </span>
            <div class="flex flex-col justify-between gap-2 md:flex-row">
                <span class="flex items-center gap-2">
                    <ion-icon name="logo-javascript" class="text-yellow-500"></ion-icon>
                    <p class="text-sm font-semibold ">JavaScript genie</p>
                </span>
                <span class="flex items-center gap-1">
                    <svg class="w-5 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                    <p class="text-sm font-semibold">Blockchain & Solidity enthusiast</p>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const Props = defineProps({
    useIntro: Boolean
})

</script>