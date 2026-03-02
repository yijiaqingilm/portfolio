<script setup>
const stats = [
  { value: '10+', label: '年经验' },
  { value: '15+', label: '项目交付' },
  { value: '5', label: '家公司' },
  { value: '8+', label: '年深耕电商' },
]
</script>

<template>
  <section id="about" class="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900/50">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Visual -->
        <div class="fade-up relative">
          <div class="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 via-violet-500/10 to-pink-500/10 dark:from-accent/30 dark:via-violet-500/20 dark:to-pink-500/20 border border-zinc-200 dark:border-zinc-800">
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center p-8">
                <div class="w-28 h-28 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-14 h-14 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>
                  </svg>
                </div>
                <p class="font-display text-3xl text-zinc-600 dark:text-zinc-300">十年磨一剑</p>
              </div>
            </div>
          </div>
          <!-- Decorative dots -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 dark:opacity-10" aria-hidden="true">
            <div v-for="i in 16" :key="i" class="w-2 h-2 rounded-full bg-accent"></div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div class="fade-up">
            <span class="text-sm font-bold text-accent uppercase tracking-wider">关于我</span>
            <h2 class="mt-3 font-body font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
              全栈交付，前端驱动
            </h2>
          </div>
          <div class="fade-up mt-6 space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              拥有十年以上软件开发经验，擅长独立完成项目并具备卓越的团队协作能力。精通 Vue.js，熟练使用 Webpack 和 Vite 进行项目构建，积累了丰富的电商平台开发经验。
            </p>
            <p>
              在移动端开发方面，专注于微信公众号和微信小程序，拥有多平台电商开发的丰富经验，包括微信支付、第三方支付和海外支付的对接，熟悉跨境电商对接流程。
            </p>
            <p>
              此外具备 WebSocket、蓝牙模块的对接经验，熟悉微信开放平台及微信小店对接。对 Node.js 及服务端架构有深入了解，精通 MySQL 数据库设计与优化。
            </p>
          </div>

          <!-- Stats -->
          <div class="fade-up mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="font-body font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-white">{{ stat.value }}</div>
              <div class="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
