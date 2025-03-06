
<template>

  <section class="py-0">
    <div class="container-fluid">
        <div class="row justify-content-between">

          <!-- navigation -->
          <aside class="col-lg-3 col-xxl-2 p-3 doc-sidebar">
            <div class="sticky">

              <Navbar
                v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar"
              />

            </div>
          </aside>
          <!-- / navigation -->

          <!-- content -->
          <div class="col-lg-9 col-xxl-10 doc-content">
            <div class="row justify-content-between doc-content-body">
              <article class="col-md-9 col-xxl-8">


<figure class="sapIllus sapIllus_Scene">
  <svg class="sapIllus_Image" role="img">
    <use xlink:href="#sapIllus-Dialog-NoSearchResults"></use>
  </svg>
  <figcaption class="sapIllus_Caption">
    <h3 class="sapIllus_CaptionHeader">{{ getMsg() }}</h3>
    <p class="sapIllus_CaptionMessage">Use the site navigation to find the page you need or return to the <router-link to="/">home page</router-link>.</p>
  </figcaption>
</figure>

              </article>
            </div>
          </div>
          <!-- / content -->

        </div>
      </div>
      <SvgsAndCss />
    </section>

</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import { resolveSidebarItems } from '../util'

const msgs = [
  `Oh no! That’s a big 4-0-4.`,
  `How did we get here?`,
  `Looks like we’ve got some broken links.`
]
export default {
  components: { Home, Navbar },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
