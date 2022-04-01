<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<script>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";
import { NIcon, useMessage, NMenu} from "naive-ui";
import {
  HammerOutline as ToolsIcon,
  HomeOutline as HomeIcon,
  TextOutline as TextIcon,
  ImageOutline as ImageIcon,
  FingerPrintOutline as LockIcon,
  ChatbubbleEllipsesOutline as CommentsIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        path: "/"
      }
    }, { default: () => "Going Home" }),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px"
      }
    }
  },
  {
    label: "Tools",
    key: "tools",
    icon: renderIcon(ToolsIcon),
        children: [
          {
            label: () => h(RouterLink, {
              to: {
                path: "/TextTools"
              }
            }, { default: () => "Text Tools" }),
            key: "text-tools",
            icon: renderIcon(TextIcon)
          },
          {
            label: () => h(RouterLink, {
              to: {
                path: "/ImageTools"
              }
            }, { default: () => "Image Tools" }),
            key: "image-tools",
            icon: renderIcon(ImageIcon)
          },
          {
            label: () => h(RouterLink, {
              to: {
                path: "/EncryptTools"
              }
            }, { default: () => "Encrypt Tools" }),
            key: "encrypt-tools",
            icon: renderIcon(LockIcon)
          }
        ]
    },
    {
      label: () => h(RouterLink, {
        to: {
          path: "/Comments"
        }
      }, { default: () => "Comments" }),
      key: "comments",
      icon: renderIcon(CommentsIcon)
    }
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        message.info("[onUpdate:value]: " + JSON.stringify(key));
        message.info("[onUpdate:value]: " + JSON.stringify(item));
      }
    };
  },
  components:{
      NMenu
  }
});
</script>