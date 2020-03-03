<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPane @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="notes">
            <FromItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
        </div>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPane from "@/components/Money/NumberPane.vue";
  import Types from "@/components/Money/Types.vue";
  import FromItem from "@/components/Money/FromItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component} from "vue-property-decorator";
  import store from "@/store/index2.ts";


  @Component({
    components: {Tags, FromItem, Types, NumberPane}
  })
  export default class Money extends Vue {
    tags = store.tagList;
    recordList = store.recordList;
    record: RecordItem = {tags: [], notes: "", type: "-", amount: 0};


    onUpdateTags(value: string[]) {
      console.log("test: ", value);
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
      store.createRecord(this.record);
    }
  }
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>