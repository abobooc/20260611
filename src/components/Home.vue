<script setup>
import { ref } from 'vue';

const currentStep = ref('briefing'); // 'briefing', 'stage1', 'success'
const scanning = ref(false);
const scanError = ref('');

const acceptMission = () => {
  currentStep.value = 'stage1';
};

// 第一關：行前戰備檢查資料
const equipmentList = ref([
  { id: 1, text: '偶像演唱會門票 (實體或電子)', required: true, checked: false },
  { id: 2, text: '有效身份證件 (驗證身分用)', required: true, checked: false },
  { id: 3, text: '足夠的應急現金 (非電子支付)', required: true, checked: false },
  { id: 4, text: '行動電源 (確保續航力)', required: false, checked: false },
  { id: 5, text: '應援裝備 (手燈或毛巾)', required: false, checked: false },
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
  // 未來在這裡切換路由
};
</script>

<template>
  <main class="game-start-screen">
    <!-- 背景裝飾：電子網格 -->
    <div class="bg-grid"></div>

    <!-- 階段 0：劇情導入 (這就是你要的沉浸式開場！) -->
    <div v-if="currentStep === 'intro'" class="mission-container fade-in">
      <!-- 標題區 -->
      <header class="mission-header">
        <div class="glitch-wrapper">
          <h1 class="glitch-text">《第一次追星就上手：演唱會任務挑戰》</h1>
        </div>
        <div class="mission-tag">演唱會任務挑戰</div>
      </header>

      <!-- 劇情導入：營造緊張感 -->
      <section class="story-section">
        <div class="story-card">
          <p class="announcement">🎉 恭喜！</p>
          <p>經過漫長的搶票戰爭，你終於成功搶到偶像的演唱會門票。</p>
          <p>距離演唱會開始還有 <span class="countdown">24 小時</span>。這是你的第一次線下活動。</p>
          <p>然而…… 你打開社群平台，看到大家正在討論：</p>

          <div class="social-feed">
            <div class="feed-header">📱 熱門討論</div>
            <div class="comment-bubble">💬 「證件一定要記得帶！」</div>
            <div class="comment-bubble">💬 「還好我有留備用金，不然差點回不了家。」</div>
            <div class="comment-bubble">💬 「不要亂轉傳未經證實的消息！」</div>
            <div class="comment-bubble">💬 「演唱會現場真的很多突發狀況。」</div>
          </div>
          
          <p class="nervous-hint">看到這些留言後，你突然有點緊張... 你真的準備好了嗎？</p>

          <div class="button-wrapper">
            <button class="action-btn" @click="currentStep = 'briefing'">
              【 開始我的演唱會任務 】
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- 階段一：任務簡報 (點擊按鈕後才出現，不再像 PPT 大綱) -->
    <div v-else-if="currentStep === 'briefing'" class="mission-container fade-in">
      <header class="mission-header">
        <div class="glitch-wrapper">
          <h1 class="glitch-text">任務目標</h1>
        </div>
        <div class="mission-tag">MISSION BRIEFING</div>
      </header>

      <section class="mission-briefing">
        <div class="briefing-panel">
          <h2 class="panel-title">📋 主線任務：參加人生第一場演唱會</h2>
          
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
            <button class="action-btn" @click="currentStep = 'stage1'">
              【 接受任務：整理行前裝備 】
            </button>
            <button class="back-link" @click="currentStep = 'intro'">返回劇情</button>
          </div>
        </div>
      </section>
    </div>

    <!-- 階段二：行前計畫清單 (互動掃描儀) -->
    <div v-else-if="currentStep === 'stage1'" class="mission-container checklist-screen fade-in">
      <div class="scanner-ui">
        <header class="scanner-header">
          <span class="status-dot pulsing"></span>
          <h2>背包戰備掃描儀 v1.0</h2>
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
              <span v-if="item.required" class="required-tag">ESSENTIAL</span>
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
        <p>你已獲得「追星生存新手包」，這將增加你 50% 的生存機率。</p>
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

/* 清單樣式 */
.checklist-card {
  background: #1a1a1a;
  border: 2px solid #ffd700;
  padding: 40px;
  border-radius: 4px;
  box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.1);
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