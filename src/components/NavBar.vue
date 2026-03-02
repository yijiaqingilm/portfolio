<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import ThemeToggle from './ThemeToggle.vue'

const { isDark, toggle } = useDarkMode()
const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: '作品', href: '#projects' },
  { label: '关于', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '联系', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="fixed top-4 left-4 right-4 z-50 rounded-2xl border transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 shadow-sm'
        : 'bg-transparent border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
      <a href="#" class="font-display text-2xl font-bold text-zinc-900 dark:text-white cursor-pointer">
        whatyi27
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="relative text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:rounded-full after:transition-all after:duration-300"
        >
          {{ link.label }}
        </a>
        <ThemeToggle :is-dark="isDark" @toggle="toggle" />
      </div>

      <div class="flex items-center gap-3 md:hidden">
        <ThemeToggle :is-dark="isDark" @toggle="toggle" />
        <button
          class="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
          aria-label="切换菜单"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden px-4 pb-4">
        <div class="flex flex-col gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 py-2.5 px-3 rounded-lg transition-colors duration-200 cursor-pointer"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
