<template>
  <alt-bilesen>
    <template #form-header>
      <h2>Giriş Formu</h2>
      <p>Giriş yapabilmek için lütfen formu doldurun.</p>
    </template>
    <template #form-elements>
      <label for="email">E-Posta</label>
      <input
        type="email"
        name="email"
        placeholder="E-Posta adresinizi giriniz"
      />
      <label for="password">Şifre</label>
      <input type="password" name="password" placeholder="Şifrenizi Giriniz!" />
    </template>
    <template #form-controls>
      <button>Giriş Yap</button>
    </template>
  </alt-bilesen>
  <input type="test" placeholder="test" />
  <h3 v-bind:class="$style.blue">Rengi Deniyoruz</h3>
  <h3 v-bind:class="xbilesen.green">Rengi Deniyoruz</h3>
</template>

<script>
import altBilesen from "./components/alt-bilesen.vue";
export default {
  components: {
    "alt-bilesen": altBilesen,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
:global(h2) {
  color: red;
}
:deep(input) {
  width: 100%;
  border: 1px solid #e2e2e2;
  height: 35px;
  border-radius: 5px;
}
</style>

<style module>
.blue {
  color: blue;
}
</style>
<style module="xbilesen">
.green {
  color: green;
}
</style>
