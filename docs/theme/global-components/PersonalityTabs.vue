
<template>

  <div class="personality-tabs">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Clarifying keywords" active>
          <b-card-text>
<slot name="keywords"></slot>
          </b-card-text>
        </b-tab>
        <b-tab title="Description/Sentiment">
          <b-card-text>
<slot name="description"></slot>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>

</template>

<script>
import { BCard, BCardText, BTabs, BTab } from 'bootstrap-vue'
export default {
  components: {
    'b-card': BCard,
    'b-tabs': BTabs,
    'b-tab': BTab,
    'b-card-text': BCardText
  },
  props: {
    id: String,
    type: String
  },
  computed: {
    uppercaseType() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
  }
}
</script>

<style lang="scss">
.personality-tabs {
  margin-top: 12px;
  .nav-tabs {
    display: flex;
  }
  .nav-item {
    flex: 1;
    text-align: center;
  }
  .nav-link {
    border-bottom: solid 2px transparent;
    &.active {
      border-bottom-color: #0A6ED1;
    }
    &:focus {
      outline: none;
    }
  }
  .card-header {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
