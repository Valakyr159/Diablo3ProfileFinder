// Importamos nuestra función que obtiene el token
// @ es un alias para /src
import * as oauth from '@/api/oauth'

// Creamos el objeto con "Espacio de Nombres"
export default {
  namespaced: true,
  // State: el estado del módulo
  // Mutations: mutaciones del estado
  // Actions: acciones que llamarán nuestras mutaciones
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    /* ACTIONS COMMITS MUTATIONS!! */
    // Creamos la función getToken, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de Javascript, recogemos `commit` como argumento
    getToken ({ commit }) {
      // Pasamos el estado a Loading:
      commit('loading/SET_LOADING', true, { root: true })

      // Pasos:
      // 1 - Hacer llamada HTTP para obtener el token
      // 2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
      // 3 - Si hay error, limpiar el token de 'accessToken', mostrar log del error

      // Paso 1
      oauth.getToken()
        .then(({ data }) => {
          // Paso 2: Guardamos el valor del token llamando a nuestra mutación
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          // Por ahora no hacemos nada más aquí
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
