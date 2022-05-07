<template>
  <transition name="dialog-fade">
    <!-- 遮罩层 self代表只有点击自己才触发 -->
    <div
      class="apl-dialog__wrapper"
      v-show="visible"
      @click.self="_handleClose"
    >
      <!-- 支持属性，宽度width，距离上面高度top -->
      <div class="apl-dialog" :style="{ width, marginTop: top }">
        <!-- v-slot:title -->
        <div class="apl-dialog__header">
          <slot name="title">
            <!-- 默认标题内容 -->
            <span class="apl-dialog__title">
              {{ title }}
            </span>
          </slot>
          <span class="apl-dialog__headerbtn" @click.self="_handleClose"
            >x</span
          >
        </div>
        <!-- 默认插槽 -->
        <div class="apl-dialog__body">
          <slot></slot>
        </div>
        <!-- v-slot:footer -->
        <div class="apl-dialog__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AplDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    footer: {
      type: Object,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    _handleClose() {
      // 使用sync语法糖
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang='scss' scoped>
.apl-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .apl-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .cs-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .apl-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .apl-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 1s;
}
.dialog-fade-leave-active {
  animation: fade 1s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>