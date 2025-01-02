<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";
import {useMusicPlayer} from "@/stores/Player.js";
import {onMounted} from "vue";

const player = useMusicPlayer();

onMounted(() => {
  player.updateCollection()
  player.init()
})
</script>

<template>
  <Header/>
  <AudioPlayer/>
  <main class="main">
    <RouterView/>
  </main>
</template>

<style scoped>
.main {
  padding-top: 100px;
}
</style>