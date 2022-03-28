<template>
  <n-space vertical>
    
    <n-input
    v-model="text"
      type="textarea"
      size="small"
      placeholder="type here."
      :disabled="active"
      round
    />
    <n-input pair separator="to" clearable :disabled="!active">
      <template #affix>
        <n-icon :component="FlashOutline" />
      </template>
    </n-input>
    <n-input
      type="textarea"
      size="small"
      placeholder="result here."
      :disabled="!active"
      round
    />

    <template>
  <n-button type="info" @click="handleClick">
    Click Me to transfer
  </n-button>
</template>


  </n-space>
</template>

<script>
import { defineComponent, ref } from "vue";
import { FlashOutline } from "@vicons/ionicons5";
import { useMessage } from "naive-ui";


export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      FlashOutline,
      active: ref(false),
      handleClick() {
        message.info("Button Clicked");
      }
    };
  }
});
</script>