<script setup lang="ts">
interface Properties {
  type?: 'button' | 'reset' | 'submit';
}

const a: any = 5;
</script>

<template>
  <button class="button"><slot /></button>
</template>

<style>
.bottom {
  display: block;

  padding: 1rem;

  background-color: hsl(9deg 100% 64%);
}
</style>
