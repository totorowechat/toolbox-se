
<template>
  <div>
    <n-form-item label="string">
      <n-input type="textarea" v-model:value="inputStr"></n-input>
    </n-form-item>
    <n-form-item label="result">
      <n-space>
        <n-tag type="info" v-for="item in statisticResult"
          >{{ item.value }}个{{ item.label }}</n-tag
        >
      </n-space>
    </n-form-item>
  </div>
</template>

<script>
import { NForm, NFormItem, NInput, NSpace, NTag } from 'naive-ui'
import { defineComponent } from 'vue'
const zhReg = /[\u4e00-\u9fa5]/ // 汉字
const numReg = /[0-9]/ // 数字
const enReg = /[a-zA-Z]/ // 字母
export default defineComponent({
  props: [],
  setup() {},
  components: {
    NForm,
    NFormItem,
    NInput,
    NSpace,
    NTag,
  },
  data() {
    return {
      inputStr: '',
    }
  },
  computed: {
    statisticResult() {
      const lenStatistics = {
        label: 'length',
        value: 0,
      }
      const zhStatistics = {
        label: 'chinese character',
        value: 0,
      }
      const enStatistics = {
        label: 'letter',
        value: 0,
      }
      const numStatistics = {
        label: 'number',
        value: 0,
      }
      const chartStatistics = {
        label: 'string',
        value: 0,
      }
      this.inputStr.split('').forEach((chart) => {
        lenStatistics.value += 1
        // 汉字
        if (zhReg.exec(chart)) {
          zhStatistics.value += 1
        }
        // 字母
        if (enReg.exec(chart)) {
          enStatistics.value += 1
        }
        // 数字
        if (numReg.exec(chart)) {
          numStatistics.value += 1
        }
        // 字符
        const charCode = chart.charCodeAt(0)
        if (charCode >= 0 && charCode <= 128) {
          chartStatistics.value += 1
        } else {
          chartStatistics.value += 2
        }
      })
      return [
        lenStatistics,
        zhStatistics,
        enStatistics,
        numStatistics,
        chartStatistics,
      ]
    },
  },
  watch: {},
  mounted() {},
  methods: {},
})
</script>

<style lang="" scoped></style>
