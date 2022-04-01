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
                        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
                            <n-layout-sider
                                bordered
                                content-style="padding: 24px;"
                                show-trigger="arrow-circle">
                            <side-menu/> 
                            </n-layout-sider>
                            <n-layout content-style="padding: 0px 24px 24px 24px;">
                                <search-bar />
                                  <all-cards/>
                            </n-layout>
                        </n-layout>
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
