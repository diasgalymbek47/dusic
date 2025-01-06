<script setup>
import {RouterLink} from "vue-router";
import MenuButton from "@/components/MenuButton.vue";
import LogoText from "@/components/LogoText.vue";

defineProps({
  state: {
    type: Boolean,
    required: true,
  },
  funcState: {
    type: Function,
    required: true,
  }
})
</script>

<template>
  <nav class="navbar" :class="{active: state}">
    <div class="wrap">
      <div class="navbar-brand">
        <MenuButton @click="funcState" class="navbar-brand-logo-box"/>
        <LogoText class="navbar-brand-text"></LogoText>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">
            <span class="material-symbols-outlined">
              home
            </span>
            Главная
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="statistics" class="nav-link">
            <span class="material-symbols-outlined">
              analytics
            </span>
            Статистика
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="add" class="nav-link">
              <span class="material-symbols-outlined">
                add_box
              </span>
            Добавить
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="edit" class="nav-link">
              <span class="material-symbols-outlined">
                edit_square
              </span>
            Редактировать
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="delete" class="nav-link">
              <span class="material-symbols-outlined">
                delete
              </span>
            Удалить
          </RouterLink>
        </li>
        <li class="nav-item mt-auto">
          <RouterLink to="logout" class="nav-link">
            <span class="material-symbols-outlined">
              logout
            </span>
            Выйти
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100%;

  display: flex;
  flex-direction: column;

  background-color: #221f1f;
  border-right: 1px solid #111;

  transition: all .3s ease-in-out;

  z-index: 3;
}

.navbar.active {
  left: 0;
}

.wrap {
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
}

.navbar-brand {
  padding: 10px 50px 10px 25px;

  display: flex;
  gap: 30px;
  align-items: center;
}

.navbar-nav {
  margin: 0;
  padding: 20px 0;
  list-style: none;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item:hover {
  background-color: #3c3c3c;
}

.mt-auto {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 50px 15px 25px;

  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}
</style>