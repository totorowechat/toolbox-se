
<template>
  <div>
    <n-form-item label="string">
      <n-input type="textarea" v-model:value="inputText"></n-input>
    </n-form-item>
    <n-form-item label="binary">
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
