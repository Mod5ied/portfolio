<template>
    <div v-if="Props.useGit" class="introTabCard items-center justify-center">
        <main class="flex flex-col relative top-20 md:top-0 items-center justify-center">
            <section class="flex flex-col justify-between">
                <span class="w-52 h-32">
                    <ion-icon name="logo-github" class="w-52 h-52 opacity-75"></ion-icon>
                </span>
                <a href="https://www.github.com/mod5ied/"
                    class="hover:scale-x-105 hover:bg-slate-200 transition-all duration-200 z-20 rounded-md border border-slate-200 font-semibold p-2 bg-slate-100 text-indigo-700">Ogwuru
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