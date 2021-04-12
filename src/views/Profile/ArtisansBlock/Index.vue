<template>
  <div class="artisan-list">
    <hr class="bg-light my-5">
    <h3 class="font-diablo mb-4">Artisans</h3>
    <b-row>
      <b-col lg="4" v-for="artisan in artisansInfo" :key="artisan.name">
        <ArtisanItem :artisan="artisan"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ArtisanItem from './ArtisanItem'

export default {
  name: 'ArtisanBlock',
  components: { ArtisanItem },
  props: {
    artisansData: {
      type: Object,
      required: true
    }
  },
  computed: {
    artisansInfo () {
      return [
        {
          name: 'blacksmith',
          icon: 'hammer',
          emoji: '⚒',
          color: '#FFB74D',
          normal: {
            level: this.artisansData.blacksmith.level,
            slug: this.artisansData.blacksmith.slug
          },
          hardore: {
            level: this.artisansData.blacksmithHardcore.level,
            slug: this.artisansData.blacksmithHardcore.slug
          }
        },
        {
          name: 'jeweler',
          icon: 'gem',
          emoji: '💎',
          color: '#4DD0E1',
          normal: {
            level: this.artisansData.jeweler.level,
            slug: this.artisansData.jeweler.slug
          },
          hardore: {
            level: this.artisansData.jewelerHardcore.level,
            slug: this.artisansData.jewelerHardcore.slug
          }
        },
        {
          name: 'mystic',
          icon: 'hat-wizard',
          emoji: '🔮',
          color: '#BA68C8',
          normal: {
            level: this.artisansData.mystic.level,
            slug: this.artisansData.mystic.slug
          },
          hardore: {
            level: this.artisansData.mysticHardcore.level,
            slug: this.artisansData.mysticHardcore.slug
          }
        }
      ]
    }
  }
}
</script>
