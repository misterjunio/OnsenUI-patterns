<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="right">
        <ons-toolbar-button @click="openMenu">
          <ons-icon icon="md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-card>
      <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style="width: 100%">
      <div class="title">{{ cardTitle }}</div>
      <div class="content">
        <div>
          <v-ons-button>
            <v-ons-icon icon="ion-thumbsup"></v-ons-icon>
          </v-ons-button>
          <v-ons-button>
            <v-ons-icon icon="ion-share"></v-ons-icon>
          </v-ons-button>
        </div>
        <v-ons-list>
          <v-ons-list-header>Bindings</v-ons-list-header>
          <v-ons-list-item>Vue</v-ons-list-item>
          <v-ons-list-item>Angular</v-ons-list-item>
          <v-ons-list-item>React</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
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
