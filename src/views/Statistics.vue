<template>
    <Layout>
        <p>Statistics slot</p>
    </Layout>
</template>

<script lang="ts">
  export default {
    name: "Statistics"
  };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        flex-grow: 1;
        overflow: auto;
    }
</style>