<script setup>
import { watch } from 'vue'

const props = defineProps({
  project: { type: Object, default: null },
})
const emit = defineEmits(['close'])

watch(() => props.project, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function onOverlayClick(e) {
  if (e.target === e.currentTarget) emit('close')
}

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        @click="onOverlayClick"
        @keydown="onKeydown"
      >
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-8 sm:scale-95 sm:translate-y-0"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-8 sm:scale-95 sm:translate-y-0"
          appear
        >
          <div
            v-if="project"
            class="bg-white dark:bg-zinc-900 w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col"
          >
            <!-- Drag indicator (mobile) -->
            <div class="sm:hidden flex justify-center pt-2 pb-1 shrink-0">
              <div class="w-10 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
            </div>
            <!-- Header gradient -->
            <div class="relative h-28 sm:h-40 shrink-0" :class="project.gradient">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <button
                class="absolute top-3 right-3 w-9 h-9 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="关闭"
                @click="emit('close')"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-8">
              <!-- Tags -->
              <div class="flex items-center gap-2 flex-wrap mb-3">
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {{ project.category }}
                </span>
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-accent/10 dark:bg-accent/20 text-accent">
                  {{ project.period }}
                </span>
              </div>

              <h2 class="font-body font-bold text-2xl text-zinc-900 dark:text-white">{{ project.title }}</h2>
              <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{{ project.company }}</p>

              <!-- Tech tags -->
              <div class="flex flex-wrap gap-1.5 mt-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-accent/10 text-accent dark:bg-accent/20"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Description sections -->
              <div class="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>{{ project.description }}</p>
                <div v-for="(section, i) in project.details" :key="i">
                  <h3 class="font-body font-bold text-zinc-900 dark:text-white text-sm mb-2">{{ section.heading }}</h3>
                  <ul v-if="section.items" class="space-y-1.5">
                    <li v-for="(item, j) in section.items" :key="j" class="flex items-start gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-1.5"></div>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                  <p v-else>{{ section.text }}</p>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="shrink-0 border-t border-zinc-100 dark:border-zinc-800 px-6 sm:px-8 py-4 flex justify-end">
              <button
                class="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                @click="emit('close')"
              >
                关闭
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
