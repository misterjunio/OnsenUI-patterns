<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Splitter+Navigator</div>
      <div class="right">
        <ons-toolbar-button @click="openMenu">
          <ons-icon icon="md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <h2>Home</h2>
    <div style="text-align: center">
      <br>
      <v-ons-button @click="push">
        Push Page
      </v-ons-button>
    </div>
    <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
      Swipe left to open the menu!
    </p>
  </v-ons-page>
</template>

<script>
import pageNav1 from './PageNav1';
export default {
  methods: {
    push() {
      this.$emit('push', pageNav1);
    }
  },
  props: ['pageStack', 'openMenu']
}
</script>
