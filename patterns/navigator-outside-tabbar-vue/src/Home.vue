<template>
  <v-ons-page>
    <h2>Home</h2>
    <div style="text-align: center">
      <br>
      <v-ons-button @click="push">
        Push Page
      </v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
import pageNav1 from './PageNav1';
export default {
  methods: {
    pop() {
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(pageNav1);
    }
  },
  props: ['pageStack']
}
</script>
