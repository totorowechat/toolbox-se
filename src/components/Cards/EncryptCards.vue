<template>
  <div>
    <div p15 flex>
      <n-card title="select what you need" size="small" :segmented="true" style="width: 100%;">
        <template #header-extra>
          <n-button text type="primary">see more</n-button>
        </template>
        <div class="card-list">
          <n-card class="card" hoverable title="String to Md5" size="small" @click="openPage('StringToMd5')">
            <p op60>turn all the elements in string to uppercase</p>
          </n-card>

        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, h } from "vue";
import {NCard, NButton} from 'naive-ui'
import { useRouter, RouterLink } from "vue-router";

const router = useRouter()
function openPage(title) {
  router.push('/'+ title)
}


</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
    width: 250px;
    flex-shrink: 0;
    margin: 10px 0;
    cursor: pointer;
    background-color: #8abce0;

    
  }
  .card:hover{
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  }
</style>