<template>
  <article class="col-lg-9 col-xxl-10 doc-content">

    <!-- breadcrumb -->
    <div class="row">
      <div class="col">
        <div class="doc-content-header">
          <div class="row align-items-center">
            <div class="col">
              <nav aria-label="breadcrumb" class="breadcrumb-nav align-items-center">
                <router-link
                  class="breadcrumb-back"
                  v-if="!$page.frontmatter.home"
                  to="/"
                  title="Back"
                >
                </router-link>
                <ol class="breadcrumb d-none d-lg-inline-flex">
                  <li class="breadcrumb-item">
                    <router-link
                      to="/"
                    >
                      Documentation
                    </router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">{{$page.title}}</li>
                </ol>
              </nav>
            </div>
            <div class="col text-right">
              <img :src="$withBase('/logo-sap@2x.png')" height="30" >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / breadcrumb -->

    <div class="row justify-content-between doc-content-body">
      <article class="col-md-9 col-xxl-8">
        <Content class="theme-default-content"/>
      </article>
      <aside class="col-md-3 col-xxl-3 d-none d-md-block">

          <Sidebar
            :items="sidebarItems"
            @toggle-sidebar="toggleSidebar"
          >
            <slot
              name="sidebar-top"
              slot="top"
            />
            <slot
              name="sidebar-bottom"
              slot="bottom"
            />
          </Sidebar>

      </aside>
    </div>

  </article>
</template>

<script>
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems, resolvePage, outboundRE, endingSlashRE } from '../util'

export default {
  components: { Sidebar },
  props: ['sidebarItems'],

  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },

    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$site.themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '')
           + `/src`
           + `/${docsBranch}/`
           + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
           + path
           + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + `/edit`
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style>
.breadcrumb-nav {
  min-height: 50px;
}
.breadcrumb-item {
  line-height: 50px;
}
</style>
