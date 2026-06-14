<script setup>
import Home from './components/Home.vue'
</script>

<template>
  <!-- 這裡確保沒有其他舊元件 -->
  <div class="app-wrapper">
    <Home />
  </div>
</template>

<style>
/* 清除預設邊距，確保全螢幕沉浸感 */
body, html {
  margin: 0;
  padding: 0;
  background-color: #0f0f0f;
}
</style>
