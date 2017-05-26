<template>
  <v-ons-page>
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
    pop() {
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(pageNav2);
    }
  },
  props: ['pageStack']
}
</script>
