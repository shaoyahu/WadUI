<template>
  <div
    class="apl-switch"
    :class="{'is-checked':value}"
    @click="_handleClick"
    :for="name"
  >
    <span
      class="apl-switch__core"
      ref="core"
    >
      <span class="apl-switch__button"></span>
    </span>
    <input
      type="checkbox"
      class="apl-switch__input"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'AplSwitch',
  props: {
    value: {
      type: Boolean,
      defualt: true
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  mounted () {
    this.$refs.input.checked = this.value
    this._setColor()
  },
  watch: {
    value: {
      handler () {
        this._setColor()
      },
      immediate: true
    }
  },
  methods: {
    _handleClick () {
      this.$emit('input', !this.value)
      this.$refs.input.checked = this.value
    },
    _setColor () {
      if (this.activeColor || this.inactiveColor) {
        if (this.$refs.core) {
          const color = !this.value ? this.activeColor : this.inactiveColor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.apl-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .apl-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .apl-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .apl-switch__button {
        transform: translateX(20px);
      }
    }
  }
}
.apl-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>