<template>
    <div v-if="useAbout" class="justify-around introTabAbout">
        <div
            class="flex flex-col justify-start py-2 border md:border-none md:gap-4 border-t-indigo-100 border-b-indigo-100 border-r-transparent border-l-transparent">
            <h1 class="text-2xl font-bold text-left text-indigo-600 md:text-4xl md:text-center">Biography</h1>
            <p class="text-base font-semibold text-left text-indigo-500">A technical biography</p>
        </div>
        <main class="relative flex flex-col gap-3 text-sm font-semibold text-left md:w-3/4 md:bottom-5">
            <p>Hello there. My name is Ogwuru Patrick and I'm a frontend engineer based in Nigeria.</p>
            <p>Asides working as a frontend engineer, I'm really proficient working on and building backend systems, and
                experimenting with database systems.</p>
            <p>I'm particularly fascinated by how the computer systems works on either ends, and its even more
                fulfilling being amongst the team building these systems.
            </p>
            <p class="">If you prefer to read more about my dev timeline and escapades, you can
                look up my Github below.
            </p>
        </main>

    </div>
</template>

<script setup>
const Props = defineProps({
    useAbout: {
        type: Boolean,
        default: false
    }
})
</script>