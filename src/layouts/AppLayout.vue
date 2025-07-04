<template>
  <div class="layout">
    <TopMenu />

    <main class="layout__content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <BottomMenu />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopMenu from '@/components/TopMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px); // Изменено с translateX на translateY
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
