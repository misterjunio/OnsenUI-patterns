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
  </v-ons-page>
</template>

<script>
export default {
  props: ['openMenu']
}
</script>
