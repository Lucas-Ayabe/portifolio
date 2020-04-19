<template>
  <section :class="['section', isAlign]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    isAlign() {
      return `is-${this.align}`
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin title-divider {
  content: '';
  width: 20px;
  height: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -4px;
}

.section {
  padding-top: $space-6;
  padding-bottom: $space-6;

  @include max-width(getBreakpointValue('sm')) {
    text-align: center;
  }

  & & {
    padding-top: $space-6/2;
    padding-bottom: $space-6/2;
  }

  &__title {
    @include title;

    &.is-left.has-divider::before {
      @include title-divider;
      background: $primary-color;
      margin-right: 10px;
    }

    &.is-centered {
      &.has-divider::before {
        @include title-divider;
        background: $primary-color;
        margin-right: 10px;
      }

      &.has-divider::after {
        @include title-divider;
        background: $primary-color;
        margin-left: 10px;
      }
    }

    &.is-right {
      &.has-divider::after {
        @include title-divider;
        background: $primary-color;
        margin-left: 10px;
      }
    }

    &.is-light {
      &.has-divider::before,
      &.has-divider::after {
        background: $light-color !important;
      }
    }
  }

  &__subtitle {
    font-size: $font-size-2;
    font-weight: 400;
    margin-bottom: $space-2;
  }

  &__text {
    font-size: $font-size-2;
    color: $dark-color-2;
    margin-bottom: $space-2;
  }

  &.is-left {
    text-align: left;

    .section__title {
      &.has-divider::before {
        @include title-divider;
        background: $primary-color;
        margin-right: 10px;
      }
    }
  }

  &.is-centered {
    text-align: center;

    .section__title {
      &.has-divider::before {
        @include title-divider;
        background: $primary-color;
        margin-right: 10px;
      }

      &.has-divider::after {
        @include title-divider;
        background: $primary-color;
        margin-left: 10px;
      }
    }
  }

  &.is-right {
    text-align: right;

    .section__title {
      &.has-divider::after {
        @include title-divider;
        background: $primary-color;
        margin-left: 10px;
      }
    }
  }
}
</style>
