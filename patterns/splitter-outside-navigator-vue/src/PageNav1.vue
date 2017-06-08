<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button @click="openMenu">
          <v-ons-icon icon="md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div style="text-align: center">
      <h1>Custom Page</h1>
      <p>
        <v-ons-input modifier="underbar" placeholder="Title" float></v-ons-input>
      </p>
      <v-ons-button @click="push">
        Push Page
      </v-ons-button>
      <v-ons-button @click="pop">
        Pop Page
      </v-ons-button>
    </div>
    <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
      Swipe left to open the menu!
    </p>
  </v-ons-page>
</template>

<script>
export default {
  beforeCreate: function () {
    this.pageNav1 = require('./PageNav1.vue');
  },
  created: function () {
    this.title = this.title && this.title !== '' ? this.title : 'Custom Page';
  },
  methods: {
    pop() {
      this.$emit('pop');
    },
    push() {
      var title = this.$el.querySelector('ons-input').value;
      var pageToPush = {
        extends: this.pageNav1,
        data() {
          return {
            title: title
          }
        }
      };
      this.$emit('push', pageToPush);
    }
  },
  props: ['openMenu']
}
</script>
