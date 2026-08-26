/**
 * ==========================================================================
 * AI 美術 Agent 週報 - 獨立資料庫 (AI Art Weekly Report Database)
 * ==========================================================================
 */

const WEEKLY_ISSUES = [
  {
    issueNumber: 1,
    weekCode: "2026-W35",
    date: "2026.08.26",
    title: "AI 美術 Agent 週報 Issue #01 · 自動化工具與研發應用落地",
    summary: "本週聚焦於文字生成工具、GIT 共享庫建立以及研四 PIXI 編輯器應用三大重點項目，透過 Agent 自動化與工具鏈整合大幅提升開發效率。",
    projects: [
      {
        id: "p1",
        rank: "01",
        name: "文字生成工具",
        developer: "Codex (AI Agent)",
        category: "2D UI / 視覺藝術",
        categoryClass: "cat-ui",
        status: "已落地",
        statusClass: "badge-success",
        progress: 90,
        icon: "✍️",
        mediaType: "video",
        mediaSrc: "../ai-agent-report/藝術字工具.mp4",
        
        reason: "專案營運活動與 UI 介面需要大量風格化的特殊藝術文字與高質感排版，人工手繪微調字體筆劃耗時，需透過 Agent 工具自動轉化為高解像度可編輯質感圖層。",
        currentStatus: "已成功整合 typography-style-transfer 與 Agent 提示詞樣板，支援輸入文字後自動產出具備 3D 立體、金屬漸層與邊框特效之 PNG/PSD 視覺檔。",
        bottleneck: "繁體中文罕見字或極繁複筆劃易在圖層合成時產生微小瑕疵，且極高解像度下抗鋸齒處理仍需微調。",
        futureGoals: [
          "擴充更多字體視覺風格樣板（賽博朋克、水墨、金屬質感）",
          "實現字體圖集 (Atlas) 自動裁切與一鍵導出"
        ]
      },
      {
        id: "p2",
        rank: "02",
        name: "GIT共享庫建立",
        developer: "Antigravity (AI Agent)",
        category: "Workflow / 自動化",
        categoryClass: "cat-3d",
        status: "進行中",
        statusClass: "badge-wip",
        progress: 85,
        icon: "🌿",
        mediaType: "video",
        mediaSrc: "../ai-agent-report/軟體疑難與 BUG 排除輔助.mp4",
        
        reason: "各美術小組與 Agent Skill / Tool 腳本散落在不同資料夾與個人電腦中，缺乏統一的版本管理與團隊共享機制，重複開發與版本衝突時有發生。",
        currentStatus: "建立中央 Git 共享庫與流水線規範，集中管理 SOP 說明文件、Agent Skills 模組、自動化腳本與外包檢核規範，支援多團隊一鍵同步與版本控管。",
        bottleneck: "跨部門美術人員在 Git 操作習慣上有適應學習曲線；巨大媒體檔（如 3D 原檔、4K 貼圖）之 LFS 管理仍需優化傳輸速度。",
        futureGoals: [
          "整合 Git 鉤子 (Hooks) 實現上傳自動檢視語法與模組結構",
          "建立 Agent 自動同步更新通知機制"
        ]
      },
      {
        id: "p3",
        rank: "03",
        name: "研四PIXI編輯器應用",
        developer: "Claude (AI Agent)",
        category: "Web2D / 編輯器",
        categoryClass: "cat-spine",
        status: "進行中",
        statusClass: "badge-wip",
        progress: 75,
        icon: "🎮",
        mediaType: "video",
        mediaSrc: "../ai-agent-report/spineAB比對工具.mp4",
        
        reason: "研發四部在 2D 網頁視覺特效與動態元件開發時，需要即時預覽與參數調整工具，傳統調參需反覆修改程式碼並編譯，極度影響開發迭代效率。",
        currentStatus: "Agent 協助開發基於 PixiJS 的視覺編輯器，支援即時拖拽、參數調校、動態粒子預覽與動畫片段串接，並可直接導出標準 Web 格式與 JSON 設定檔。",
        bottleneck: "複雜多層次動畫在低階裝置上的 WebGL 效能瓶頸；高密度粒子系統在動態縮放時的幀率波動問題。",
        futureGoals: [
          "支援更多動態插值曲線與 Spine 動畫直接匯入",
          "開發一鍵自動優化 Atlas 貼圖集功能"
        ]
      }
    ]
  }
];
