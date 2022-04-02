<!--
 * @Description: 10进制转2进制
 * @Author: Happy_Pedestrian
 * @Date: 2022-03-29 17:33:11
 * @LastEditTime: 2022-03-29 20:54:59
 * @LastEditors: Happy_Pedestrian
-->
<template>
  <div>
    <n-form-item label="字符串">
      <n-input-number v-model:value="inputNum"></n-input-number>
    </n-form-item>
    <n-form-item label="二进制">
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
