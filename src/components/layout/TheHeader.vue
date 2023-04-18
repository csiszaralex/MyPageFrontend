<script lang="ts" setup>
import BaseButton from '@/components/UI/BaseButton.vue';
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid d-grid">
      <div class="navbar-toggler order-2">
        <FaIcon
          :icon="['far', 'compass']"
          id="hover"
          class="toggler-icon"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        />
        <FaIcon
          :icon="['fas', 'compass']"
          id="normal"
          class="toggler-icon"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        />
      </div>
      <div class="collapse navbar-collapse order-md-1 order-4" id="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>

      <div class="fira fs-4 fw-semibold order-2 text-center">Alex</div>
      <div class="order-3 text-end">
        <base-button type="primary" :icon="['fas', 'file-signature']">ContactMe!</base-button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.d-grid {
  grid-template-columns: repeat(3, 1fr);
}
.navbar-toggler {
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover #hover {
    display: block;
  }
  &:hover #normal {
    display: none;
  }
}
.toggler-icon {
  font-size: 1.5rem;
  &:active,
  &:hover {
    color: var(--bs-bg-color);
  }
}
#hover {
  display: none;
}
</style>
