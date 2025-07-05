<template>
  <nav>
    <p>Лого</p>
    <ul class="top-menu-list">
      <li>20ton</li>
      <li>
        <IconWallet />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import IconWallet from '@/components/icons/IconWallet.vue'
</script>

<style lang="scss" scoped>
.top-menu-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
