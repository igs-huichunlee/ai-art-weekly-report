/**
 * AI 美術 Agent 週報 - 獨立前端邏輯 (App Logic)
 */

document.addEventListener('DOMContentLoaded', () => {
  initSelector();
  renderIssue(0); // 預設載入最新週報 (index 0)
});

// 初始化週次切換選單
function initSelector() {
  const select = document.getElementById('issueSelect');
  if (!select || !WEEKLY_ISSUES) return;

  select.innerHTML = '';
  WEEKLY_ISSUES.forEach((item, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `Issue #${item.issueNumber.toString().padStart(2, '0')} (${item.weekCode})`;
    select.appendChild(opt);
  });

  select.addEventListener('change', (e) => {
    renderIssue(parseInt(e.target.value, 10));
  });
}

// 渲染特定週次的報告內容
function renderIssue(index) {
  const issue = WEEKLY_ISSUES[index];
  if (!issue) return;

  // 1. 渲染 Header 元數據
  if (document.getElementById('issueDate')) document.getElementById('issueDate').textContent = issue.date;
  if (document.getElementById('issueTitle')) document.getElementById('issueTitle').textContent = issue.title;
  if (document.getElementById('issueSummary')) document.getElementById('issueSummary').textContent = issue.summary;

  // 2. 渲染前 3 個重點項目
  const listContainer = document.getElementById('projectsList');
  if (!listContainer) return;

  listContainer.innerHTML = '';

  issue.projects.forEach((p) => {
    const goalsListHtml = Array.isArray(p.futureGoals)
      ? p.futureGoals.map(g => `<li>${g}</li>`).join('')
      : `<li>${p.futureGoals}</li>`;

    const devHtml = p.developer ? `<span class="badge badge-dev">👤 開發者：${p.developer}</span>` : '';

    // 影片 / 媒體展示 HTML
    let mediaHtml = '';
    if (p.mediaSrc) {
      if (p.mediaType === 'video') {
        mediaHtml = `
          <div class="media-box-wrapper">
            <div class="media-header-label">🎬 成果成果動態與操作展示 (Demo Video)</div>
            <div class="media-box">
              <video controls loop muted playsinline preload="metadata">
                <source src="${p.mediaSrc}" type="video/mp4">
                您的瀏覽器不支援影片播放。
              </video>
            </div>
          </div>
        `;
      } else if (p.mediaType === 'image') {
        mediaHtml = `
          <div class="media-box-wrapper">
            <div class="media-header-label">🖼️ 成果成果預覽 (Preview Image)</div>
            <div class="media-box">
              <img src="${p.mediaSrc}" alt="${p.name}" style="width:100%; display:block;">
            </div>
          </div>
        `;
      }
    }

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <!-- Card Top Header -->
      <div class="card-top">
        <div class="card-title-group">
          <div class="rank-badge">${p.rank}</div>
          <div>
            <div class="project-title">${p.icon || '🚀'} ${p.name}</div>
            <div class="project-badges">
              ${devHtml}
              <span class="badge ${p.categoryClass || 'cat-3d'}">${p.category}</span>
            </div>
          </div>
        </div>

        <div class="progress-group">
          <div class="progress-track">
            <div class="progress-fill" style="width: ${p.progress}%;"></div>
          </div>
          <span class="progress-num">${p.progress}%</span>
        </div>
      </div>

      <!-- 4 大核心要求維度 -->
      <div class="dimensions-grid">
        <!-- 1. 開發原因 -->
        <div class="dim-box dim-reason">
          <div class="dim-title">💡 開發原因 (Motivation)</div>
          <div class="dim-content">${p.reason}</div>
        </div>

        <!-- 2. 目前狀態 -->
        <div class="dim-box dim-status">
          <div class="dim-title">🚀 目前狀態 (Current Status)</div>
          <div class="dim-content">${p.currentStatus}</div>
        </div>

        <!-- 3. 瓶頸挑戰 -->
        <div class="dim-box dim-bottleneck">
          <div class="dim-title">⚠️ 瓶頸</div>
          <div class="dim-content">${p.bottleneck}</div>
        </div>

        <!-- 4. 未來目標 -->
        <div class="dim-box dim-goals">
          <div class="dim-title">🎯 未來目標 (Future Goals)</div>
          <div class="dim-content">
            <ul class="goals-ul">
              ${goalsListHtml}
            </ul>
          </div>
        </div>
      </div>

      <!-- 影片預覽展示卡片 -->
      ${mediaHtml}
    `;

    listContainer.appendChild(card);
  });
}
