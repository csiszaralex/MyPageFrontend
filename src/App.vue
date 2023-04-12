<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/layout/TheHeader.vue';
</script>

<template>
  <div id="fo" class="d-flex flex-column justify-content-between">
    <TheHeader />
    <div class="container-fluid">
      <RouterView />
    </div>
    <div class="footer">Láb</div>
  </div>
</template>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.container-fluid {
  padding: 0;
  margin: 0;
}

#fo {
  min-height: 100vh;
}
</style>
