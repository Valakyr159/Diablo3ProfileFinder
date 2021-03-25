<template>
  <div class="home-view">
    <HomeTitle/>
    <MainForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainForm from './HomeForm'
import HomeTitle from './HomeTitle'

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
