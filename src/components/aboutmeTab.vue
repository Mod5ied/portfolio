<template>
    <div v-if="useAbout"
        class="introTabCard justify-around">
        <div
            class="flex flex-col justify-start py-2 border md:border-none md:gap-4 border-t-indigo-100 border-b-indigo-100 border-r-transparent border-l-transparent">
            <h1 class="text-2xl font-bold text-left text-indigo-600 md:text-4xl md:text-center">About</h1>
            <p class="text-base font-semibold text-left text-indigo-500">Get to know me in the third-person!</p>
        </div>
        <main class="flex flex-col text-sm font-semibold gap-3 text-left md:w-3/4 relative bottom-16 md:bottom-0">
            <p>Hello there. His name is Ogwuru Patrick and he's an awesome frontend engineer based in Nigeria.</p>
            <p>Asides working a frontend engineer, he's really proficient working on and building backend systems, and
                experimenting with database systems.</p>
            <p>He's always fascinated by how the computer systems works on either ends, and its even more
                fulfilling being amongst the team building these systems.
            </p>
            <p class="">If you prefer to read more about his dev timeline and escapades, you can
                look up his Github below.<ion-icon name="arrow-down-outline"></ion-icon>
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