<template>
  <div class="apl-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AplCheckboxGroup',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>