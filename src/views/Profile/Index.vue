<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'
import { getApiAccount } from '@/api/search'
// mixin
import setError from '@/mixins/setError'

export default {
  name: 'ProfileView',
  // Dando de alta al mixin
  mixins: {
    setError
  },
  components: {
    BaseLoading,
    MainBlock
  },
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  // Created() {} es lo primero que se ejecuta cuando la página comienza a cargar
  created () {
    this.isLoading = true
    // this.$route.params -> { region: "eu", battleTag: "Valakyr-1709"}
    // Desestructuración
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    fetchData (region, account) {
      // Llamada API
      // Llamada a la API con los tatos necesarios
      getApiAccount({ region, account })
        .then((data) => {
          this.profileData = data.data
        })
        .catch((err) => {
          this.profileData = null
          // Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          // Hacemos uso del Mixin
          // Guardamos el objeto en el Store
          this.setApiErr(errObj)
          // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
