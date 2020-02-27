<template>
    <div class="nav-wrapper">
        <div class="content">
            <p>Statistics.vue</p>
        </div>
        <Nav/>
    </div>
</template>

<script type="ts">
  export default {
    name: "Statistics"
  };
</script>

<style lang="scss" scoped>
    .nav-wrapper {
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