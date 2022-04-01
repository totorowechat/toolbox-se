<script setup>

import Test  from '@/components/Test.vue'
import { ref } from "vue";
import {
    NLoadingBarProvider, NMessageProvider, NNotificationProvider, NDialogProvider,
    NLayout, NLayoutHeader, NLayoutFooter, NLayoutSider, NLayoutContent, NH2,
    NButton, NDatePicker, NInput, NInputGroup, NSpace, NH1,
} from 'naive-ui'

import SearchBar from '@/components/SearchBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import SideMenu from '@/components/SideMenu.vue'
import AllCards from '@/components/Cards/AllCards.vue'

const message = ref("")

function onClick(){
  
}

</script>

<template>
    <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
                <n-dialog-provider>
                    <n-layout position="absolute">
                        <n-layout-header style="height: 64px; padding: 24px" bordered>
                            <page-header/>
                        </n-layout-header>
                        <div style="margin-top: 100px;">
                          <n-space vertical>
                            <n-h2>Text to Unicode</n-h2>
                            <n-input v-model:value="value" type="textarea" placeholder="Input here" style="width:30%"/>
                            <n-button type="info" @click="onClick()">get result</n-button>




                            <input v-model="message" placeholder="edit me" />
                            <p>Message is: {{ message.toUpperCase() }}</p>
                          </n-space>
                          
                        </div>
                        <n-layout-footer
                            bordered
                            position="absolute"
                            style="height: 64px; padding: 24px"
                        >developed by Group 1</n-layout-footer>
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

.home {
    height: 100%;
}
</style>
