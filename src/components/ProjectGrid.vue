<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectDetail from './ProjectDetail.vue'

const activeFilter = ref('全部')
const selectedProject = ref(null)

const projects = [
  {
    title: '麦芽小达人商城',
    description: '图书电商综合平台，涵盖拼团、秒杀、满减等营销功能，从 Vue2+Webpack 升级至 Vue3+Vite，支持公众号与小程序双端。',
    tags: ['Vue', 'uni-app', 'Node.js', 'MySQL'],
    gradient: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    category: '电商平台',
    company: '深圳市麦芽智能设备有限公司',
    period: '2018.03 - 至今',
    details: [
      {
        heading: '核心业务',
        items: [
          '完整的电商购物流程：商品浏览、加入购物车、选择支付方式、订单管理',
          '丰富的营销活动：拼团、秒杀、满减满赠等',
          '便捷的推广系统：推广链接生成、海报分享、社交媒体一键分享',
        ],
      },
      {
        heading: '技术架构',
        items: [
          '公众号端：Vue + Framework7 搭建',
          '小程序端：uni-app 框架开发',
          '技术升级：从 Vue2 + Webpack 逐步升级至 Vue3 + Vite',
          '服务端：Express.js 框架，全量 TypeScript 编写',
        ],
      },
      {
        heading: '项目职责',
        text: '作为客户端与服务端开发负责人，全权负责架构设计、功能实现和性能优化，确保用户体验和数据安全。',
      },
    ],
  },
  {
    title: '麦芽海外购',
    description: '跨境电商小程序（香港主体），完成海关179对接、微信支付单上报、三方物流仓对接，实现完整跨境购物闭环。',
    tags: ['uni-app', 'Express.js', 'TypeScript'],
    gradient: 'bg-gradient-to-br from-emerald-600 to-teal-500',
    category: '电商平台',
    company: '深圳市麦芽智能设备有限公司',
    period: '2024.10 - 至今',
    details: [
      {
        heading: '核心功能',
        items: [
          '完整的跨境电商购物流程：产品浏览、下单、支付、订单跟踪',
          '海关179号文件对接：自动生成和提交海关文档，简化清关流程',
          '微信支付单上报：集成微信支付，实现支付单自动上报',
          '三方物流对接：锦堂芜湖仓、成都保税仓及易通平台',
        ],
      },
      {
        heading: '技术实现',
        items: [
          '客户端：微信小程序 + uni-app 框架',
          '服务端：Node.js + Express.js，全量 TypeScript',
          'API 设计：RESTful API，支持前后端及物流服务高效协作',
          '数据库：MySQL，灵活应对跨境电商大量数据需求',
        ],
      },
    ],
  },
  {
    title: '麦芽推荐官',
    description: '集成推广平台，汇聚多电商平台商品，为推广员提供链接生成、海报分享、实时佣金数据分析等工具。',
    tags: ['uni-app', 'TypeScript', '微信小店'],
    gradient: 'bg-gradient-to-br from-violet-600 to-purple-500',
    category: '电商平台',
    company: '深圳市麦芽智能设备有限公司',
    period: '2024.11 - 至今',
    details: [
      {
        heading: '核心特点',
        items: [
          '多平台集成：汇聚麦芽小达人、麦芽大用、麦芽海外购等平台商品',
          '便捷推广工具：推广链接生成、分享海报、社交媒体一键分享',
          '实时数据分析：推广效果、佣金收入、转化率等指标实时查看',
          '多元商品选择：涵盖图书、生活、美妆等多个领域',
        ],
      },
      {
        heading: '技术架构',
        items: [
          '小程序：uni-app 框架开发',
          '服务端：Express.js，全量 TypeScript 编写',
          '核心对接：微信小店接口，实现多平台订单与商品适配',
        ],
      },
    ],
  },
  {
    title: '好卖好买商城（B端）',
    description: 'B端代理商电商平台，集成囤货、代发、云仓管理功能，提供完整供应链与订单批量处理能力。',
    tags: ['Vue', 'Vite', 'Express.js', 'MySQL'],
    gradient: 'bg-gradient-to-br from-orange-500 to-amber-500',
    category: '电商平台',
    company: '深圳市麦芽智能设备有限公司',
    period: '2018.03 - 至今',
    details: [
      {
        heading: '核心功能',
        items: [
          '完整购物流程：商品浏览、购物车、下单、多种支付方式',
          '囤货功能：提前备货，囤货管理界面查看商品数量及状态',
          '代发功能：简化物流流程，代发订单管理与发货状态跟踪',
          '云仓管理：降低库存成本，实时查看库存信息和商品流转',
          '批量订单管理：集中处理多个订单，提升运营效率',
        ],
      },
      {
        heading: '技术实现',
        items: [
          '客户端：Vue.js + Vite 高效前端开发',
          '服务端：Node.js + Express.js 高可用后端',
          '数据库：MySQL，设计合理表结构支持各项业务功能',
        ],
      },
    ],
  },
  {
    title: '麦芽云助手',
    description: '与云宝盒硬件设备配套的小程序，实现蓝牙配网、点读包在线共享与下载、自制点读包合成等功能。',
    tags: ['微信小程序', '蓝牙', 'Node.js'],
    gradient: 'bg-gradient-to-br from-pink-600 to-rose-500',
    category: '智能硬件',
    company: '深圳市麦芽智能设备有限公司',
    period: '2023.01 - 至今',
    details: [
      {
        heading: '核心功能',
        items: [
          '云宝盒设备管理：注册、状态监控、使用记录与维护提醒',
          '蓝牙配网：手机蓝牙配对云宝盒，连接状态实时反馈',
          '点读包分享：在线分享自制点读包，促进资源交流',
          '自制点读包：上传文本、音频及图像，自由创建学习材料',
          '批量制作：模板下载和导入，快速生成多个点读包',
        ],
      },
      {
        heading: '技术实现',
        items: [
          '客户端：微信小程序开发框架',
          '服务端：Node.js + Express.js',
          '蓝牙：微信小程序蓝牙 API，与云宝盒高效配对与传输',
          '存储：点读包通过 FTP 上传至自有服务器',
        ],
      },
    ],
  },
  {
    title: '景尚订房',
    description: '海景房出租平台，集成蓝牙智能门禁系统，支持无钥匙入住，同步宝寓系统实现多平台房源管理。',
    tags: ['微信小程序', '蓝牙', 'WebSocket'],
    gradient: 'bg-gradient-to-br from-zinc-700 to-zinc-500',
    category: '智能硬件',
    company: '深圳市麦芽智能设备有限公司',
    period: '2021.03 - 2021.10',
    details: [
      {
        heading: '核心特点',
        items: [
          '智能门禁系统：蓝牙开门，无钥匙入住的现代体验',
          '完整订单流程：快速房间预订、支付和入住，实时房态查询',
          '多平台同步：整合宝寓系统，房源信息同步至多个平台',
        ],
      },
      {
        heading: '项目职责',
        text: '负责上游服务端与小程序客户端开发，与嵌入式团队紧密协作，成功实现蓝牙开门智能功能。',
      },
    ],
  },
]

const filters = ['全部', ...new Set(projects.map((p) => p.category))]

const filteredProjects = computed(() =>
  activeFilter.value === '全部' ? projects : projects.filter((p) => p.category === activeFilter.value)
)
</script>

<template>
  <section id="projects" class="py-20 sm:py-28">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center max-w-2xl mx-auto mb-12 fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">项目经历</span>
        <h2 class="mt-3 font-body font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
          精选项目
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
          深耕电商与智能硬件领域，独立负责客户端与服务端全栈开发。
        </p>
      </div>

      <!-- Filters -->
      <div class="fade-up flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          class="px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
          :class="[
            activeFilter === filter
              ? 'bg-accent text-white shadow-md shadow-accent/20'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          ]"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.title" class="fade-up">
          <ProjectCard :project="project" @select="selectedProject = $event" />
        </div>
      </div>
    </div>
  </section>

  <!-- Detail Modal -->
  <ProjectDetail :project="selectedProject" @close="selectedProject = null" />
</template>

<style scoped>
</style>
