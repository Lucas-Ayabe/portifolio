<template>
  <footer class="footer">
    <p class="footer__coopy">
      Site de portifolio feito por Lucas Akira Ayabe.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background: $primary-color;
  color: $light-color;
  padding: $space-3;
  text-align: center;

  &__copy {
    line-height: initial;
  }

  .has-sidenav & {
    width: 100%;
  }
}
</style>
