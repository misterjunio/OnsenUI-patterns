<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
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
  </v-ons-page>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: 'Custom Card'
    }
  }
}
</script>
