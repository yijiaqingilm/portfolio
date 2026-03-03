import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let intersectionObserver = null
  let mutationObserver = null

  function observeElement(el) {
    if (!el.classList.contains('visible')) {
      intersectionObserver.observe(el)
    }
  }

  onMounted(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    )

    document.querySelectorAll('.fade-up').forEach(observeElement)

    mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue
          if (node.classList?.contains('fade-up')) {
            observeElement(node)
          }
          node.querySelectorAll?.('.fade-up').forEach(observeElement)
        }
      }
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    intersectionObserver?.disconnect()
    mutationObserver?.disconnect()
  })
}
