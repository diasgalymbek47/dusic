<script setup>
import Navbar from "@/components/Navbar.vue";
import {ref} from "vue";
import MenuButton from "@/components/MenuButton.vue";
import LogoText from "@/components/LogoText.vue";
import {useStatesElement} from "@/stores/StatesElement.js";
import {useMusicPlayer} from "@/stores/Player.js";
import Wave from "@/components/Wave.vue";

const navState = ref(false);
const stateElement = useStatesElement();
const player = useMusicPlayer()

const setTrueNavState = () => navState.value = true;
const setFalseNavState = () => navState.value = false;

const setTrueAudioPlayerState = () => stateElement.audioPlayer = true;

</script>

<template>
  <Navbar :state="navState" :func-state="setFalseNavState"/>
  <header class="header">
    <div class="wrap">
      <MenuButton @click="setTrueNavState" class="header-nav-open-btn"/>
      <LogoText class="header-title"/>
      <div class="header-search">
        <input class="header-search-field" type="search" placeholder="Поиск..."/>
        <div class="header-search-btn-box" title="Поиск">
          <span class="header-search-btn material-symbols-outlined">
            search
          </span>
        </div>
      </div>
      <div @click="player.updateCollection(true)" class="header-download-btn" title="Обновить список">
        <span class="material-symbols-outlined">
          download
        </span>
      </div>
      <div @click="setTrueAudioPlayerState" class="header-music-player-open" title="Плеер">
        <Wave/>
      </div>
      <div class="header-user-box">
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <h3 class="header-user-box-text">Username</h3>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;

  background-color: #221f1f;
  z-index: 2;
}

.wrap {
  padding: 10px 25px;

  display: flex;
  align-items: center;
  gap: 30px;
}

.header-search {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.header-search-field {
  flex-grow: 1;
  max-width: 500px;
  padding: 7px;
}

.header-search-btn-box {
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.header-search-btn-box:hover {
  background-color: #333;
}

.header-search-btn {
  font-size: 18px;

  color: #fff;
}

.header-music-player-open, .header-download-btn {
  color: #fff;

  cursor: pointer;
}

.header-download-btn {
  transform: translateY(3px);
}

.header-user-box {
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  border-radius: 4px;

  cursor: pointer;
}

.header-user-box-text {
  font-size: 16px;
  font-weight: 600;
}
</style>