
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
        <n-form-item label="initial value" path="minNum">
          <n-input-number
            v-model:value="form.minNum"
            placeholder="please input"
            clearable
            style="width: 240px"
          />
        </n-form-item>
        <n-form-item label="max value" path="maxNum">
          <n-input-number
            v-model:value="form.maxNum"
            placeholder="please input"
            clearable
            style="width: 240px"
          />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="getRandomNum">generate</n-button>
        </n-form-item>
      </n-form>
    </div>
    <div class="result-box">
      random number: <n-input
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
            message: 'please input initial value',
          },
          {
            type: 'number',
            trigger: ['blur', 'change'],
            validator(rule, value) {
              if (value >= maxNum) {
                return new Error('initial value must be smaller than the max value')
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
            message: 'please input max value',
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
