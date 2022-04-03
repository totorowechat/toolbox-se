<template>
  <div>
    <div p15 flex>
      <n-card title="select what you need" size="small" :segmented="true" style="width: 100%;">
        <template #header-extra>
          <n-button text type="primary">see more</n-button>
        </template>
        <div class="card-list">
          <n-card class="card" hoverable title="Text to Uppercase" size="small" @click="openPage('TextToUppercase')">
            <p op60>turn all the elements in string to uppercase</p>
          </n-card>

          <n-card class="card" hoverable title="Text to Unicode" size="small" @click="openPage('TextToUnicode')">
            <p op60>turn all the elements in string to Unicode</p>
          </n-card>

          <n-card class="card" hoverable title="Image to Base64" size="small" @click="OnDev('Image to Base64 ')">
            <p op60>turn image to base64 code</p>
          </n-card>
          <n-card class="card" hoverable title="String to Md5" size="small" @click="openPage('StringToMd5')">
            <p op60>encrypt string to Md5 code</p>
          </n-card>

          <n-card class="card" hoverable title="Randon Num" size="small" @click="OnDev('Random Num ')">
            <p op60>select a random number</p>
          </n-card>

          <n-card class="card" hoverable title="Character Count" size="small" @click="openPage('statistics-word-num')">
            <p op60>Count the number of character</p>
          </n-card>

          <n-card class="card" hoverable title="Radix Convert" size="small" @click="openPage('translate-10-2')">
            <p op60>change decimal to binary system</p>
          </n-card>

          <n-card class="card" hoverable title="Text to ascll" size="small" @click="openPage('translate-text-2-ascll')">
            <p op60>change text to Ascii</p>
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
import { useMessage } from "naive-ui";

const router = useRouter()
const message = useMessage()

function openPage(title) {
  router.push('/'+ title)
}

function OnDev(m) {
  message.info(m + 'is on development/maintain, coming soon')
}

function randomColor(){
  var r=Math.floor(Math.random()*255);
  var g=Math.floor(Math.random()*255);
  var b=Math.floor(Math.random()*255);
  var rgb='rgb('+r+','+g+','+b+')';
  return rgb;
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
    background-image: linear-gradient(43deg, #a2588b, #bbb3ba);
    animation: bganimation 15s ease-in-out infinite;
    transform: translateZ(0);
  }
  .card:hover{
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  }
</style>