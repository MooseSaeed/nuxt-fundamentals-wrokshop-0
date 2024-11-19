<script setup>
const props = defineProps(["error"]);

const clearAndRedirect = () => {
  clearError({ redirect: "/" });
};

const errorMessage = computed(() => {
  return props.error.statusCode === 404
    ? "Page not found"
    : "Ops, something went wrong!";
});
</script>

<template>
  <NuxtLayout name="custom">
    <div>
      <h1>{{ error.statusCode }}</h1>
      <p>{{ errorMessage }}</p>
      <button @click="clearAndRedirect">Clear error</button>
    </div>
  </NuxtLayout>
</template>
