<template>
    <button class="button" @click="$emit('click',$event)">
        <slot/>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Button extends Vue {
  }
</script>

<style lang="scss" scoped>
    .button {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;

        &-wrapper { /*表示父元素createTag-wrapper*/
            text-align: center;
            padding: 40px;
            margin-top: (44 px-16);
        }
    }
</style>