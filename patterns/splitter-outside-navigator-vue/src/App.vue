<template>
  <v-ons-splitter>
    <v-ons-splitter-side swipeable width="220px" collapse="" side="right" :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="menuPage in menuPages" :key="menuPage.label" tappable @click="setOptions({animation: 'fade'}); pageStack = [menuPage.page]; openSide = false">
            {{ menuPage.label }}
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>
    <v-ons-splitter-content>
      <v-ons-navigator :page-stack="pageStack" :options="options" @postpush="setOptions({})">
        <component v-for="page in pageStack" @push="pageStack.push($event)" @pop="pageStack.pop()" :is="page" :key="page" :open-menu="() => {openSide = true}"></component>
      </v-ons-navigator>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import home from './Home';
import cards from './Cards';
import settings from './Settings';

export default {
  data() {
    return {
      openSide: false,
      menuPages: [
        { label: 'Home', page: home },
        { label: 'Cards', page: cards },
        { label: 'Settings', page: settings }
      ],
      pageStack: [home],
      options: {}
    }
  },
  methods: {
    setOptions(newOptions) {
      this.options = newOptions;
    }
  },
  components: {
    home: home,
    cards: cards,
    settings: settings
  }
}
</script>
