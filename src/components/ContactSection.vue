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

const socials = [
  { label: 'GitHub', href: '#', icon: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>' },
  { label: 'LinkedIn', href: '#', icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
  { label: 'Twitter', href: '#', icon: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
]
</script>

<template>
  <section id="contact" class="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900/50">
    <div class="max-w-4xl mx-auto section-padding text-center">
      <div class="fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">联系</span>
        <h2 class="mt-3 font-body font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
          一起合作吧
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto">
          有项目想法或者只是想聊聊？随时通过以下方式联系我。
        </p>
      </div>

      <!-- Contact cards -->
      <div class="fade-up mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6">
        <component
          :is="item.href ? 'a' : 'div'"
          v-for="item in contactInfo"
          :key="item.label"
          :href="item.href || undefined"
          class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-250"
          :class="item.href ? 'hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30' : ''"
        >
          <div class="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="item.icon"></svg>
          </div>
          <div class="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">{{ item.label }}</div>
          <div class="text-sm font-semibold text-zinc-900 dark:text-white">{{ item.value }}</div>
        </component>
      </div>

      <!-- Social links -->
      <div class="fade-up mt-10 flex items-center justify-center gap-3">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-accent hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" v-html="social.icon"></svg>
        </a>
      </div>
    </div>
  </section>
</template>
