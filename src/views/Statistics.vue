<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <!--        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>-->
        <ol>
            <li v-for="(group,index) in groupedList" :key="index">
                <h3 class="title">{{beautify(group.title)}}<span>￥{{group.total}}</span></h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import Types from "@/components/Money/Types.vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import intervalList from "@/constants/intervalList";
  import recordTypeList from "@/constants/recordTypeList";
  import dayjs from "dayjs";
  import clone from "@/lib/clone";

  const oneDay = 86400 * 1000;


  @Component({
    components: {Tabs, Types}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? "无" : tags.join(",");
    }

    beautify(str: string) {
      const day = dayjs(str);
      const now = dayjs();
      if (day.isSame(now, "day")) {
        return "今天";
      } else if (day.isSame(now.subtract(1, "day"), "day")) {
        return "昨天";
      } else if (day.isSame(now.subtract(2, "day"), "day")) {
        return "前天";
      } else if (day.isSame(now, "year")) {
        return day.format("MM月D");
      } else {
        return day.format("YYYY年M月D");
      }
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get groupedList() {
      const {recordList} = this;
      if (recordList.length === 0) { return [];}
      type HashTableValue = { title: string, items: RecordItem[] };
      const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      type Result = { title: string, total?: number, items: RecordItem[] }[]
      const result: Result = [{
        title: dayjs(recordList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]]
      }];

      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format("YYYY-MM-DD"), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
      });
      return result;
    }

    beforeCreate() {
      this.$store.commit("fetchRecords");
    }

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

<style scoped lang="scss">
    ::v-deep { /*deep 语法*/
        .type-tabs-item {
            background: #c4c4c4;

            &.selected {
                background: white;

                &::after {
                    display: none;
                }
            }
        }

        .interval-tabs-item {
            height: 48px !important;
            font-size: 20px;
        }
    }
</style>
<style scoped lang="scss">
    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .title {
        @extend %item;
    }

    .record {
        background: white;
        @extend %item;
    }

    .notes {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>