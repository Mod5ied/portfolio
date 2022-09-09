<template>
    <div class="z-10 flex items-center h-screen bg-slate-100 dark:bg-slate-900">
        <Name />
        <DownloadCv />
        <main class="relative flex items-center justify-center w-screen bottom-10 h-2/3 md:h-1/2">
            <Transition>
                <IntroTab :useIntro="useIntro" />
            </Transition>
            <Transition>
                <AboutMeTab :useAbout="useAbout" />
            </Transition>
            <Transition>
                <SkillsTab :useSkills="useSkills" />
            </Transition>
            <Transition>
                <HelperTab :useGit="useGit" />
            </Transition>
            <Transition>
                <WorksTab :useWorks="useWorks" />
            </Transition>

        </main>
        <Dock :useAbout="useAbout" :useIntro="useIntro" :useSkills="useSkills" :useWorks="useWorks"
            @toggl-about="handleToggl('about')" @toggl-skills="handleToggl('skills')"
            @toggl-works="handleToggl('works')" @toggl-intro="handleToggl('intro')" @toggl-git="handleToggl('git')" />
    </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, reactive, toRefs } from 'vue';

import DownloadCv from '../components/DownloadCv.vue';
import Dock from '../components/Dock.vue';
import Name from '../components/Name.vue';
import IntroTab from '../components/introTab.vue';
const HelperTab = defineAsyncComponent(() => import('../components/helperTab.vue'));
const WorksTab = defineAsyncComponent(() => import('../components/worksTab.vue'))
const SkillsTab = defineAsyncComponent(() => import('../components/skillsTab.vue'));
const AboutMeTab = defineAsyncComponent(() => import("../components/aboutmeTab.vue"))


const tabStates = reactive({
    useAbout: false,
    useSkills: false,
    useWorks: false,
    useIntro: false,
    useGit: false
})

const { useAbout, useSkills, useWorks, useIntro, useGit } = toRefs(tabStates);
function handleToggl(tab) {
    switch (tab) {
        case "skills":
            useGit.value = false
            useAbout.value = false
            useWorks.value = false
            useIntro.value = false
            setTimeout(() => { useSkills.value = true }, 800)
            break;
        case "about":
            useGit.value = false
            useWorks.value = false
            useSkills.value = false
            useIntro.value = false
            setTimeout(() => { useAbout.value = true }, 800)
            break;
        case "works":
            useGit.value = false
            useAbout.value = false
            useSkills.value = false
            useIntro.value = false
            setTimeout(() => { useWorks.value = true }, 800)
            break;
        case "intro":
            useGit.value = false
            useAbout.value = false
            useWorks.value = false
            useSkills.value = false
            setTimeout(() => { useIntro.value = true }, 800)
            break
        case "git":
            useAbout.value = false
            useWorks.value = false
            useSkills.value = false
            useIntro.value = false
            setTimeout(() => { useGit.value = true }, 800)
            break
    }
}

onMounted(() => {
    useIntro.value = true
})

</script>