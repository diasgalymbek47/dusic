<script setup>
import Music from "@/components/Music.vue";
import {useMusicPlayer} from "@/stores/Player.js";

const player = useMusicPlayer();
</script>

<template>
  <div class="home-view">
    <div v-if="player.collection" class="home-view-content">
      <div class="home-view-content-header container">
        <p>😺😺😺 Добавь, Получи, Измени, Удали 😺😺😺</p>
      </div>
      <div class="home-view-content-body container">
        <div class="row">
          <Music class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-4"
                 v-for="(music, index) in player.collection" :id="music.id"
                 :name="music.name"
                 :artists="music.artists" :img="music.srcPicture" :src="music.srcMusic" :key="index"/>
        </div>
      </div>
    </div>
    <div v-else class="home-view-loader">
      Loaded...
    </div>
  </div>
</template>

<style scoped>
.home-view-content-body {
  padding: 50px;
}

.home-view-content-header {
  padding: 10px;

  p {
    padding: 30px;
    text-wrap: nowrap;
    background: linear-gradient(to right, #ab9bcc, #ffda70);
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #221f1f;
    border-radius: 10px;
  }
}
</style>