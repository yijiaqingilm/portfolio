<script setup>
const contactInfo = [
  {
    label: '邮箱',
    value: '13641452585@163.com',
    href: 'mailto:13641452585@163.com',
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  },
  {
    label: '位置',
    value: '中国 · 长沙',
    href: null,
    icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  },
  {
    label: '手机',
    value: '136 4145 2585',
    href: 'tel:13641452585',
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  },
]

</script>

<template>
  <section id="contact" class="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900/50">
    <div class="max-w-4xl mx-auto section-padding text-center">
      <div class="fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">联系方式</span>
        <h2 class="mt-3 font-body font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
          期待您的联系
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto">
          如果您觉得我的经历和技能符合团队需求，欢迎随时通过以下方式与我取得联系。
        </p>
      </div>

      <!-- Contact cards -->
      <div class="fade-up mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        <component
          :is="item.href ? 'a' : 'div'"
          v-for="item in contactInfo"
          :key="item.label"
          :href="item.href || undefined"
          class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 transition-all duration-250"
          :class="item.href ? 'hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30' : ''"
        >
          <div class="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center shrink-0 sm:mx-auto sm:mb-4">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
            </div>
            <div class="text-left sm:text-center min-w-0">
              <div class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5 sm:mb-1">{{ item.label }}</div>
              <div class="text-sm font-semibold text-zinc-900 dark:text-white truncate">{{ item.value }}</div>
            </div>
          </div>
        </component>
      </div>

    </div>
  </section>
</template>
