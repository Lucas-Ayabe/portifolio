<template>
  <app-section class="container">
    <h1 class="section__title">Olá</h1>
    <form ref="contactForm" name="contact" netlify>
      <p>
        <label>Name <input class="form__input" type="text" name="name"/></label>
      </p>
      <p>
        <label
          >Email <input class="form__input" type="email" name="email"
        /></label>
      </p>
      <p>
        <br />
        <button class="button is-primary" type="submit">Send</button>
      </p>
    </form>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </app-section>
</template>

<script>
import AppSection from '~/components/AppSection'
export default {
  name: 'Home',
  components: {
    AppSection
  },
  mounted() {
    // eslint-disable-next-line
    this.$refs.contactForm.setAttribute("netlify", "")
  }
}
</script>
