<template>
  <header>
    <h1>Sayfa Başlığı</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      list: ["Anasayfa", "Hakkımızda", "Blog", "İletişim"],
    };
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
