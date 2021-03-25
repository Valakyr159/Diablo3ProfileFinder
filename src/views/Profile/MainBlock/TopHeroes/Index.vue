<template>
  <div class="top-heroes">
    <!--- Título con nuestra fuente de Diablo-like --->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses un v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <TopHero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import TopHero from './TopHero'

export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: {
    heroes: {
      type: Array,
      required: true
    }
  }
}

</script>
