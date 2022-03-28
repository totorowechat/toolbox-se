<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<script>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";
import { NIcon, useMessage, NMenu} from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        name: "home",
        params: {
          lang: "en-US"
        }
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
    icon: renderIcon(BookIcon),
        children: [
          {
            label: "Text Tools",
            key: "text-tools"
          },
          {
            label: "Video Tools",
            key: "video-tools"
          },
          {
            label: "Audio Tools",
            key: "audio-tools"
          }
        ]
    },
    {
    label: () => h("a", {
      href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
      target: "_blank",
      rel: "noopenner noreferrer"
    }, "Comments"),
    key: "comments"
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