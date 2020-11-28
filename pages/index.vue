<template>
  <div class="m-auto flex flex-col items-center justify-center">
    <h1 class="my-2">Home</h1>
    <img
      :class="{
        'animate-spin-slow': !spinFast,
        'animate-spin': spinFast,
      }"
      width="300"
      height="300"
      src="/spiral-ring.png"
    />
    <button class="p-2 my-8 border-2" @click="toggleSpinSpeed">
      {{ spinSpeedText }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, ref } from '@nuxtjs/composition-api'
import Vue from 'vue'

export default Vue.extend({
  setup() {
    const spinFast = ref(false)

    const toggleSpinSpeed = () => {
      spinFast.value = !spinFast.value
    }

    const spinSpeedText = computed(() => {
      return spinFast.value ? 'Spin Slow' : 'Spin Fast'
    })

    return {
      spinFast,
      toggleSpinSpeed,
      spinSpeedText,
    }
  },
})
</script>
