<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <!-- Con Lazy Load -->
    <!-- Se pueden cargar u ocultar tags con > :active=true o false < respectivamente -->
    <!-- Y ser manipulados por una computed property -->
    <!-- El method changeComponent() modificará el activeComponent en data () {} -->
    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">
        Active
      </b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">
        Passive
      </b-nav-item>
    </b-nav>

    <!-- El tag keep-alive -->
    <!-- Evitará que el componente se re-renderice luego de cargar la primera vez -->
    <keep-alive>
      <!-- Componente que cambiará entre ActiveSkills y PassiveSkills  -->
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>

    <!-- Sin Lazyload
    <ActiveSkills :skills="skills.active" />
    <hr>
    <PassiveSkills :skills="skills.passive" />
    -->

  </div>
</template>

<script>
// import ActiveSkills from './ActiveSkills'
// import PassiveSkills from './PassiveSkills'
// Componentes importados más abajo con Lazyload
// Referencia a code splitting:
// https://webpack.js.org/guides/code-splitting/

export default {
  name: 'HeroSkills',
  components: {
    // Componentes dinámicos
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills" */'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills" */'./PassiveSkills')
  },
  props: {
    skills: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // Componente Lazy default
      // la variable activeComponent puede ser reemplazada
      activeComponent: 'ActiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  },
  computed: {
    /**
     * Dynamic props for async dynamic components
     * @returns {String}
     */
    // Con esto estamos generando "props" dinámicas
    // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  }
}
</script>
