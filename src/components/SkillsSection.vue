<script setup>
const skillGroups = [
  {
    title: '前端开发',
    icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    skills: ['Vue.js (Vue2/Vue3)', 'uni-app', '微信小程序', 'Framework7', 'TypeScript'],
  },
  {
    title: '后端 & 数据库',
    icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    skills: ['Node.js / Express.js', 'MySQL / SQL Server', 'RESTful API', 'WebSocket / 蓝牙', 'Java'],
  },
  {
    title: '工具 & 平台',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    skills: ['Vite / Webpack', 'Git', '微信开放平台', '微信支付 / 海外支付', '微信小店'],
  },
  {
    title: '业务领域',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    skills: ['电商平台开发', '跨境电商（三单对碰）', '智能硬件对接', '需求分析 & 技术方案', '独立全栈交付'],
  },
]
</script>

<template>
  <section id="skills" class="py-20 sm:py-28">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center max-w-2xl mx-auto mb-14 fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">技能</span>
        <h2 class="mt-3 font-body font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
          我的工具箱
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
          我用来将想法变为现实的技术和工具。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="fade-up bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 hover:border-accent/20 dark:hover:border-accent/30 transition-colors duration-250 cursor-default"
        >
          <div class="w-11 h-11 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="group.icon"></svg>
          </div>
          <h3 class="font-body font-bold text-zinc-900 dark:text-white mb-3">{{ group.title }}</h3>
          <ul class="space-y-2">
            <li
              v-for="skill in group.skills"
              :key="skill"
              class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></div>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
