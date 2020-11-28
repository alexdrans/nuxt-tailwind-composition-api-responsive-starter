<template>
  <footer class="mt-auto h-48 py-8 sm:py-4 sm:h-24 bg-blue-200 text-center">
    <span>&copy; {{ currentYear }} - Your Company</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'PageFooter',
  setup(_props) {
    const currentYear = computed(() => new Date().getFullYear())

    return { currentYear }
  },
})
</script>
