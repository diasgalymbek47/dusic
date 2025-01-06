<script setup>
import {useMusicPlayer} from "@/stores/Player.js";

const player = useMusicPlayer();
</script>

<template>
  <div class="container">
    <div class="head">Список для удаления</div>
    <div v-if="player.collection.length > 0" class="music_list d-flex flex-column">
      <div class="music d-flex align-items-center" v-for="music in player.collection"
           :key="music.id">
        <img :width="48" :height="48" :src="music.img" alt="">
        <div class="music_info d-flex align-items-center">
          <span>{{ music.name }}</span>
          <span>/</span>
          <span>{{ music.artist }}</span>
          <span class="material-symbols-outlined">
            backspace
          </span>
        </div>
      </div>
    </div>
    <div v-else class="loaded mt-5">Музыки загружается...</div>
  </div>
</template>

<style scoped>
.head {
  padding: 10px 20px;
  width: max-content;
  border-radius: 10px;
  font-weight: 600;
  background: #682b2b;
  color: white;
}

.music_list {
  padding: 20px 0 50px 0;
  gap: 20px;
}

.music {
  padding: 10px;
  gap: 20px;
  cursor: pointer;
  border-radius: 10px;

  span {
    color: white;
  }

  &:hover {
    background-color: #676767;
  }
}

.music_info {
  gap: 20px;
}

.loaded {
  font-weight: 600;
  font-size: 24px;
  color: white;
}
</style>