<template>
    <svg class="icon" @click="$emit('click',$event)">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script>
    import x from "@/assets/icons/label.svg";
    import y from "@/assets/icons/money.svg";
    import z from "@/assets/icons/statistics.svg";
    import f from "@/assets/icons/right.svg";
    import g from "@/assets/icons/left.svg";

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