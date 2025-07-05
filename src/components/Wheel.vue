<template>
  <div>
    <!-- type: image -->
    <FortuneWheel
      ref="wheelEl"
      style="width: 250px; max-width: 80%; margin: 0 auto"
      type="image"
      :useWeight="true"
      :prizeId="prizeId"
      :angleBase="1"
      :prizes="prizesImage"
      @rotateStart="onImageRotateStart"
      @rotateEnd="onRotateEnd"
    >
      <template #wheel>
        <img :src="wheelImg" style="width: 100%" />
      </template>
      <template #button>
        <img :src="buttonImg" style="width: 100%" />
      </template>

      <template #button-action>
        <div style="width: 180px; cursor: pointer" @click="wheelEl?.startRotate()"></div>
      </template>
    </FortuneWheel>

    <!-- type: canvas -->
    <!-- <FortuneWheel
      style="width: 500px; max-width: 100%"
      :verify="canvasVerify"
      :canvas="canvasOptions"
      :prizes="prizesCanvas"
      @rotateStart="onCanvasRotateStart"
      @rotateEnd="onRotateEnd"
    /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/style.css'
import wheelImg from '@/assets/img/wheel-rotation-part.png'
import buttonImg from '@/assets/img/wheel-static-part.png'

const prizeId = ref(0)

const wheelEl = ref()
// const canvasVerify = ref(false) // Whether the turntable in canvas mode is enabled for verification
// const verifyDuration = 2
// const canvasOptions = {
//   btnWidth: 140,
//   borderColor: '#584b43',
//   borderWidth: 6,
//   lineHeight: 30
// }

// const prizesImage = [
//   { id: 1, value: '1K', weight: 1 },
//   { id: 2, value: 'Деньги', weight: 1 },
//   { id: 3, value: 'Еще раз', weight: 1 },
//   { id: 4, value: 'значек', weight: 1 },
//   { id: 5, value: 'купюра', weight: 1 },
//   { id: 6, value: 'еще раз2', weight: 1 },
//   { id: 7, value: 'значек2', weight: 1 },
//   { id: 8, value: '↻еще раз3', weight: 1 },
//   { id: 9, value: 'купюра2', weight: 1 },
//   { id: 10, value: '10', weight: 1 }, // например, токен
//   { id: 11, value: '↻еще раз4', weight: 1 }
// ]

const prizesImage = [
  { id: 1, value: '1K', weight: 1 },
  { id: 2, value: 'Еще раз', weight: 1 },
  { id: 3, value: '10', weight: 1 },
  { id: 4, value: 'купюра', weight: 1 },
  { id: 5, value: 'еще раз2', weight: 1 },
  { id: 6, value: 'значек', weight: 1 },
  { id: 7, value: '↻еще раз3', weight: 1 },
  { id: 8, value: 'купюра2', weight: 1 },
  { id: 9, value: 'значек2', weight: 1 },
  { id: 10, value: '↻еще раз4', weight: 1 }, // например, токен
  { id: 11, value: 'золото', weight: 1 }
]

// const prizeRes = computed(() => {
//   return prizesCanvas.find((item) => item.id === prizeId.value) || prizesCanvas[0]
// })

onMounted(() => {
  // wheelEl.value.startRotate() // Can start rotation
})

function onImageRotateStart() {
  console.log('onImageRotateStart')
}

function onRotateEnd(prize) {
  alert(prize.value)
}

function onChangePrize(id) {
  prizeId.value = id
}
</script>

<style lang="scss" scoped></style>
