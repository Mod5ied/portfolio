<template>
    <div v-if="Props.useWorks" class="items-center justify-center overflow-y-auto introTabCard">
        <main class="flex flex-col w-9/12 gap-8">
            <section class="flex flex-col">
                <h2 class="italic font-semibold text-left md:text-xl">Frontend UI projects</h2>
                <!-- links below. -->
                <div class="flex flex-col gap-1 px-4">
                    <a href="https://github.com/Mod5ied/myigbo" class="worksTabLinks">
                        <p class="worksTabParas">Igbo-Library and local translation Project.</p>
                        <svg class="w-4 h-4 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/Mod5ied/E-Tailors" class="worksTabLinks">
                        <p class="worksTabParas"> E-Tailors eCommerce Project.</p>
                        <svg class="w-4 h-3 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/Mod5ied/portfolio" class="worksTabLinks">
                        <p class="worksTabParas"> My Portfolio - (OpenSourced)</p>
                        <svg class="w-3 h-3 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
            </section>
            <!-- Second Section Below. -->
            <section class="flex flex-col">
                <h2 class="flex items-center gap-2 italic font-semibold text-left md:text-xl">Backend and APIs development projects
                    <i><svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </i>
                </h2>
                <!-- links below. -->
                <div class="flex flex-col gap-1 px-4">
                    <a href="https://github.com/Mod5ied/IgboResearch-Public-API" class="worksTabLinks">
                        <p class="worksTabParas">Igbo-Library API - (OpenSourced)</p>
                        <svg class="w-3 h-3 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/Mod5ied/E-Tailors-API" class="worksTabLinks">
                        <p class="worksTabParas">TypeORM API with PostgreSQL, Redis and JWT Authentication. </p>
                        <svg class="w-6 h-6 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                    <a href="#" class="worksTabLinks">
                        <p class="worksTabParas">OpenSourced API with MongoDB, Redis and JWT Authentication.</p>
                        <svg class="w-6 h-6 text-indigo-600 md:w-5 md:h-5 hover:text-indigo-400 dark:text-slate-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>

const Props = defineProps({
    useWorks: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
</style>