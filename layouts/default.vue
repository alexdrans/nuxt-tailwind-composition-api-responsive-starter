<template>
  <div class="max-w-screen-xl mx-auto flex flex-col min-h-screen">
    <header>
      <navigation />
    </header>
    <Nuxt class="flex-grow" />
    <page-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PageFooter from '~/components/Footer.vue'
import Navigation from '~/components/Navigation.vue'
import { useMenu } from '~/composables/menu'

export default defineComponent({
  name: 'DefaultLayout',
  components: { Navigation, PageFooter },
  head() {
    return {
      bodyAttrs: {
        class: this.menuOpen ? 'overflow-hidden' : '',
      },
    }
  },
  setup(_props) {
    const { menuOpen } = useMenu()

    return {
      menuOpen,
    }
  },
})
</script>

<style>
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
