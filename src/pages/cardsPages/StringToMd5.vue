<script setup>
import { ref } from 'vue'
import {
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLayout,
  NLayoutHeader,
  NLayoutFooter,
  NH2,
  NButton,
  NInput,
  NSpace,
  NDivider,
} from 'naive-ui'

import PageHeader from '@/components/PageHeader.vue'

const message = ref(null)
const result = ref('')

function getResult() {
  fetch('/api/md5?input=' + message.value)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data)
      result.value = data['result']
    })
}
</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <n-layout position="absolute">
            <n-layout-header style="height: 64px; padding: 24px" bordered>
              <page-header />
            </n-layout-header>
            <div style="margin-top: 100px">
              <n-space vertical>
                <n-h2>Convert Text to MD5</n-h2>
                <n-input
                  v-model:value="message"
                  type="textarea"
                  placeholder="Input here"
                  style="width: 30%"
                />
                Result: {{ result }}
                <n-button type="info" @click="getResult">get result</n-button>
              </n-space>
            </div>
            <n-layout-footer
              bordered
              position="absolute"
              style="height: 64px; padding: 24px"
              >developed by Group 1</n-layout-footer
            >
          </n-layout>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
