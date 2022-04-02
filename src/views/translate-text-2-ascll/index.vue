<!--
 * @Description: 文本转ascll
 * @Author: Happy_Pedestrian
 * @Date: 2022-03-29 17:34:35
 * @LastEditTime: 2022-03-29 21:06:20
 * @LastEditors: Happy_Pedestrian
-->
<template>
  <div>
    <n-form-item label="字符串">
      <n-input type="textarea" v-model:value="inputText"></n-input>
    </n-form-item>
    <n-form-item label="二进制">
      <n-space>
        <n-tag type="info" v-for="item in resultText"
          >"{{ item.char }}" ascll:{{ item.ascll }}</n-tag
        >
      </n-space>
    </n-form-item>
  </div>
</template>

<script>
import { NFormItem, NInput, NSpace, NTag } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  props: [],
  setup() {},
  components: {
    NFormItem,
    NInput,
    NSpace,
    NTag,
  },
  data() {
    return {
      inputText: '',
    }
  },
  computed: {
    resultText() {
      return this.inputText.split('').map((char) => {
        return {
          char,
          ascll: char.charCodeAt(0),
        }
      })
    },
  },
  watch: {},
  mounted() {},
  methods: {},
})
</script>

<style scoped></style>
