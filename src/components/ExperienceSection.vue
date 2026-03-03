<script setup>
  import { ref } from 'vue'

  const experiences = [
    {
      company: '深圳市麦芽智能设备有限公司',
      role: '全栈工程师',
      period: '2018.03 - 至今',
      current: true,
      sections: [
        {
          heading: '系统设计与开发',
          text: '负责公司客户端（微信公众号使用 Vue + Framework7 和微信小程序使用 uni-app）以及服务端系统（Node.js）的设计、开发与维护。',
        },
        {
          heading: '参与并负责的主要项目',
          items: [
            '麦芽小达人公众号/小程序（C端电商平台）',
            '好买好卖企业端（B端电商平台）',
            '麦芽海外购小程序（跨境电商平台）',
            '麦芽甄选小程序（小叶子点读笔推广平台）',
            '麦芽天赋岛小程序（小叶子点读笔生态）',
            '麦芽推荐官小程序（集成推广平台）',
            '麦芽云助手（云宝盒使用平台及自制点读包合成平台）',
            '大用麦芽小程序（C端公司自有茶叶产品销售平台）',
            '麦芽小达人WiFi点读笔小程序',
            '景尚订房（项目已停止运营）',
          ],
        },
        {
          heading: '项目管理与技术方案',
          items: [
            '参与需求分析与技术可行性评估，确保项目按时交付',
            '把握项目整体进度，完成技术方案设计，并编写高质量、易于维护的代码',
          ],
        },
        {
          heading: '客户端开发',
          items: [
            '开发高性能、高可用性的前端应用，使用技术栈包括 Vue、Vite、Webpack、Framework7 等',
            '实现复杂的交互逻辑，优化用户体验和界面响应速度',
          ],
        },
        {
          heading: '服务端开发',
          items: [
            '构建支持高并发的后端服务，使用 Express.js 框架',
            '设计和维护 RESTful API 接口，确保服务的易用性和扩展性',
            '进行数据库设计，使用 MySQL，并优化数据库性能以支持高效数据访问',
          ],
        },
      ],
      tags: ['Vue', 'uni-app', 'Node.js', 'Express.js', 'MySQL', 'Framework7'],
    },
    {
      company: '咔希亚互联网科技有限公司',
      role: '前端开发',
      period: '2017.06 - 2017.12',
      current: false,
      sections: [
        {
          heading: '主要职责',
          items: ['负责公司株株绿植项目前端开发'],
        },
      ],
      tags: ['前端开发'],
    },
    {
      company: '翔傲科技有限公司',
      role: '前端开发',
      period: '2016.04 - 2017.06',
      current: false,
      sections: [
        {
          heading: '主要职责',
          items: [
            '负责公司项目：筑未来、工业者联盟的前端项目开发',
            '搭建前端开发环境，项目框架选型，项目进度把控',
          ],
        },
      ],
      tags: ['前端开发'],
    },
    {
      company: '深圳市时空机器有限公司',
      role: '前端开发',
      period: '2015.08 - 2016.03',
      current: false,
      sections: [
        {
          heading: '主要职责',
          items: [
            '参与公司项目中的 Web 前端（偏移动端）功能设计、开发和实现',
            '与后端开发人员配合，高质量完成网站前端开发工作',
          ],
        },
      ],
      tags: ['Web前端', '移动端'],
    },
    {
      company: '深圳市安冠科技有限公司',
      role: '软件工程师',
      period: '',
      current: false,
      sections: [
        {
          heading: '主要职责',
          items: [
            '负责公司 OA 办公软件的开发',
            '在 Android 平台对设备进行控制，开发并维护七寸屏应用',
            '搭建产品资料管理平台，用于公司的产品资料管理',
          ],
        },
      ],
      tags: ['Android', 'OA系统', '平台开发'],
    },
  ]

  const expandedIndex = ref(0)

  function toggleExpand(index) {
    expandedIndex.value = expandedIndex.value === index ? -1 : index
  }
</script>

<template>
  <section id="experience" class='py-20 sm:py-28'>
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center max-w-2xl mx-auto mb-14 fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">工作经历</span>
        <h2
          class="mt-3 font-body font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight"
        >
          个人履历
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-300 leading-relaxed">
          从前端开发到全栈工程师，持续深耕电商与智能硬件领域。
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"
          aria-hidden="true"
        ></div>

        <div class="space-y-6">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            class="fade-up relative pl-12 sm:pl-20"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full border-2 transition-colors duration-300"
              :class="
                exp.current
                  ? 'bg-accent border-accent shadow-[0_0_8px_rgba(37,99,235,0.5)]'
                  : expandedIndex === index
                    ? 'bg-accent/60 border-accent/60'
                    : 'bg-zinc-300 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-700'
              "
            ></div>

            <!-- Card -->
            <div
              class="group rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer"
              :class="
                expandedIndex === index
                  ? 'bg-white dark:bg-zinc-900 border-accent/20 dark:border-accent/30 shadow-lg shadow-accent/5'
                  : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 hover:border-accent/20 dark:hover:border-accent/30 hover:shadow-md hover:shadow-accent/5'
              "
              @click="toggleExpand(index)"
            >
              <!-- Header -->
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="font-body font-bold text-lg text-zinc-900 dark:text-white">
                      {{ exp.company }}
                    </h3>
                  </div>
                  <div
                    class="mt-1 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-300"
                  >
                    <span class="flex items-center gap-1.5">
                      <svg
                        class="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      {{ exp.role }}
                    </span>
                    <span v-if="exp.period" class="flex items-center gap-1.5">
                      <svg
                        class="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {{ exp.period }}
                    </span>
                  </div>
                </div>

                <!-- Expand icon -->
                <div class="hidden sm:flex items-center">
                  <svg
                    class="w-5 h-5 text-zinc-400 dark:text-zinc-400 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedIndex === index }"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <!-- Tags -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in exp.tags"
                  :key="tag"
                  class="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Expanded content -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[2000px]"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-[2000px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="expandedIndex === index" class="mt-5 overflow-hidden">
                  <div class="border-t border-zinc-100 dark:border-zinc-800 pt-5 space-y-5">
                    <div v-for="section in exp.sections" :key="section.heading">
                      <h4
                        class="font-body font-bold text-sm text-zinc-700 dark:text-zinc-200 mb-2 flex items-center gap-2"
                      >
                        <div class="w-1 h-4 rounded-full bg-accent/60"></div>
                        {{ section.heading }}
                      </h4>

                      <p
                        v-if="section.text"
                        class="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed pl-3"
                      >
                        {{ section.text }}
                      </p>

                      <ul v-if="section.items" class="space-y-1.5 pl-3">
                        <li
                          v-for="item in section.items"
                          :key="item"
                          class="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed"
                        >
                          <div class="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0 mt-1.5"></div>
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
