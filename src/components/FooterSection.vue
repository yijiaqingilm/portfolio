<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-zinc-100 dark:border-zinc-800">
    <div class="max-w-6xl mx-auto section-padding py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#" class="font-display text-xl font-bold text-zinc-900 dark:text-white cursor-pointer">
        whatyi27
      </a>
      <p class="text-sm text-zinc-400 dark:text-zinc-400">
        &copy; {{ year }} 易家庆.
      </p>
    </div>
  </footer>
</template>
