<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Types extends Vue {
    // type = "-"; // '-'表示支出，'+'表示收入
    @Prop() readonly value!: string;
    // Prop 告诉 Vue xxx 不是 data 是 prop
    // Number 告诉 Vue xxx 是个 Number
    // xxx 属性名
    // number | undefined 告诉 TS xxx 的编译时类型

    selectType(type: string) { // type 只能是 '-' 和 '+' 中的一个
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      // this.type = type;
      this.$emit('update:value', type)
    }

    // @Watch('type')
    // onTypeChanged(value: string) {
    //   this.$emit('update:value', value)
    // }
  }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>