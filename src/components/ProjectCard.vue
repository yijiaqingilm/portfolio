<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
defineEmits(['select'])
</script>

<template>
  <div
    class="group block rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
    role="button"
    tabindex="0"
    @click="$emit('select', project)"
    @keydown.enter="$emit('select', project)"
  >
    <!-- Image -->
    <div class="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
      <div
        class="w-full h-full transition-transform duration-500 group-hover:scale-105"
        :class="project.gradient"
      >
        <div class="absolute inset-0 flex items-center justify-center text-white/80">
          <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
      </div>
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 bg-white dark:bg-zinc-900 rounded-full p-3 shadow-lg">
          <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="p-5 sm:p-6">
      <div class="flex items-center gap-2 mb-2 flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent/10 text-accent dark:bg-accent/20"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="font-body font-bold text-lg text-zinc-900 dark:text-white group-hover:text-accent transition-colors duration-200">
        {{ project.title }}
      </h3>
      <p class="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
        {{ project.description }}
      </p>
      <span class="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-accent group-hover:gap-2 transition-all duration-200">
        查看详情
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </span>
    </div>
  </div>
</template>
