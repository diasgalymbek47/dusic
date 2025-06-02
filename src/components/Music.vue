<script setup>
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
import {useMusicPlayer} from "@/stores/Player.js";

console.log(props.id, props.name, props.artists)

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
  <div class="music">
    <div @click="playPlayer" class="music-icon-box material-symbols-outlined">
      <img class="music-icon" :src="img" alt="icon"/>
    </div>
    <h2 class="music-name">{{ name }}</h2>
    <h3 class="music-artist">{{ artists }}</h3>
  </div>
</template>

<style scoped>
  .music {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .music-icon-box {
    position: relative;
  }

  .music-icon-box:hover:after {
    opacity: 1;
  }

  .music-icon-box:after {
    content: "play_arrow";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;

    font-size: 50px;
    color: #fff;

    background-color: rgba(74, 74, 74, 0.5);
    border-radius: 10px;

    cursor: pointer;
  }

  .music-icon {
    display: block;
    width: 100%;
    height: auto;

    aspect-ratio: 1/1;
    border-radius: 10px;
    object-fit: cover;
  }

  .music-name {
    font-weight: 500;
    margin-top: 10px;
    font-size: 16px;
    color: #fff;
  }

  .music-artist {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
  }
</style>