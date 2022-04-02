<!--
 * @Description: 统计字数、汉字、标点、数字、字母、字符
 * @Author: Happy_Pedestrian
 * @Date: 2022-03-29 17:33:24
 * @LastEditTime: 2022-03-29 20:46:23
 * @LastEditors: Happy_Pedestrian
-->
<template>
  <div>
    <n-form-item label="字符串">
      <n-input type="textarea" v-model:value="inputStr"></n-input>
    </n-form-item>
    <n-form-item label="统计结果">
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
        label: '长度',
        value: 0,
      }
      const zhStatistics = {
        label: '汉字',
        value: 0,
      }
      const enStatistics = {
        label: '字母',
        value: 0,
      }
      const numStatistics = {
        label: '数字',
        value: 0,
      }
      const chartStatistics = {
        label: '字符',
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
