<script setup>
import {useMusicPlayer} from "@/stores/Player.js";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  artists: {
    type: String,
    required: false
  },
  album: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  }
})

const player = useMusicPlayer();

const playPlayer = () => {
  player.change(props.src);
  player.play();

  player.id = props.id;
  player.name = props.name;
  player.artist = props.artist;
  player.img = props.img;
}
</script>

<template>
  <div @click="playPlayer" class="music"
       :data-active="player.id === props.id ? 'active' : ''">
    <div class="music-img-box">
      <img class="music-img" :src="img" alt=""/>
    </div>
    <span class="music-info">{{ name }} | {{ artists }}</span>
  </div>
</template>

<style scoped>
.music {
  margin-right: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
  border-radius: 10px;
}

.music:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.music[data-active="active"] {
  background-color: rgba(0, 0, 0, 0.3);
}

.music-img-box {
  position: relative;
  width: 48px;
  height: 48px;
}

.music[data-active="active"] .music-img-box:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background-color: #e19900;
  border-radius: 50%;
  animation: play .5s infinite linear;
}

@keyframes play {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}

.music-img {
  width: 100%;
  height: 100%;

  aspect-ratio: 1/1;
  object-fit: cover;

  border-radius: 10px;
}

.music-info {
  font-size: 14px;
  font-style: italic;
}
</style>