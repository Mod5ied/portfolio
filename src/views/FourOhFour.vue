<template>
    <div class="flex items-center justify-center w-screen h-screen font-body bg-slate-50">
        <main class="flex flex-col items-center gap-20">
            <img src="../assets/error404-768x326.webp" class="w-3/4" alt="4-0h-Four">
            <div class="flex items-center justify-around p-1 w-72">
                <p class="flex items-center gap-1 font-bold text-slate-600">
                    You can also
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clip-rule="evenodd" />
                    </svg>
                </p>
                <router-link class="px-8 py-3 font-medium border rounded-lg shadow-sm text-slate-900 hover:border-slate-300 bg-slate-100"
                    :to="{ name: 'Dashboard' }">Go Home</router-link>
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>