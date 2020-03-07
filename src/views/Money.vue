<template>
    <Layout class-prefix="layout">
        <NumberPane :value.sync="record.amount" @submit="saveRecord"/>
        <!--        <Types :value.sync="record.type"/>-->
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <div class="notes">
            <FromItem field-name="备注" placeholder="在这里输入备注" :value="record.notes" @update:value="onUpdateNotes"/>
        </div>
        <Tags @update:value="record.tags = $event"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPane from "@/components/Money/NumberPane.vue";
  import Types from "@/components/Money/Types.vue";
  import FromItem from "@/components/Money/FromItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component} from "vue-property-decorator";
  import recordTypeList from "@/constants/recordTypeList";
  import Tabs from "@/components/Tabs.vue";


  @Component({
    components: {Tabs, Tags, FromItem, Types, NumberPane}
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    recordTypeList = recordTypeList;

    record: RecordItem = {tags: [], notes: "", type: "-", amount: 0};

    created() {
      this.$store.commit("fetchRecords");
    }

    // onUpdateTags(value: string[]) {
    //   console.log("test: ", value);
    //   this.record.tags = value;
    // }

    onUpdateNotes(value: string) {
      console.log(value);
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      console.log(value);
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert("请至少选择一个标签");
      }
      this.$store.commit("createRecord", this.record);
      console.log(this.$store.state.createRecordError);
      if (this.$store.state.createRecordError === null || this.$store.state.createRecordError === undefined) {
        window.alert("已保存");
        this.record.notes = "";
      }
    }
  }
</script>


<style lang="scss" scoped>
    ::v-deep .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>