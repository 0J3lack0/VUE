<template>
  <h1>Slot'lar</h1>
  <alt-bilesen>
    <template #baslik>
      <h2>Alt bileşene gönderilen başlık</h2>
      <h3>{{ title }}</h3>
    </template>
    <template #icerik>
      <p>Bu alt bileseşene gönderilen içerik</p>
    </template>
    <template #baslik2>
      <h2>Alt bileşene gönderilen başlık2</h2>
    </template>
    <template #icerik2>
      <p>Bu alt bileseşene gönderilen içerik2</p>
    </template>
  </alt-bilesen>
</template>

<script>
import altBilesen from "./components/alt-bilesen.vue";
export default {
  components: {
    "alt-bilesen": altBilesen,
  },
  data() {
    return {
      title: "Alt bileşene iletilecek başlık",
    };
  },
};
</script>

<style></style>
