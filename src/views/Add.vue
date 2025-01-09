<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  music_name: '',
  artist_name: '',
  album_name: '',
  genre_name: '',
  image_file: null,
  music_file: null,
});

function handleFileChange(event, type) {
  if (type === 'image') {
    formData.value.image_file = event.target.files[0];
  } else if (type === 'music') {
    formData.value.music_file = event.target.files[0];
  }
}

function handleSubmit() {
  const data = new FormData();
  data.append('music_name', formData.value.music_name);
  data.append('artist_name', formData.value.artist_name);
  data.append('album_name', formData.value.album_name);
  data.append('genre_name', formData.value.genre_name);
  data.append('image_file', formData.value.image_file);
  data.append('music_file', formData.value.music_file);

  axios.post('https://dusic.vercel.app/api/Music/AddMusic', data)
      .then(response => {
        console.log('Music added:', response.data);
      })
      .catch(error => {
        console.error('Error adding music:', error);
      });
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="form-group d-flex flex-column">
        <label for="music_name">Название музыки</label>
        <input v-model="formData.music_name" id="music_name" type="text" autocomplete="off">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="artist_name">Название артиста</label>
        <input v-model="formData.artist_name" id="artist_name" type="text" autocomplete="off">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="album_name">Название альбома</label>
        <input v-model="formData.album_name" id="album_name" type="text" autocomplete="off">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="genre_name">Название жанра</label>
        <input v-model="formData.genre_name" id="genre_name" type="text" autocomplete="off">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="image_file">Выберите картинку</label>
        <input @change="handleFileChange($event, 'image')" type="file">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="music_file">Выберите музыку</label>
        <input @change="handleFileChange($event, 'music')" type="file">
      </div>
      <input class="send_btn mt-5" type="submit" value="Добавить">
    </form>
  </div>
</template>

<style scoped>
.form-group {
  gap: 10px;
  label {
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }

  input[type="text"] {
    padding: 10px;
    border-radius: 10px;
    background-color: #221f1f;
    color: white;
    outline: none;
    border: none;
  }

  input[type="file"] {
    width: max-content;
    background-color: #ccc;
    border-radius: 10px;
  }

  input[type="text"] {
    &:focus {
      background-color: #fff;
      color: black;
    }
  }
}

.send_btn {
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 10px;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
}
</style>