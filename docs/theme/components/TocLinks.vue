<template>
  <ul
    class="nav flex-column toc"
    id="toc"
    v-if="items[0].children"
  >
    <li v-for="(item, i) in items[0].children" :key="i" class="nav-item">
      <TocLink
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
import TocLink from '@theme/components/TocLink.vue'
import { isActive } from '../util'

export default {
  name: 'TocLinks',

  components: { TocLink },

  props: [
    'items',
    'depth',  // depth of current sidebar links
    'sidebarDepth' // depth of headers to be extracted
  ],

  data () {
    return {
      openGroupIndex: 0
    }
  },

  created () {
    this.refreshIndex()
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>
