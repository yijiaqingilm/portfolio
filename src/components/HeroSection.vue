<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { loaded.value = true })
})

const techStack = ['Vue', 'Vite', 'uni-app', 'TypeScript', 'Node.js', '微信小程序']

const socials = [
  { label: 'GitHub', href: '#', icon: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>' },
  { label: 'LinkedIn', href: '#', icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
  { label: 'Twitter', href: '#', icon: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
      <div class="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl"></div>
      <div class="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/8 blur-3xl"></div>
      <!-- Dot grid -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
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
            <div v-if="loaded" class="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 rounded-full mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">开放合作中</span>
            </div>
          </Transition>

          <!-- Greeting -->
          <Transition
            enter-active-class="transition-all duration-700 delay-150"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p v-if="loaded" class="font-display text-2xl sm:text-3xl text-accent mb-3">
              你好，我是
            </p>
          </Transition>

          <!-- Name -->
          <Transition
            enter-active-class="transition-all duration-700 delay-200"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <h1 v-if="loaded" class="font-body font-bold text-5xl sm:text-6xl lg:text-7xl text-zinc-900 dark:text-white leading-tight">
              易家庆<span class="text-accent">.</span>
            </h1>
          </Transition>

          <!-- Tagline -->
          <Transition
            enter-active-class="transition-all duration-700 delay-300"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p v-if="loaded" class="mt-5 text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
              十年以上开发经验，专注
          <span class="text-zinc-700 dark:text-zinc-300 font-semibold">Vue 生态</span>与
          <span class="text-zinc-700 dark:text-zinc-300 font-semibold">微信小程序</span>开发，
          擅长电商平台与跨境电商全栈交付。
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
                class="px-3 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60"
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
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover shadow-lg shadow-accent/20 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              >
                查看作品
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-7 py-3.5 font-semibold border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              >
                联系我
              </a>
            </div>
          </Transition>

          <!-- Social links -->
          <Transition
            enter-active-class="transition-all duration-700 delay-[530ms]"
            enter-from-class="opacity-0 translate-y-6"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="loaded" class="mt-8 flex items-center gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" v-html="social.icon"></svg>
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
            <div class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-900/5 dark:shadow-black/30 overflow-hidden">
              <div class="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700">
                <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
                <span class="ml-3 text-xs text-zinc-400 dark:text-zinc-500 font-mono">portfolio.vue</span>
              </div>
              <div class="p-5 font-mono text-[13px] leading-relaxed">
                <div class="text-zinc-400 dark:text-zinc-600">&lt;<span class="text-pink-500 dark:text-pink-400">script</span> <span class="text-accent">setup</span>&gt;</div>
                <div class="pl-4 mt-1"><span class="text-violet-500 dark:text-violet-400">const</span> <span class="text-zinc-800 dark:text-zinc-200">developer</span> = {</div>
                <div class="pl-8"><span class="text-emerald-600 dark:text-emerald-400">name</span>: <span class="text-amber-600 dark:text-amber-400">'易家庆'</span>,</div>
                <div class="pl-8"><span class="text-emerald-600 dark:text-emerald-400">role</span>: <span class="text-amber-600 dark:text-amber-400">'Web前端开发者'</span>,</div>
                <div class="pl-8"><span class="text-emerald-600 dark:text-emerald-400">experience</span>: <span class="text-amber-600 dark:text-amber-400">'10+ 年'</span>,</div>
                <div class="pl-8"><span class="text-emerald-600 dark:text-emerald-400">stack</span>: [<span class="text-amber-600 dark:text-amber-400">'Vue'</span>, <span class="text-amber-600 dark:text-amber-400">'Node.js'</span>],</div>
                <div class="pl-4">}</div>
                <div class="mt-1 text-zinc-400 dark:text-zinc-600">&lt;/<span class="text-pink-500 dark:text-pink-400">script</span>&gt;</div>
                <div class="mt-3 flex items-center gap-2">
                  <span class="text-zinc-400 dark:text-zinc-600">&gt;</span>
                  <span class="w-2 h-5 bg-accent animate-pulse"></span>
                </div>
              </div>
            </div>

            <!-- Floating stat card: top-right -->
            <div class="absolute -top-4 -right-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-3 animate-float-slow">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div>
                  <div class="text-[11px] text-zinc-500 dark:text-zinc-400">项目交付</div>
                  <div class="text-sm font-bold text-zinc-900 dark:text-white">15+</div>
                </div>
              </div>
            </div>

            <!-- Floating stat card: bottom-left -->
            <div class="absolute -bottom-3 -left-6 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-3 animate-float-delayed">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div class="text-[11px] text-zinc-500 dark:text-zinc-400">开发经验</div>
                  <div class="text-sm font-bold text-zinc-900 dark:text-white">10+ 年</div>
                </div>
              </div>
            </div>

            <!-- Floating tech badge -->
            <div class="absolute top-1/2 -right-8 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-md w-10 h-10 flex items-center justify-center animate-float-slow">
              <svg class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21.5V2.5l11 9.5L1 21.5zm11 0V2.5l11 9.5L12 21.5z" opacity=".1"/><path d="M2.5 19.6V4.4L10.9 12 2.5 19.6zm11 0V4.4L22.4 12l-8.9 7.6z"/></svg>
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
            <div class="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-700 rounded-full flex justify-center pt-2 group-hover:border-accent transition-colors duration-200">
              <div class="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full animate-bounce group-hover:bg-accent transition-colors duration-200"></div>
            </div>
          </a>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
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
