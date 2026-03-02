<script setup>
import { useScrollReveal } from './composables/useScrollReveal'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

useScrollReveal()
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <ProjectGrid />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
