<template>
    <div v-if="Props.useSkills" class="items-center justify-center introTabSkills">
        <main class="flex flex-col w-9/12 gap-8">
            <section class="flex flex-col gap-2">
                <h2 class="text-xl italic font-semibold text-left border border-x-transparent border-t-transparent border-b-indigo-200 md:w-4/6">Development technologies I work with:</h2>
                <div class="flex flex-col gap-1 px-4 text-left">
                    <span class="worksTabParas">JavaScript</span>
                    <span class="worksTabParas">Node.js</span>
                    <span class="worksTabParas">Vue.js</span>
                    <span class="worksTabParas">Typescript</span>
                    <span class="worksTabParas">MongoDB (Mongoose)</span>
                    <span class="worksTabParas">PostgreSQL and TypeORM</span>
                    <span class="worksTabParas">Redis for backend caching</span>
                </div>
            </section>
            <section class="flex flex-col gap-2">
                <h2 class="w-3/4 text-xl italic font-semibold text-left border border-x-transparent border-t-transparent border-b-indigo-200">Development tech I'm interested in learning:</h2>
                <div class="flex flex-col gap-1 px-4 text-left">
                    <span class="worksTabParas">Deno</span>
                    <span class="worksTabParas">Solidity</span>
                    <span class="worksTabParas">Go-lang</span>
                    <span class="worksTabParas">AWS</span>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>

const Props = defineProps({
    useSkills: {
        type: Boolean,
        default: false
    }
})
</script>