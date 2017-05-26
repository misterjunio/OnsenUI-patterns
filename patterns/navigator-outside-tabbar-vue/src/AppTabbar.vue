<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Navigator outside Tabbar</div>
    </v-ons-toolbar>
  
    <v-ons-tabbar position="auto" :tabs="tabs" :index.sync="activeIndex">
      <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.page" :page-stack="pageStack"></component>
      </template>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import home from './Home';
import cards from './Cards';
import settings from './Settings';

export default {
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: 'ion-home',
          label: 'Home',
          page: home
        },
        {
          icon: 'ion-card',
          label: 'Cards',
          page: cards,
          badge: 3
        },
        {
          icon: 'ion-ios-cog',
          label: 'Settings',
          page: settings
        }
      ]
    }
  },
  props: ['pageStack']
}
</script>
