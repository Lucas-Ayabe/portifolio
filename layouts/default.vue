<template>
  <div id="app">
    <TheHeader fixed container align-nav="left" />
    <main class="main">
      <article class="content">
        <nuxt />
      </article>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  padding-top: 64px;

  .has-sidenav & {
    flex: 0;
    padding-top: 0;
    height: 100vh;
    max-height: calc(100vh - 128px);
    overflow-y: auto;

    @include min-width(getBreakpointValue('md')) {
      flex: 1;
    }
  }
}
</style>
