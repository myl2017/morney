<template>
    <Layout>
        <p>Statistics slot</p>
    </Layout>
</template>

<script type="ts">
  export default {
    name: "Statistics"
  };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        flex-grow: 1;
        overflow: auto;
    }
</style>