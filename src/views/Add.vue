<script setup>

</script>

<template>
  <div class="container">
    <form>
      <div class="form-group d-flex flex-column">
        <label for="music_name">Название музыки</label>
        <input name="music_name" id="music_name" type="text">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="artist_name">Название артиста</label>
        <input name="artist_name" id="artist_name" type="text">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="album_name">Название альбома</label>
        <input name="album_name" id="album_name" type="text">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="genre_name">Название жанра</label>
        <input name="genre_name" id="genre_name" type="text">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="image_file">Выберите картинку</label>
        <input name="image_file" id="image_file" type="file">
      </div>
      <div class="form-group d-flex flex-column mt-4">
        <label for="music_file">Выберите музыку</label>
        <input name="music_file" id="music_file" type="file">
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
    background-color: #ccc;
  }

  input[type="file"] {
    width: max-content;
    background-color: #ccc;
    border-radius: 10px;
  }

  input[type="text"] {
    &:focus {
      background-color: #fff;
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