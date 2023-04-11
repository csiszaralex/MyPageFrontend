<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    type: string;
    to?: string;
    outline?: boolean;
    submit?: boolean;
    disabled?: boolean;
    icon?: string | Array<string>;
    size?: 'sm' | 'lg';
  }>(),
  { outline: false, submit: false, disabled: false, to: '' },
);

const classes = computed(() => {
  return [
    'btn',
    `btn-${props.outline ? 'outline-' : ''}${props.type}`,
    props.size ? `btn-${props.size}` : '',
  ];
});
const btnType = computed(() => {
  return props.submit ? 'submit' : 'button';
});
</script>

<template>
  <button :type="btnType" :class="classes" :disabled="disabled">
    <FaIcon :icon="icon" v-if="icon" class="me-1" />
    <router-link v-if="to" :to="to" class="text-reset text-decoration-none">
      <slot />
    </router-link>
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
// button:hover {
//   font-weight: 600;
// }
button {
  border-radius: 1.5rem;
}
</style>
