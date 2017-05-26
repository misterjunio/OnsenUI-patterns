<template>
  <v-ons-navigator :page-stack="pageStack">
    <component v-for="page in pageStack" :is="page" :key="page" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
import tabbar from './Tabbar';

export default {
  data() {
    return {
      pageStack: [tabbar]
    }
  }
}
</script>
