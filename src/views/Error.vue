<template>
  <div class="d-flex justify-center my-auto">
    <h1>Error: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    msg: String,
  },
}
</script>
