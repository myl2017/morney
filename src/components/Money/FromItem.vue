<template>
    <div>
        <label class="fromItem">
            <span class="name">{{fieldName}}</span>
            <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder"/>
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Watch, Prop} from "vue-property-decorator";

  @Component
  export default class FromItem extends Vue {
    @Prop({default: ""}) value!: string;

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    // @Watch("value")
    onValueChange(value: string) {
      this.$emit("update:value", value);
    }
  }
</script>

<style lang="scss" scoped>
    .fromItem {
        font-size: 14px;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 1px;
        }
    }
</style>