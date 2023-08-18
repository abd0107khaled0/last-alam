<template>
  <div class="nav">
    <homec />
    <homec-2 />
    <homec-3 />
  </div>
</template>

<script>
import Homec from "@/components/Home/Homec1.vue";
import Homec2 from "@/components/Home/Homec2.vue";
import Homec3 from "@/components/Home/Homec3.vue";
export default {
  components: { Homec, Homec2, Homec3 },
  name: "HomeV",
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    !user ? this.$router.push({ name: "registerFirst" }) : "";
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
div.nav {
  height: 100vh;
}
</style>
