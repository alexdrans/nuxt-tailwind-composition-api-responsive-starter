<template>
  <div
    class="flex row items-center rounded my-1 mx-2 p-2"
    :class="[backgroundColor, textColor]"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="shrink mx-2 fill-current"
      :class="textColor"
      aria-hidden="true"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: [String, Array as () => string[]],
      required: false,
    },
  },
})
</script>
