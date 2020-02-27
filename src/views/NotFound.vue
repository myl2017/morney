<template>
<!--    <div> current for 404 Not Found page! </div>-->
    <div>
        <div>当前页面不存在，请检查网址是否正确</div>
        <div>
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script type="ts">
  export default {
    name: "NotFound"
  };
</script>

<style lang="scss" scoped>

</style>