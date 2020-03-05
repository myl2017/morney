<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>

    </Layout>
</template>

<style scoped lang="scss">
    /*::v-deep .type-tabs-item, ::v-deep .interval-tabs-item { !*deep 语法*!*/
    /*    background: white;*/

    /*    &.selected {*/
    /*        background: #c4c4c4;*/

    /*        &::after {*/
    /*            display: none;*/
    /*        }*/
    /*    }*/
    /*}*/

    ::v-deep { /*deep 语法*/
        .type-tabs-item {
            background: white;
            &.selected {
                background: #c4c4c4;

                &::after {
                    display: none;
                }
            }
        }

        .interval-tabs-item {
            height: 48px!important;
        }
    }
</style>

<script lang="ts">
  import Vue from "vue";
  import Types from "@/components/Money/Types.vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import intervalList from "@/constants/intervalList";
  import recordTypeList from "@/constants/recordTypeList";

  @Component({
    components: {Tabs, Types}
  })
  export default class Statistics extends Vue {
    type = "-";
    interval = "day";
    intervalList = intervalList;
    recordTypeList = recordTypeList;

  }
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