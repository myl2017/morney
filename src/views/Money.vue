<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPane @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPane from "@/components/Money/NumberPane.vue";
  import Types from "@/components/Money/Types.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component, Watch} from "vue-property-decorator";

  // const version = window.localStorage.getItem("version") || "0";
  // if (version < "0.0.2") {
  //   if (version === "0.0.1") {
  //     //数据升级，数据迁移
  //     recordList.forEach(record => {
  //       record.createdAt = new Date(2020, 0, 1);
  //     });
  //   }
  // }

  window.localStorage.setItem("version", "0.0.1");

  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date
  }

  @Component({
    components: {Tags, Notes, Types, NumberPane}
  })
  export default class Money extends Vue {
    tags = ["衣", "食", "住", "行"];
    recordList: Record[] = JSON.parse(window.localStorage.getItem("recordList") || "[]");
    record: Record = {tags: [], notes: "", type: "-", amount: 0};


    onUpdateTags(value: string[]) {
      console.log(value);
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      console.log(value);
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      console.log(value);
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record)); //deep clone 深拷贝
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }

    @Watch("recordList")
    onRecordListChange() {
      window.localStorage.setItem("recordList", JSON.stringify(this.record));
    }
  }
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>