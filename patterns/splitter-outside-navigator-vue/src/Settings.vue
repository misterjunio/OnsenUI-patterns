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
    <h2>Settings</h2>
    <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
      Swipe left to open the menu!
    </p>
  </v-ons-page>
</template>

<script>
export default {
  props: ['openMenu']
}
</script>
