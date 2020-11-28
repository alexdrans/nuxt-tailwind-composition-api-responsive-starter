<template>
  <div>
    <header class="container mx-auto bg-yellow-400 p-5">
      <nav class="flex justify-between">
        <div>
          <nuxt-link to="/">Logo</nuxt-link>
        </div>
        <button class="sm:hidden no-zoom" @click="toggleMenu">
          <font-awesome-icon v-show="!menuOpen" icon="bars" size="lg" />
          <font-awesome-icon v-show="menuOpen" icon="times" size="lg" />
        </button>
        <ul class="hidden sm:flex sm:flex-row">
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="p-3 cursor-pointer rounded mr-5 hover:bg-gray-100 text-gray-800 font-bold hover:text-black"
          >
            <li>
              {{ link.text }}
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </header>
    <div
      class="sm:hidden static overflow-hidden z-99 bg-red-500 h-screen w-full transition duration-500 ease-in-out transform hover:-translate-y-1"
      :class="{
        hidden: !menuOpen,
        'sm:flex': menuOpen,
      }"
    >
      <ul class="flex sm:hidden flex-col mt-24 h-full items-center px-4">
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-gray-800 font-bold hover:text-black p-3 cursor-pointer rounded w-full my-6 text-center bg-white"
        >
          <li>
            {{ link.text }}
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMenu } from '~/composables/menu'

export default defineComponent({
  name: 'Navigation',
  watch: {
    $route() {
      this.$store.dispatch('menu/toggle', false)
    },
  },
  setup(_props) {
    const { menuOpen, toggleMenu } = useMenu()

    const links = [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'Services',
        to: '/services',
      },
      { text: 'About', to: '/about' },
      { text: 'Portfolio', to: '/portfolio' },
      { text: 'Contact', to: '/contact' },
    ]

    return {
      links,
      menuOpen,
      toggleMenu,
    }
  },
})
</script>

<style>
.no-zoom {
  touch-action: manipulation;
}
</style>
