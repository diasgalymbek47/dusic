<script setup>
import {useMusicPlayer} from "@/stores/Player.js";

const player = useMusicPlayer()
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество музыки
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество артистов
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество жанров
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество альбомов
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество добавленных музыки
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
      <div class="col-xl-4 p-3">
        <div class="box">
          <div class="box-header">
            Общая количество удаленных музыки
          </div>
          <div class="box-body">
            {{ player.collection.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background: #eee;
  border-radius: 10px;
  text-align: center;

  height: 100%;

  display: flex;
  flex-direction: column;
}

.box-header {
  padding: 20px 10px;
  font-weight: 600;
  font-size: 20px;
  color: #111;

  min-height: 80px;

  background-color: #e8e8e8;
  border-radius: 10px 10px 0 0;
}

.box-body {
  padding: 20px;
  flex-grow: 1;

  font-weight: 700;
  font-size: 30px;
  color: #ff8900;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 200px;

  background-color: #60696c;
  border-radius: 0 0 10px 10px;
}
</style>