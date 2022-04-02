<!--
 * @Description: 可指定范围内进行随机数字
 * @Author: Happy_Pedestrian
 * @Date: 2022-03-29 17:32:26
 * @LastEditTime: 2022-03-29 20:18:37
 * @LastEditors: Happy_Pedestrian
-->
<template>
  <div class="random-num-page">
    <div class="input-box">
      <n-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="small"
      >
        <n-form-item label="起始值" path="minNum">
          <n-input-number
            v-model:value="form.minNum"
            placeholder="请输入"
            clearable
            style="width: 240px"
          />
        </n-form-item>
        <n-form-item label="结束值" path="maxNum">
          <n-input-number
            v-model:value="form.maxNum"
            placeholder="请输入"
            clearable
            style="width: 240px"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="getRandomNum">生成</n-button>
        </n-form-item>
      </n-form>
    </div>
    <div class="result-box">
      随机数：<n-input
        v-model:value="resultNum"
        :disabled="true"
        placeholder=""
        style="width: 240px"
      />
    </div>
  </div>
</template>

<script>
import {
  NForm,
  NFormItem,
  NInputNumber,
  NInput,
  NButton,
  useMessage,
} from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  props: [],
  setup() {
    const message = useMessage()
    return {
      message,
    }
  },
  components: {
    NForm,
    NFormItem,
    NInputNumber,
    NInput,
    NButton,
  },
  data() {
    return {
      form: {
        minNum: undefined,
        maxNum: undefined,
      },
      resultNum: null,
    }
  },
  computed: {
    rules() {
      const { minNum, maxNum } = this.form
      return {
        minNum: [
          {
            type: 'number',
            required: true,
            trigger: ['blur', 'change'],
            message: '请输入范围起始值',
          },
          {
            type: 'number',
            trigger: ['blur', 'change'],
            validator(rule, value) {
              if (value >= maxNum) {
                return new Error('范围起始值必须小于范围结束值')
              }
              return true
            },
          },
        ],
        maxNum: [
          {
            type: 'number',
            required: true,
            trigger: ['blur', 'change'],
            message: '请输入范围结束值',
          },
        ],
      }
    },
  },
  watch: {},
  mounted() {},
  methods: {
    getRandomNum() {
      this.$refs?.formRef?.validate((errs) => {
        try {
          if (!errs) {
            const { minNum, maxNum } = this.form
            const random = Math.random()
            const gap = maxNum - minNum
            const result = minNum + gap * random
            this.resultNum = parseInt(result)
          } else {
            this.message.error(errs[0][0].message)
          }
        } catch (error) {
          console.log(error)
        }
      })
    },
  },
})
</script>

<style scoped>
.random-num-page {
  width: 100%;
  height: 100%;
}
.random-num-page .input-box {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.random-num-page .result-box {
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
