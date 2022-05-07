<template>
  <label class="apl-radio" :class="{ 'is-checked': label === model }">
    <span class="apl-radio__input">
      <span class="apl-radio__inner"></span>
      <input
        type="radio"
        class="apl-radio__original"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="apl-radio__label">
      <slot>
        <!-- 当没有插槽时默认使用label值作为选项值 -->
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "AplRadio",
  inject: {
    radioGroup: {
      default: null,
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: "",
    },
    value: null,
    name: {
      type: String,
      defualt: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isInGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        //   有外包则触发父组件的input事件
        this.isInGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isInGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.radioGroup;
    },
  },
};
</script>

<style lang="scss" scoped>
.apl-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .apl-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .apl-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .apl-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.apl-radio.is-checked {
  .apl-radio__input {
    .apl-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .apl-radio__label {
    color: #409eff;
  }
}
</style>
