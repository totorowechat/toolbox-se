<script setup>

import Test  from '@/components/Test.vue'
import { ref } from "vue";
import {
    NLoadingBarProvider, NMessageProvider, NNotificationProvider, NDialogProvider,
    NLayout, NLayoutHeader, NLayoutFooter, NLayoutSider, NLayoutContent, NH2,
    NButton, NDatePicker, NInput, NInputGroup
} from 'naive-ui'

import SearchBar from '@/components/SearchBar.vue'
import PageHeader from '@/components/PageHeader.vue'
import SideMenu from '@/components/SideMenu.vue'
import AllCards from '@/components/Cards/AllCards.vue'

const message = ref("")

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
                            <n-h2>Text to Uppercase</n-h2>
                            <input v-model="message" type="textarea" size="small" placeholder="input here" />
                            <p>result is: {{ message.toUpperCase() }}</p>
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

.n-input{
    width: 50%;
}

.home {
    height: 100%;
}
</style>
