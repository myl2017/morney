<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script type="ts">
  export default {
    name: "tags"
  };
</script>

<style lang="scss" scoped>
    .tags {
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;
            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }
        > .new {
            padding-top: 16px;
            display: flex;
            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
                padding: 0 4px;
            }
        }
    }
</style>