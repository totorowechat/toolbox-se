<script setup>

</script>

<script>
import { defineComponent } from "vue";
import { useMessage, NPageHeader, NSpace, NDropdown, NButton, NAvatar } from "naive-ui";

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      handleBack() {
        message.info("[onBack]");
      },
      options: [
        {
          label: "switch account",
          key: "1"
        },
        {
          label: "logout",
          key: "2"
        }
      ]
    };
  },
  components:{
    NPageHeader, NSpace, NDropdown, NButton, NAvatar
  }
});
</script>


<template>
  <header class="header">
    <n-page-header subtitle="">
    <template #title>
      <a
        href="/"
        style="text-decoration: none; color: inherit"
      >
        Toolbox
      </a>
    </template>
    <template #avatar>
      <n-avatar
        src="./assets/logo.png"
      />
    </template>
    <template #extra>
      <n-space>
        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            Account
          </n-button>
        </n-dropdown>
      </n-space>
    </template>
  </n-page-header>
  </header>
</template>


<style scoped>
.header {
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>