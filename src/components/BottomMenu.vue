<template>
  <nav class="bottom-menu-container">
    <ul class="bottom-menu--list">
      <li
        v-for="(menuItem, menuItemIdx) of menuItems"
        :key="menuItemIdx"
        class="bottom-menu--list-item"
      >
        <router-link :to="menuItem.link" class="bottom-menu-list--link">
          <img v-if="menuItem.icon" :src="menuItem.icon" alt="" class="icon" />
          <span>{{ menuItem.text_en || '-' }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menuItems = [
  { text_en: 'Play', link: '/', text_ru: 'Игра', icon: '' },
  { text_en: 'Earn', link: '/earn', text_ru: 'Доход', icon: '' }
]
</script>

<style lang="scss" scoped>
.bottom-menu-container {
  position: fixed;
  max-width: 450px;
  width: calc(100% - 48px);
  left: 50%;
  bottom: 35px;
  transform: translate(-50%, 0);
  margin: 0 auto;
}

.bottom-menu--list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #4e4e4e;
  padding: 10px;
  border-radius: 10px;
  z-index: 10;
}

.bottom-menu--list-item {
  width: calc(25% - 5px);
}
.bottom-menu-list--link {
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 60px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid black;
}

.bottom-nav-panel-text {
  font-weight: bold;
  font-size: 12px;
  line-height: auto;
  letter-spacing: 0;
}
</style>
