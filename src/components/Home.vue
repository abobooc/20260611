<script setup>
const startMission = () => {
  alert('任務啟動！進入裝備檢核階段...');
  // 這裡之後可以連接到路由切換
}
</script>

<template>
  <div class="mission-container">
    <!-- 標題區 -->
    <header class="mission-header">
      <h1>🎫《第一次追星就上手》</h1>
      <div class="subtitle">演唱會任務挑戰</div>
    </header>

    <!-- 劇情導入 -->
    <section class="story-section">
      <div class="story-card">
        <p class="announcement">🎉 恭喜！經過漫長的搶票戰爭，你成功搶到了門票！</p>
        <p>距離演唱會開始還有 <span class="highlight">24 小時</span>，這是你的第一次線下活動。</p>
        <div class="social-feed">
          <div class="comment-bubble">💬 「證件一定要記得帶！」</div>
          <div class="comment-bubble">💬 「還好我有留備用金，不然差點回不了家。」</div>
          <div class="comment-bubble">💬 「不要亂轉傳未經證實的消息！」</div>
        </div>
        <p class="nervous-text">看到這些留言，你突然感到一陣緊張... 你真的準備好了嗎？</p>
      </div>
    </section>

    <!-- 任務簡報面板 -->
    <section class="mission-briefing">
      <div class="briefing-panel">
        <h2>📋 任務簡報 (Mission Briefing)</h2>
        
        <div class="grid-layout">
          <!-- 主線任務 -->
          <div class="info-box">
            <h3>📌 已知情報</h3>
            <ul>
              <li>入場需要票券與身份證明文件</li>
              <li>現場可能遇到突發狀況</li>
              <li>預算不足可能導致任務失敗</li>
              <li>網路上的消息不一定都是真的</li>
            </ul>
          </div>

          <!-- 成功條件 -->
          <div class="info-box success">
            <h3>✅ 任務成功條件</h3>
            <label><input type="checkbox" disabled checked> 成功順利入場</label>
            <label><input type="checkbox" disabled checked> 預算不超支</label>
            <label><input type="checkbox" disabled checked> 遵守活動規範</label>
            <label><input type="checkbox" disabled checked> 完成所有挑戰</label>
          </div>

          <!-- 危險警告 -->
          <div class="info-box warning">
            <h3>⚠️ 危險警告</h3>
            <ul>
              <li>忘記攜帶重要物品</li>
              <li>衝動消費導致透支</li>
              <li>相信未查證的假資訊</li>
              <li>影響其他觀眾的權益</li>
            </ul>
          </div>
        </div>

        <!-- 行動按鈕 -->
        <button class="start-btn" @click="startMission">
          【開始我的演唱會任務】
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mission-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Courier New', Courier, monospace; /* 增加一點指令感 */
  color: #e0e0e0;
  background-color: #1a1a1a;
  min-height: 100vh;
}

.mission-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #ffd700;
  padding-bottom: 20px;
}

.subtitle {
  font-size: 1.5rem;
  color: #ffd700;
  letter-spacing: 5px;
}

.story-card {
  background: #2a2a2a;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 5px solid #ffd700;
}

.highlight { color: #ff4500; font-weight: bold; }
.social-feed { margin: 20px 0; }
.comment-bubble {
  background: #3d3d3d;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 15px;
  font-style: italic;
}

.briefing-panel {
  background: #222;
  border: 1px solid #444;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.info-box { background: #333; padding: 15px; border-radius: 4px; }
.info-box.success { border: 1px solid #28a745; }
.info-box.warning { border: 1px solid #dc3545; }
.info-box h3 { font-size: 1rem; margin-top: 0; color: #ffd700; }

.start-btn {
  display: block;
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  background: #ffd700;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}
.start-btn:hover { transform: scale(1.02); background: #fff; }
</style>