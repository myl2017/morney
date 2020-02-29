<template>
    <svg class="icon">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script type="ts">
  import x from "@/assets/icons/label.svg";
  import y from "@/assets/icons/money.svg";
  import z from "@/assets/icons/statistics.svg";

  export default {
    name: "Icon",
    props: ["name"]
  };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>