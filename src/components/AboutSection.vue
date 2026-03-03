<script setup>
  const stats = [
    { value: '10+', label: '年开发经验' },
    { value: '15+', label: '项目独立交付' },
    { value: '7', label: '年最长项目维护' },
    { value: '0', label: '线上支付事故' },
  ]
</script>

<template>
  <section id="about" class="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900/50">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Visual -->
        <div class="fade-up relative">
          <div
            class="aspect-[4/3] sm:aspect-square max-w-xs sm:max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-accent/10 via-violet-500/5 to-pink-500/5 dark:from-accent/20 dark:via-violet-500/15 dark:to-pink-500/10 border border-zinc-200 dark:border-zinc-800 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] transition-all duration-500"
          >
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center px-6 sm:px-10 py-6 sm:py-8">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-8 rotate-6"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 text-accent -rotate-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 18l6-6-6-6" />
                    <path d="M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <p class="font-display text-xl sm:text-3xl leading-snug">
                  <span class="text-zinc-800 dark:text-zinc-100 font-semibold">代码有逻辑</span>
                  <br />
                  <span class="text-zinc-400 dark:text-zinc-500 mx-2 text-base sm:text-lg">·</span>
                  <br />
                  <span class="text-accent font-semibold">做事有温度</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Decorative dots -->
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 dark:opacity-10 hidden sm:grid"
            aria-hidden="true"
          >
            <div v-for="i in 16" :key="i" class="w-2 h-2 rounded-full bg-accent"></div>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div class="fade-up">
            <span class="text-sm font-bold text-accent uppercase tracking-wider">关于我</span>
            <h2
              class="mt-3 font-body font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight"
            >
              从前端出发，向全栈生长
            </h2>
          </div>
          <div class="fade-up mt-6 space-y-4 text-zinc-500 dark:text-zinc-300 leading-relaxed">
            <p>
              入行十年，大部分时间扎在电商领域。从最初用 jQuery 切页面，到如今围绕 Vue
              生态独立交付完整产品——这条路上最大的收获不是技术栈变宽了，而是学会了
              <span class="text-zinc-700 dark:text-zinc-100 font-medium">从业务出发做技术决策</span>
              。
            </p>
            <p>
              我习惯一个人扛完从需求到上线的全流程：前端用 Vue/uni-app 搭界面，服务端用 Node.js
              写接口，数据库自己设计。这种工作方式让我对系统全局有清晰的认知，也让我在跨境电商海关对接、蓝牙硬件通信这类
              <span class="text-zinc-700 dark:text-zinc-100 font-medium">跨领域问题</span>
              上能快速找到落地方案。
            </p>
            <p>
              我不是那种追新框架的人，更在意
              <span class="text-zinc-700 dark:text-zinc-100 font-medium">
                代码能不能持续跑三年五年
              </span>
              。我维护最久的项目已经第七年了，依然在线上稳定服务——这是我最引以为傲的事。
            </p>
          </div>

          <!-- Stats -->
          <div class="fade-up mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div v-for="stat in stats" :key="stat.label" class="text-center group cursor-default">
              <div
                class="font-body font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300 origin-center"
              >
                {{ stat.value }}
              </div>
              <div
                class="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300"
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
