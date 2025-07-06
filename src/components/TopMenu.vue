<template>
  <nav>
    <p>Лого</p>
    <ul class="top-menu-list">
      <li>20ton</li>
      <li>
        <IconWallet />
        <TonConnectButton />
        <div v-if="address">
          <p>Вы подключены как: {{ address }}</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import IconWallet from '@/components/icons/IconWallet.vue'
import { TonConnectButton } from 'ton-ui-vue'

import { useTonAddress } from 'ton-ui-vue'

const address = useTonAddress()
</script>

<style lang="scss" scoped>
.top-menu-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
