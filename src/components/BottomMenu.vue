<template>
  <nav>
    <ul>
      <li v-for="(menuItem, menuItemIdx) of menuItems" :key="menuItemIdx">
        <router-link :to="menuItem.link">
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

<style lang="scss" scoped></style>
