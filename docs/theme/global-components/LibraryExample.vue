
<template>

  <div class="library-example">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Preview" active>
          <b-card-text>
<Moment :type="this.type" :id="this.id" :header="this.header" :message="this.message"/>
          </b-card-text>
        </b-tab>
        <b-tab title="Code">
          <b-card-text>
          <pre><code class="language-markup">
&lt;figure class="sapIllus sapIllus_{{ uppercaseType }}"&gt;
  &lt;svg class="sapIllus_Image" role="img"&gt;
    &lt;use xlink:href="#sapIllus-Dialog-NoSearchResults"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  &lt;figcaption class="sapIllus_Caption"&gt;
    &lt;h3 class="sapIllus_CaptionHeader"&gt;{{ this.header }}&lt;/h3&gt;
    &lt;p class="sapIllus_CaptionMessage"&gt;{{ this.message }}&lt;/p&gt;
  &lt;/figcaption&gt;
&lt;/figure&gt;
          </code></pre>
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
    type: String,
    header: {
      type: String,
      default: "Lorem ipsum dolor"
    },
    message: {
      type: String,
      default: "Cras imperdiet nec erat ac condimentum. Sed nulla hendrerit interdum orci a posuere."
    }
  },
  computed: {
    uppercaseType() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
  }
}
</script>

<style lang="scss">
.library-example {
  margin-top: 12px;
  .card {
    background-color: transparent;
    box-shadow: none;
    border: 0;
  }
  .card-header {
    padding: 0;
    background-color: transparent;
    border: none;
    margin-bottom: 24px;
  }
  .card-header-pills {
    margin-top: 0;
  }
  .card-body {
    background-color: white;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e5e5;
    border-radius: 0.25rem;
  }
  .nav-link {
    &.active {
      background-color: white;
    }
  }
}
</style>
