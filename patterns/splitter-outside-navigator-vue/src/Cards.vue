<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Navigator+Tabbar</div>
      <div class="right">
        <ons-toolbar-button @click="openMenu">
          <ons-icon icon="md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <h2>Cards</h2>
    <v-ons-list-title>Card List</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item @click="push">Card One</v-ons-list-item>
      <v-ons-list-item @click="push">Card Two</v-ons-list-item>
      <v-ons-list-item @click="push">Card Three</v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import pageNav2 from './PageNav2';
export default {
  methods: {
    push($event) {
      var cardTitle = $event.target.textContent;
      var pageToPush = {
        extends: pageNav2,
        data() {
          return {
            cardTitle: cardTitle
          }
        }
      };
      this.$emit('push', pageToPush);
    }
  },
  props: ['openMenu']
}
</script>
