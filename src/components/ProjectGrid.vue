<script setup>
  import { ref, computed } from 'vue'
  import ProjectCard from './ProjectCard.vue'
  import ProjectDetail from './ProjectDetail.vue'

  const activeFilter = ref('全部')
  const selectedProject = ref(null)

  const projects = [
    {
      title: '麦芽小达人商城',
      description:
        '独立主导的图书电商平台，历经 6 年持续迭代，完成 Vue2 → Vue3 架构升级，支撑公众号与小程序双端运营及多种营销玩法。',
      tags: ['Vue', 'uni-app', 'Node.js', 'MySQL'],
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-500',
      category: '电商平台',
      company: '深圳市麦芽智能设备有限公司',
      period: '2018.03 - 至今',
      details: [
        {
          heading: '架构演进',
          items: [
            '主导 Vue2 + Webpack → Vue3 + Vite 的渐进式迁移，构建速度提升约 80%，首屏加载优化至秒开',
            '设计公众号（Vue + Framework7）与小程序（uni-app）双端共享业务逻辑层，减少重复代码约 40%',
            '服务端从 JavaScript 全量迁移至 TypeScript，消除运行时类型错误，提升协作效率',
          ],
        },
        {
          heading: '核心技术方案',
          items: [
            '营销引擎：抽象拼团、秒杀、满减等活动为可配置模块，新活动上线周期从一周缩短至 1-2 天',
            '推广系统：Canvas 动态海报生成 + 短链追踪，支撑分销裂变闭环',
            '支付链路：微信支付全流程封装，统一处理签名、回调、对账，稳定运行至今零事故',
          ],
        },
        {
          heading: '个人角色',
          text: '作为客户端与服务端唯一开发负责人，独立完成从需求拆解、技术方案设计到上线部署全流程，持续维护 6 年，保障业务稳定运转。',
        },
      ],
    },
    {
      title: '麦芽海外购',
      description:
        '从零搭建的跨境电商小程序（香港主体），独立打通海关三单对碰、微信支付合规上报及多保税仓物流链路，3 个月内完成上线。',
      tags: ['uni-app', 'Express.js', 'TypeScript'],
      gradient: 'bg-gradient-to-br from-emerald-600 to-teal-500',
      category: '电商平台',
      company: '深圳市麦芽智能设备有限公司',
      period: '2024.10 - 至今',
      details: [
        {
          heading: '技术挑战与方案',
          items: [
            '海关 179 对碰：设计订单-支付-物流三单自动推送机制，对接海关加签验证，确保申报数据一致性',
            '支付合规：封装微信跨境支付链路，实现支付单自动上报与异常重试，满足海关监管要求',
            '多仓调度：抽象统一物流接口适配锦堂芜湖仓、成都保税仓及易通平台，业务切仓无需改动前端',
          ],
        },
        {
          heading: '架构设计',
          items: [
            '基于 uni-app 搭建小程序端，复用麦芽小达人成熟的组件库与业务模块，缩短开发周期约 50%',
            '服务端全量 TypeScript + Express.js，统一错误处理与日志链路，便于跨境业务排查',
            'RESTful API 分层设计，将海关、物流等外部服务隔离为独立适配层，降低耦合',
          ],
        },
        {
          heading: '个人角色',
          text: '独立负责客户端与服务端全栈开发，从跨境业务调研、海关接口文档解读到系统设计与上线，全程一人推进。',
        },
      ],
    },
    {
      title: '麦芽推荐官',
      description:
        '多平台商品聚合分销小程序，设计统一商品适配层对接微信小店等多源数据，支撑推广员实时佣金追踪与裂变传播。',
      tags: ['uni-app', 'TypeScript', '微信小店'],
      gradient: 'bg-gradient-to-br from-violet-600 to-purple-500',
      category: '电商平台',
      company: '深圳市麦芽智能设备有限公司',
      period: '2024.11 - 至今',
      details: [
        {
          heading: '架构亮点',
          items: [
            '统一商品适配层：抽象多平台（麦芽小达人、麦芽大用、海外购）商品数据为标准模型，新平台接入只需编写适配器',
            '微信小店深度对接：打通商品同步、订单回流、佣金结算全链路，实现微信生态内闭环分销',
            '分销追踪体系：基于短链 + 参数透传实现多级推广归因，佣金数据实时可查',
          ],
        },
        {
          heading: '技术实现',
          items: [
            '基于 uni-app 开发，复用成熟组件体系，Canvas 动态合成分享海报，支持自定义模板',
            '服务端 Express.js + TypeScript，定时任务同步多平台订单状态，保证数据最终一致性',
            '数据看板：推广效果、转化率、佣金收入等核心指标可视化，辅助推广员决策',
          ],
        },
        {
          heading: '个人角色',
          text: '独立完成产品技术方案设计与全栈开发，重点攻克多平台数据源异构适配与微信小店接口对接。',
        },
      ],
    },
    {
      title: '好卖好买商城（B端）',
      description:
        '面向代理商的 B 端供应链平台，设计囤货-代发-云仓一体化业务流，支持批量订单处理，持续服务 6 年稳定运行。',
      tags: ['Vue', 'Vite', 'Express.js', 'MySQL'],
      gradient: 'bg-gradient-to-br from-orange-500 to-amber-500',
      category: '电商平台',
      company: '深圳市麦芽智能设备有限公司',
      period: '2018.03 - 至今',
      details: [
        {
          heading: '业务复杂度',
          items: [
            '囤货体系：设计库存预占与释放机制，解决并发囤货场景下的超卖问题',
            '代发链路：打通代理商下单 → 供应商发货 → 物流跟踪的异步流转，状态机驱动订单生命周期',
            '云仓管理：实时库存同步与流转记录，支持多仓调拨，降低代理商运营成本',
            '批量操作：订单批量处理、导出、发货，大数据量场景下采用分页加载与虚拟滚动保证流畅',
          ],
        },
        {
          heading: '技术方案',
          items: [
            '前端 Vue.js + Vite 构建，组件化拆分复杂表单与数据表格，提升 B 端页面可维护性',
            '服务端 Express.js + MySQL，针对高频查询场景优化索引与慢查询，保障系统响应速度',
            '与 C 端（麦芽小达人）共享商品、订单核心数据模型，避免数据孤岛',
          ],
        },
        {
          heading: '个人角色',
          text: '独立负责 B 端全栈开发，重点解决供应链多角色协作的业务建模与复杂状态流转问题。',
        },
      ],
    },
    {
      title: '麦芽云助手',
      description:
        '软硬件协同的智能点读设备配套小程序，攻克微信蓝牙 BLE 配网与大文件稳定传输难题，支撑用户自制点读包创作与分享。',
      tags: ['微信小程序', '蓝牙', 'Node.js'],
      gradient: 'bg-gradient-to-br from-pink-600 to-rose-500',
      category: '智能硬件',
      company: '深圳市麦芽智能设备有限公司',
      period: '2023.01 - 至今',
      details: [
        {
          heading: '技术挑战与方案',
          items: [
            '蓝牙配网：基于微信 BLE API 实现设备扫描、配对、Wi-Fi 信息写入，处理 iOS/Android 蓝牙权限差异与连接超时重试',
            '大文件传输：点读包含音频与图像资源，设计分片传输 + 断点续传机制，通过 FTP 上传至自有服务器，保证弱网下的传输可靠性',
            '点读包合成：前端实现文本、音频、图像的编排与预览，支持模板批量导入，降低用户创作门槛',
          ],
        },
        {
          heading: '架构设计',
          items: [
            '小程序原生开发，封装蓝牙通信模块为 Promise 化 API，上层业务调用简洁统一',
            '设备状态管理：设计本地缓存 + 服务端同步的双层状态模型，离线场景也可查看设备信息',
            '服务端 Node.js + Express.js，提供点读包存储、社区分享、版本管理等接口',
          ],
        },
        {
          heading: '个人角色',
          text: '独立负责小程序与服务端开发，与硬件团队协作定义蓝牙通信协议，推动软硬件联调至量产交付。',
        },
      ],
    },
    {
      title: '景尚订房',
      description:
        '物联网短租平台，通过 WebSocket 实时房态同步 + 蓝牙 BLE 智能门锁对接，实现预订-支付-无钥匙入住全流程闭环。',
      tags: ['微信小程序', '蓝牙', 'WebSocket'],
      gradient: 'bg-gradient-to-br from-zinc-700 to-zinc-500',
      category: '智能硬件',
      company: '深圳市麦芽智能设备有限公司',
      period: '2021.03 - 2021.10',
      details: [
        {
          heading: '技术挑战与方案',
          items: [
            '实时房态：基于 WebSocket 长连接实现房源状态实时推送，解决多平台并发预订的数据一致性问题',
            '蓝牙开锁：与嵌入式团队共同定义 BLE 通信协议，处理设备发现、鉴权、指令下发全流程，兼容多型号门锁',
            '多平台同步：对接宝寓系统 API，设计双向同步机制，确保自有平台与第三方渠道房态统一',
          ],
        },
        {
          heading: '个人角色',
          text: '负责服务端与小程序端开发，7 个月内完成从零到上线。核心价值在于打通软件与硬件的通信链路，与嵌入式团队紧密协作，将蓝牙开锁方案从 demo 推进至稳定可用。',
        },
      ],
    },
  ]

  const filters = ['全部', ...new Set(projects.map((p) => p.category))]

  const filteredProjects = computed(() =>
    activeFilter.value === '全部'
      ? projects
      : projects.filter((p) => p.category === activeFilter.value),
  )
</script>

<template>
  <section id="projects" class="py-20 sm:py-28">
    <div class="max-w-6xl mx-auto section-padding">
      <div class="text-center max-w-2xl mx-auto mb-12 fade-up">
        <span class="text-sm font-bold text-accent uppercase tracking-wider">项目经历</span>
        <h2
          class="mt-3 font-body font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight"
        >
          精选项目
        </h2>
        <p class="mt-4 text-zinc-500 dark:text-zinc-300 leading-relaxed">
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
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700',
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

<style scoped></style>
