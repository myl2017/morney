<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPane @update:value="onUpdateAmount" @submit="saveRecord"/>
        <!--        <Types :value.sync="record.type"/>-->
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <div class="notes">
            <FromItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
        </div>
        <Tags/>
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
      this.$store.commit("createRecord", this.record);
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