<script setup>
import { ref } from 'vue';

const currentStep = ref('briefing'); // 'briefing', 'stage1', 'success'
const scanning = ref(false);
const scanError = ref('');

const acceptMission = () => {
  currentStep.value = 'stage1';
};

// 第一關：戰備檢查清單（將後續關卡知識埋入）
const equipmentList = ref([
  { id: 1, text: '實體/電子票券 (確認座位與入場唯一憑證)', required: true, checked: false },
  { id: 2, text: '有效身分證件 (實名制核對，沒帶會被擋在門外)', required: true, checked: false },
  { id: 3, text: '備用現金 (現場通訊不穩時，電子支付可能失效)', required: true, checked: false },
  { id: 4, text: '突發狀況備案 (下載場館地圖、記下官方服務處位置)', required: false, checked: false },
  { id: 5, text: '觀演禮儀須知 (確認禁止攜帶物品，避免成為雷隊友)', required: false, checked: false },
]);

const checkEquipment = () => {
  scanning.value = true;
  scanError.value = '';

  const missingRequired = equipmentList.value.filter(item => item.required && !item.checked);
  
  // 模擬掃描動畫 1 秒
  setTimeout(() => {
    scanning.value = false;
    if (missingRequired.length > 0) {
      scanError.value = `掃描失敗：缺少關鍵裝備 [${missingRequired[0].text}]`;
    } else {
      currentStep.value = 'success';
    }
  }, 1000);
};

const nextMission = () => {
  alert('正在載入【任務 02：追星理財術】...');
  // 此處可根據你的 router 設定跳轉：router.push('/budget')
};
</script>

<template>
  <main class="game-start-screen">
    <!-- 背景裝飾：電子網格 -->
    <div class="bg-grid"></div>

    <!-- 階段一：任務簡報 -->
    <div v-if="currentStep === 'briefing'" class="mission-container fade-in">
      <!-- 標題區 -->
      <header class="mission-header">
        <div class="glitch-wrapper">
          <h1 class="glitch-text">《第一次追星就上手》</h1>
        </div>
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
            <button class="action-btn" @click="acceptMission">
              【 接受任務：啟動演唱會之旅 】
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- 階段二：行前計畫清單 (互動掃描儀) -->
    <div v-else-if="currentStep === 'stage1'" class="mission-container checklist-screen fade-in">
      <div class="scanner-ui neon-border">
        <header class="scanner-header">
          <span class="status-dot pulsing"></span>
          <h2>🎒 任務 01：背包戰備掃描</h2>
          <p class="subtitle">請確認已勾選並裝入所有「必要」物品</p>
        </header>

        <div class="checklist-card">
          <div v-for="item in equipmentList" :key="item.id" 
               class="check-item" :class="{ 'checked': item.checked }">
            <div class="checkbox-custom">
              <input type="checkbox" :id="'item-' + item.id" v-model="item.checked">
              <div class="box"></div>
            </div>
            <label :for="'item-' + item.id">
              <span class="item-text">{{ item.text }}</span>
              <span v-if="item.required" class="required-tag">必要</span>
            </label>
          </div>

          <div v-if="scanError" class="error-msg shake">{{ scanError }}</div>

          <div class="button-wrapper">
            <button class="action-btn scan-btn" :disabled="scanning" @click="checkEquipment">
              {{ scanning ? '正在掃描中...' : '【 執行掃描 】' }}
            </button>
            <button class="back-link" @click="currentStep = 'briefing'">返回任務簡報</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 成功畫面 -->
    <div v-else-if="currentStep === 'success'" class="mission-container fade-in">
      <div class="success-panel text-center">
        <div class="success-icon">✔️</div>
        <h2 class="text-gold">裝備檢查合格！</h2>
        <p>很好，你已經具備了入場的基本資格。但在演唱會現場，真正的挑戰才剛要開始...</p>
        <div class="button-wrapper">
          <button class="action-btn next-btn" @click="nextMission">
            【 進入下一個挑戰：理財預算 】
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* 基礎樣式 */
.game-start-screen {
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
}

.mission-container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  width: 95%;
  color: #f0f0f0;
}

/* 標題與動畫 */
.glitch-text {
  font-size: 3rem;
  color: #ffd700;
  font-weight: 900;
  letter-spacing: 2px;
}

.text-gold { color: #ffd700; }

.fade-in { animation: fadeIn 0.5s ease-out forwards; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.mission-container {
  max-width: 900px;
  width: 100%;
  color: #f0f0f0;
  font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
}
/* 剩餘樣式維持一致並優化 */
.mission-header {
  text-align: center;
  margin-bottom: 40px;
}
.subtitle { color: #888; margin-top: 10px; }

.mission-header h1 {
  font-size: 2.8rem;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
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

/* 掃描儀強化視覺 */
.neon-border {
  border: 2px solid #ffd700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.2), inset 0 0 10px rgba(255, 215, 0, 0.1);
}

/* 清單樣式 */
.checklist-card {
  background: #1a1a1a;
  padding: 40px;
  border-radius: 4px;
}

.check-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #333;
  transition: 0.3s;
}

.check-item:hover { background: rgba(255, 215, 0, 0.05); }

.check-item input[type="checkbox"] {
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-right: 15px;
  accent-color: #ffd700;
}

.item-text { font-size: 1.1rem; }

.required-tag {
  background: #ff4500;
  color: white;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 3px;
  margin-left: 10px;
  vertical-align: middle;
}

.back-link {
  background: none; border: none; color: #666; cursor: pointer; margin-top: 20px; text-decoration: underline;
}

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