<template>
  <div class="apl-input" :class="{ 'apl-input__suffix': showIcon }">
    <input
      :type="inputType"
      class="apl-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="_handleInput"
    />
    <span class="apl-input__suffix">
      <i v-if="clearable && value" @click="clearInput">X</i>
      <i
        :class="{ 'password-icon-active': passwordVisible }"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
        >E</i
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "AplInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  computed: {
    showIcon() {
      return this.clearable || this.showPassword;
    },
    inputType() {
      return this.showPassword
        ? this.passwordVisible
          ? "text"
          : "password"
        : this.type;
    },
  },
  methods: {
    _handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clearInput() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>
<style lang="scss" scoped>
.apl-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.apl-input__suffix {
  .apl-input__inner {
    padding-right: 30px;
  }
  .apl-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.password-icon-active {
        color: rgb(13, 236, 151);
      }
    }
  }
}
</style>