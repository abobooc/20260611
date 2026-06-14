<script setup>
const startMission = () => {
  alert('【系統提示】任務正式啟動！正在掃描行前裝備狀態...');
  // 這裡之後可以連接到路由切換
}
</script>

<template>
  <main class="game-start-screen">
    <div class="mission-container">
      <!-- 標題區 -->
      <header class="mission-header">
        <h1>🎫《第一次追星就上手：演唱會任務挑戰》</h1>
        <div class="mission-tag">演唱會任務挑戰</div>
      </header>

      <!-- 劇情導入：營造緊張感 -->
      <section class="story-section">
        <div class="story-card">
          <p class="announcement">🎉 恭喜！經過漫長的搶票戰爭，你成功搶到了偶像的門票！</p>
          <p>距離演唱會開始還有 <span class="countdown">24 小時</span>。</p>
          <p>這是你人生的第一次線下活動，你既興奮又不安...</p>
          <p>你打開社群平台，看到大家正在熱烈討論：</p>

          <div class="social-feed">
            <div class="feed-header">📱 熱門討論</div>
            <div class="comment-bubble">💬 「大家證件一定要帶，上次有人沒帶被擋在門外...」</div>
            <div class="comment-bubble">💬 「記得留備用金，現場週邊太好買了，差點沒錢坐車回家。」</div>
            <div class="comment-bubble">💬 「網路上那些非官方消息別亂傳，很容易被騙！」</div>
          </div>
          
          <p class="nervous-hint">看到這些留言，你突然手心冒汗... 你真的準備好了嗎？</p>
        </div>
      </section>

      <!-- 任務簡報面板 (RPG風格) -->
      <section class="mission-briefing">
        <div class="briefing-panel">
          <h2 class="panel-title">📋 任務簡報 (Mission Briefing)</h2>
          
          <div class="grid-layout">
            <!-- 已知情報：對應原本的第一關內容 -->
            <div class="info-box intel">
              <h3>📌 已知情報</h3>
              <ul>
                <li>入場強制要求票券與身份證明文件</li>
                <li>演唱會現場環境複雜，常有突發狀況</li>
                <li>追星預算不足可能導致任務失敗</li>
                <li>網路上的社群消息不一定都是真的</li>
              </ul>
            </div>

            <!-- 成功條件：隱含教學目標 -->
            <div class="info-box objective">
              <h3>✅ 任務成功條件</h3>
              <div class="checkbox-group">
                <label><input type="checkbox" disabled> 順利進入場館</label>
                <label><input type="checkbox" disabled> 財務預算平衡</label>
                <label><input type="checkbox" disabled> 維護粉絲聲譽</label>
                <label><input type="checkbox" disabled> 識破網路謠言</label>
              </div>
            </div>

            <!-- 危險警告：對應可能出事的情境 -->
            <div class="info-box threat">
              <h3>⚠️ 威脅評估</h3>
              <ul>
                <li>遺漏關鍵物品導致無法入場</li>
                <li>情緒激動下的衝動消費行為</li>
                <li>輕信未經查證的社群假資訊</li>
                <li>不當行為影響其他觀眾權益</li>
              </ul>
            </div>
          </div>

          <!-- 任務啟動按鈕 -->
          <div class="button-wrapper">
            <button class="action-btn" @click="startMission">
              【 接受任務：啟動演唱會之旅 】
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.game-start-screen {
  background-color: #0f0f0f;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  padding: 20px;
}

.mission-container {
  max-width: 900px;
  width: 100%;
  color: #f0f0f0;
}

.mission-header {
  text-align: center;
  margin-bottom: 40px;
}

.mission-header h1 {
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  margin-bottom: 10px;
}

.mission-tag {
  background: #ffd700;
  color: #000;
  display: inline-block;
  padding: 5px 20px;
  font-weight: bold;
  letter-spacing: 3px;
  transform: skewX(-15deg);
}

.story-card {
  background: rgba(42, 42, 42, 0.8);
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 4px solid #ffd700;
}

.countdown { color: #ff4500; font-weight: bold; font-size: 1.2rem; }

.social-feed {
  margin: 20px 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.feed-header { color: #888; font-size: 0.9rem; margin-bottom: 10px; }

.comment-bubble {
  background: #333;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 15px;
  font-style: italic;
  color: #bbb;
}

.briefing-panel {
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 30px;
  position: relative;
}

.panel-title { color: #ffd700; margin-top: 0; }

.grid-layout { 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.info-box { background: #252525; padding: 15px; border-radius: 4px; }
.info-box h3 { font-size: 1rem; color: #ffd700; border-bottom: 1px solid #444; padding-bottom: 10px; }
.info-box ul { padding-left: 20px; font-size: 0.9rem; color: #ccc; }
.checkbox-group { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; font-size: 0.9rem; }

.button-wrapper { text-align: center; margin-top: 40px; }

.action-btn {
  background: linear-gradient(45deg, #ffd700, #ff8c00);
  color: #000;
  border: none;
  padding: 15px 40px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  transition: 0.3s;
  display: block;
  width: 100%;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.5);
}
</style>