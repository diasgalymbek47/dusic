<script setup>
import {useMusicPlayer} from "@/stores/Player.js";
import {ref} from "vue";

const player = useMusicPlayer()
const playerState = ref(false)

player.audio.addEventListener("play", () => playerState.value = true)
player.audio.addEventListener("pause", () => playerState.value = false)

</script>

<template>
  <div class="wave-container" :class="{active: playerState}">
    <div class="wave-bar"></div>
    <div class="wave-bar"></div>
    <div class="wave-bar"></div>
  </div>
</template>

<style scoped>
/* Контейнер для полосок */
.wave-container {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Снизу */
  gap: 4px; /* Интервал между полосками */
  height: 20px;
}

/* Полоски для волны */
.wave-bar {
  width: 6px; /* Ширина полоски */
  height: 10px; /* Начальная высота полоски */
  background-color: white; /* Цвет полоски */
  border-radius: 2px; /* Скругленные углы */
}

.wave-container.active .wave-bar {
  background-color: orange; /* Цвет полоски */
  animation: wave 0.5s infinite alternate;
}

.wave-container.active .wave-bar:nth-child(1) {
  animation-delay: 0s;
}

.wave-container.active .wave-bar:nth-child(2) {
  animation-delay: 0.1s;
}

.wave-container.active .wave-bar:nth-child(3) {
  animation-delay: 0.2s;
}

/* Анимация для создания эффекта волн */
@keyframes wave {
  0% {
    height: 10px;
  }
  50% {
    height: 20px; /* Полоски становятся выше в середине анимации */
  }
  100% {
    height: 10px;
  }
}
</style>