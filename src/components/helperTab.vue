<template>
    <div v-if="Props.useGit" class="items-center justify-center introTabSkills">
        <main class="relative flex flex-col items-center justify-center top-20 md:top-0">
            <section class="flex flex-col justify-between">
                <span class="h-32 w-52">
                    <ion-icon name="logo-github" class="opacity-75 w-52 h-52"></ion-icon>
                </span>
                <a href="https://www.github.com/mod5ied/"
                    class="z-20 p-2 font-semibold text-indigo-700 transition-all duration-200 border rounded-md hover:scale-x-105 hover:bg-slate-200 border-slate-200 bg-slate-100">Ogwuru
                    Patrick @Github</a>
            </section>
        </main>
    </div>
</template>

<script setup>

const Props = defineProps({
    useGit: {
        type: Boolean,
        default: false
    }
})
</script>