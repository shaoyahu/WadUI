<template>
  <div class="apl-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AplRadioGroup",
  provide() {
    return {
      radioGroup: this,
    };
  },
  props: {
    // 接收到value值 将来还需要触发当前组件的input事件
    value: null,
  },
};
</script>

<style lang='scss' scoped>
</style>