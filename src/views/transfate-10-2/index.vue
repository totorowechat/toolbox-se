
<template>
  <div>
    <n-form-item label="string">
      <n-input-number v-model:value="inputNum"></n-input-number>
    </n-form-item>
    <n-form-item label="binary">
      <n-input :value="resultNum"></n-input>
    </n-form-item>
  </div>
</template>

<script>
import { NFormItem, NInputNumber, NInput } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  props: [],
  setup() {},
  components: {
    NFormItem,
    NInputNumber,
    NInput,
  },
  data() {
    return {
      inputNum: 0,
    }
  },
  computed: {
    resultNum() {
      return this.inputNum.toString(2)
    },
  },
  watch: {},
  mounted() {},
  methods: {},
})
</script>

<style scoped></style>
