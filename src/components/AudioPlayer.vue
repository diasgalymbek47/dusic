<script setup>
import {useMusicPlayer} from "@/stores/Player.js";
import {useStatesElement} from "@/stores/StatesElement.js";
import {ref} from "vue";
import MusicV2 from "@/components/MusicV2.vue";

const player = useMusicPlayer();
const statesElement = useStatesElement();
const volumeBar = ref(0.25);

const close = () => statesElement.audioPlayer = false;

function toggleAndSetVolume() {
  player.toggleVolume();
  setVolumeBar();
}

function setVolumeBar() {
  volumeBar.value = player.audio["volume"];
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function getCompletionPercentage(progress, value) {
  if (value === 0) return 0;
  return (progress / value) * 100;
}

function setProgress(event) {
  const progressContainer = event.currentTarget;
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = (offsetX / rect.width) * 100;
  player.audio.currentTime = player.audio["duration"] * (percentage / 100);
}

function setVolume(event) {
  const progressContainer = event.currentTarget;
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = (offsetX / rect.width) * 100;
  player.audio.volume = (percentage / 100) / 4;
  setVolumeBar();
}
</script>

<template>
  <div class="audio-player" :class="{active: statesElement.audioPlayer}">
    <div class="audio-player-content">
      <span @click="close" class="audio-player-close material-symbols-outlined">
        close
      </span>

      <div class="audio-player-list">
        <h2 class="audio-player-list-head">Список музыки</h2>
        <div v-if="player.collection.length > 0" class="audio-player-list-body">
          <MusicV2 v-for="(music, index) in player.collection" :key="index"
                   :id="music.id" :name="music.name"
                   :artist="music.artist" :img="music.img" :src="music.src"/>
        </div>
        <div v-else>Пусто</div>
      </div>
      <div class="audio-player-ui-box" :class="{unused: player.audio.src === ''}">
        <div class="audio-player-icon-box">
          <img class="audio-player-icon" :src="player.img" alt=""/>
        </div>
        <div class="audio-player-ui">
          <div class="audio-player-ui-elements">
            <div class="audio-player-navigation">
              <span @click="player.prev" class="material-symbols-outlined">
                skip_previous
              </span>
              <span @click="player.togglePlay"
                    class="material-symbols-outlined">
              {{ player.audio.paused ? "play_arrow" : "pause" }}
              </span>
              <span @click="player.next" class="material-symbols-outlined">
                skip_next
              </span>
            </div>
            <div class="audio-player-options">
              <span @click="player.toggleAutoPlay" class="material-symbols-outlined"
                    :class="{active: player.autoplay}" title="Автоматическая воспроизведения">
                autoplay
              </span>
              <span @click="player.toggleReplay" class="material-symbols-outlined"
                    :class="{active: player.replay}" title="Повтор">
                replay
              </span>
              <span @click=" player.toggleShuffle" class="material-symbols-outlined"
                    :class="{active: player.shuffle}" title="Перемещать">
                shuffle
              </span>
              <span @click="toggleAndSetVolume"
                    class="audio-player-volume material-symbols-outlined"
                    :class="{active: player.mute}" title="Заглушить">
                {{ volumeBar === 0 ? "volume_off" : "volume_up" }}
              </span>
              <span @click="setVolume" class="audio-player-volume-bar"
                    :class="{mute: player.mute}">
                <span
                    :style="{width: getCompletionPercentage(volumeBar * 4, 1) + '%'}"
                    class="audio-player-volume-value">
                </span>
              </span>
            </div>
          </div>
          <div class="audio-player-info mt-3">
            {{ player.name ? player.name : "Неизвестно" }} |
            {{ player.artist ? player.artist : "Неизвестно" }}
            <span class="audio-player-start">{{ formatTime(player.progressTime) }}</span>
            <div @click="setProgress" class="audio-player-progressbar">
              <div
                  :style="{width: getCompletionPercentage(player.progressTime, player.audio.duration) + '%'}"
                  class="audio-player-progressbar-value">
              </div>
            </div>
            <span class="audio-player-end">
            {{
                player.audio.duration ? formatTime(player.audio.duration) : "00:00"
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.audio-player {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: -1;
  opacity: 0;
  pointer-events: none;
}

.audio-player.active {
  z-index: 4;
  opacity: 1;
  pointer-events: auto;
}

.audio-player.active .audio-player-content {
  opacity: 1;
}

.audio-player-content {
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70%;
  height: 70%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  color: #fff;

  opacity: 0;
  transition: all .5s ease-in-out;

  background-color: #292323;
  border-radius: 15px;
}

.audio-player-close {
  position: absolute;
  top: 20px;
  right: 50px;

  cursor: pointer;
}

.audio-player-list {
  flex-grow: 1;
  overflow-y: auto;
}

.audio-player-ui-box {
  display: flex;
  align-items: center;
  gap: 20px;
}

.audio-player-ui-box.unused {
  pointer-events: none;
  opacity: 0.2;
}

.audio-player-icon-box {
  width: 100px;
  height: 100%;
}

.audio-player-icon {
  display: block;
  width: 100%;
  height: 100%;

  aspect-ratio: 1/1;
  object-fit: cover;

  background-color: #333;
  border-radius: 10px;
}

.audio-player-ui {
  flex-grow: 1;
}

.audio-player-info {
  display: flex;
  align-items: center;
  font-style: italic;
  gap: 10px;
}

.audio-player-info span {
  width: 40px;
  font-size: 14px;
  font-style: normal;
  text-align: center;
}

.audio-player-ui-elements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.audio-player-progressbar {
  position: relative;
  flex-grow: 1;
  height: 4px;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  z-index: 1;
}

.audio-player-progressbar-value {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: 0;

  background-color: #6e5c5c;
  z-index: -1;
}

.audio-player-navigation, .audio-player-options {
  display: flex;
  align-items: center;
  gap: 15px;
}

.audio-player-navigation span {
  font-size: 40px;
  cursor: pointer;

  padding: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  user-select: none;
}

.audio-player-options span {
  font-size: 30px;
  cursor: pointer;

  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  user-select: none;
}

.audio-player-options span.active {
  background-color: rgba(255, 255, 255, 1);
  color: #707070;
}

.audio-player-volume-bar {
  position: relative;
  padding: 0 !important;
  width: 80px;
  height: 5px;
  border-radius: 3px;
  background-color: #ffffff !important;
}

.audio-player-volume-bar.mute {
  pointer-events: none;
  opacity: 0.2;
}

.audio-player-volume-value {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 !important;
  background-color: #6e5c5c !important;

  max-width: 100%;
  width: 0;
}

.audio-player-list-head {
  padding: 5px 50px;
  width: max-content;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 10px;
}

.audio-player-list-body {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>