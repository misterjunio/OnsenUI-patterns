<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{ title }}</div>
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
  </v-ons-page>
</template>

<script>
export default {
  beforeCreate: function () {
    this.pageNav1 = require('./PageNav1.vue');
  },
  methods: {
    pop() {
      this.pageStack.pop();
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
      this.pageStack.push(pageToPush);
    }
  },
  props: {
    pageStack: Array,
    title: {
      type: String,
      default: 'Custom Page'
    }
  }
}
</script>
