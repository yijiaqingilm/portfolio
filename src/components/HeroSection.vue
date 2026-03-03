<script setup>
  import { ref, onMounted } from 'vue'

  const loaded = ref(false)
  onMounted(() => {
    requestAnimationFrame(() => {
      loaded.value = true
    })
  })

  const techStack = ['Vue', 'Vite', 'uni-app', 'TypeScript', 'Node.js', '微信小程序']
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        class="absolute -top-40 -right-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 -left-40 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/8 blur-3xl"
      ></div>
      <!-- Dot grid -->
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style="
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 32px 32px;
        "
      ></div>
    </div>

    <div class="relative max-w-6xl mx-auto section-padding w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text content -->
        <div>
          <!-- Status badge -->
          <Transition
            enter-active-class="transition-all duration-600 delay-100"
            enter-from-class="opacity-0 translate-y-5"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div
              v-if="loaded"
              class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 rounded-full mb-6"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                积极求职中
              </span>
            </div>
          </Transition>

          <!-- Greeting -->
          <Transition
            enter-active-class="transition-all duration-700 delay-150"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p v-if="loaded" class="font-display text-xl sm:text-3xl text-accent mb-3">
              你好，我是
            </p>
          </Transition>

          <!-- Name -->
          <Transition
            enter-active-class="transition-all duration-700 delay-200"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <h1
              v-if="loaded"
              class="font-body font-extrabold text-4xl sm:text-6xl lg:text-7xl text-zinc-900 dark:text-white leading-tight tracking-tight"
            >
              易家庆
              <span class="text-accent"></span>
            </h1>
          </Transition>

          <!-- Tagline -->
          <Transition
            enter-active-class="transition-all duration-700 delay-300"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p
              v-if="loaded"
              class="mt-4 sm:mt-5 text-base sm:text-xl text-zinc-500 dark:text-zinc-300 max-w-lg leading-relaxed"
            >
              十年以上开发经验，专注
              <span class="text-zinc-700 dark:text-zinc-100 font-semibold">Vue 生态</span>
              与
              <span class="text-zinc-700 dark:text-zinc-100 font-semibold">微信小程序</span>
              开发，擅长电商平台与跨境电商全栈交付。正在寻找新的职业机会，期待加入优秀的团队。
            </p>
          </Transition>

          <!-- Tech stack tags -->
          <Transition
            enter-active-class="transition-all duration-700 delay-[380ms]"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="loaded" class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in techStack"
                :key="tech"
                class="px-3 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </Transition>

          <!-- CTAs -->
          <Transition
            enter-active-class="transition-all duration-700 delay-[450ms]"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="loaded" class="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#projects"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-accent/20 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              >
                查看项目经验
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-7 py-3.5 font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              >
                获取联系方式
              </a>
            </div>
          </Transition>
        </div>

        <!-- Right: Visual element -->
        <Transition
          enter-active-class="transition-all duration-900 delay-300"
          enter-from-class="opacity-0 translate-x-12"
          enter-to-class="opacity-100 translate-x-0"
        >
          <div v-if="loaded" class="relative hidden lg:block">
            <!-- Main code window -->
            <div
              class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-900/5 dark:shadow-black/30 overflow-hidden hover:shadow-accent/10 hover:border-accent/20 transition-all duration-500"
            >
              <div
                class="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700"
              >
                <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
                <span class="ml-3 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  portfolio.vue
                </span>
              </div>
              <div class="p-5 font-mono text-[13px] leading-relaxed">
                <div class="text-zinc-400 dark:text-zinc-600">
                  &lt;
                  <span class="text-pink-500 dark:text-pink-400">script</span>
                  <span class="text-accent">setup</span>
                  &gt;
                </div>
                <div class="pl-4 mt-1">
                  <span class="text-violet-500 dark:text-violet-400">const</span>
                  <span class="text-zinc-800 dark:text-zinc-200">developer</span>
                  = {
                </div>
                <div class="pl-8">
                  <span class="text-emerald-600 dark:text-emerald-400">name</span>
                  :
                  <span class="text-amber-600 dark:text-amber-400">'易家庆'</span>
                  ,
                </div>
                <div class="pl-8">
                  <span class="text-emerald-600 dark:text-emerald-400">role</span>
                  :
                  <span class="text-amber-600 dark:text-amber-400">'Web前端开发者'</span>
                  ,
                </div>
                <div class="pl-8">
                  <span class="text-emerald-600 dark:text-emerald-400">experience</span>
                  :
                  <span class="text-amber-600 dark:text-amber-400">'10+ 年'</span>
                  ,
                </div>
                <div class="pl-8">
                  <span class="text-emerald-600 dark:text-emerald-400">stack</span>
                  : [
                  <span class="text-amber-600 dark:text-amber-400">'Vue'</span>
                  ,
                  <span class="text-amber-600 dark:text-amber-400">'Node.js'</span>
                  ],
                </div>
                <div class="pl-4">}</div>
                <div class="mt-1 text-zinc-400 dark:text-zinc-600">
                  &lt;/
                  <span class="text-pink-500 dark:text-pink-400">script</span>
                  &gt;
                </div>
                <div class="mt-3 flex items-center gap-2">
                  <span class="text-zinc-400 dark:text-zinc-600">&gt;</span>
                  <span class="w-2 h-5 bg-accent animate-pulse"></span>
                </div>
              </div>
            </div>

            <!-- Floating stat card: top-right -->
            <div
              class="absolute -top-4 -right-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-3 animate-float-slow"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-zinc-500 dark:text-zinc-400">项目交付</div>
                  <div class="text-sm font-bold text-zinc-900 dark:text-white">15+</div>
                </div>
              </div>
            </div>

            <!-- Floating stat card: bottom-left -->
            <div
              class="absolute -bottom-3 -left-6 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-3 animate-float-delayed"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="w-9 h-9 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-zinc-500 dark:text-zinc-400">开发经验</div>
                  <div class="text-sm font-bold text-zinc-900 dark:text-white">10+ 年</div>
                </div>
              </div>
            </div>

            <!-- Floating tech badge -->
            <div
              class="absolute top-1/2 -right-8 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-md w-10 h-10 flex items-center justify-center animate-float-slow"
            >
              <svg class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21.5V2.5l11 9.5L1 21.5zm11 0V2.5l11 9.5L12 21.5z" opacity=".1" />
                <path d="M2.5 19.6V4.4L10.9 12 2.5 19.6zm11 0V4.4L22.4 12l-8.9 7.6z" />
              </svg>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Scroll indicator (centered below) -->
      <Transition
        enter-active-class="transition-all duration-700 delay-[700ms]"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div v-if="loaded" class="mt-16 lg:mt-20 flex justify-center">
          <a href="#projects" class="cursor-pointer group" aria-label="滚动到作品区">
            <div
              class="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-700 rounded-full flex justify-center pt-2 group-hover:border-accent transition-colors duration-200"
            >
              <div
                class="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce group-hover:bg-accent transition-colors duration-200"
              ></div>
            </div>
          </a>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
  @keyframes float-slow {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes float-delayed {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
  .animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float-delayed 5s ease-in-out 1s infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-float-slow,
    .animate-float-delayed {
      animation: none;
    }
  }
</style>
