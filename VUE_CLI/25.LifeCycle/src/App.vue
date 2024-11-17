<template>
  <h2>Lifecycle Hooks {{ title }}</h2>
  <button v-on:click="updateTitle()">Başlığı Güncelle</button>
</template>

<script>
export default {
  data() {
    return {
      title: "{Deneme Başlığı}",
    };
  },
  methods: {
    updateTitle: function () {
      this.title = "{Title Güncellendi}";
    },
  },
  beforeCreate() {
    alert("Create Edilmeden Önce!");
  },
  created() {
    alert("Create Edildi!");
  },
  beforeMount() {
    alert("Mount Edilmeden Önceki İşlemler");
  },
  mounted() {
    alert("Mount Edildi!");
  },
  beforeUpdate() {
    alert("Update etmeden önce!");
  },
  updated() {
    alert("Update Edildi");
  },
};
</script>

<style></style>
