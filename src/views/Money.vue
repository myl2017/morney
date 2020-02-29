<template>
    <Layout class-prefix="layout">
        <NumberPane/>
        <Types xxx="hi"/>
        <Notes/>
        <Tags/>
    </Layout>
</template>

<script type="ts">
  import NumberPane from '@/components/Money/NumberPane.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  export default {
    name: "Money",
    components: {Tags, Notes, Types, NumberPane}
  };
</script>


<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>