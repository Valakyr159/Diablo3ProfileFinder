<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gem.item.name">
</template>

<script>
export default {
  name: 'GemSlotItem',
  props: {
    gem: {
      type: Object,
      required: true
    }
  },
  computed: {
    gemUrl () {
      // Cambio de 'large' por 'small'
      const host = 'http://media.blizzard.com/d3/icons/items/large/'
      return `${host}${this.gem.item.icon}.png`
    }
  }
}
</script>
