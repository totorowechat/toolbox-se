<script setup>
import {ref} from 'vue'
const message = ref("")
</script>

<template>
  <div class="banner">
    <h2>Design a safe, convenient and free toolbox</h2>
    <div class="search">
      <div class="el-input">
        <input
          type="text"
          autocomplete="off"
          placeholder="search for what you want!"
          class="el-input__inner"
        />
      </div>
      <button type="button" class="el-button el-button--primary">
        <!----><!----><span
          ><span class="i-icon i-icon-search">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
              <path
                d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linejoin="round"
              ></path>
              <path
                d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M33.2218 33.2218L41.7071 41.7071"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </span>
      </button>
    </div>
    <div class="data">
      <div class="el-row" style="margin-left: -6px; margin-right: -6px">
        <div
          class="el-col el-col-8"
          style="padding-left: 6px; padding-right: 6px"
        >
          <h4>258</h4>
          <p>Tool numbers</p>
        </div>
        <div
          class="el-col el-col-8"
          style="padding-left: 6px; padding-right: 6px"
        >
          <h4>1,078,046</h4>
          <p>Use time</p>
        </div>
        <div
          class="el-col el-col-8"
          style="padding-left: 6px; padding-right: 6px"
        >
          <h4>92,180</h4>
          <p>User numbers</p>
        </div>
      </div>
    </div>
  </div>

  <div style="margin-top: 100px;">
    <p>Message is: {{ message.toUpperCase() }}</p>
    <input v-model="message" placeholder="edit me" />
  </div>

  <!-- <footer
    class="el-footer"
    style="height: 380px; background-color: rgb(255, 255, 255)"
    data-v-6c8c3db5=""
  >
    <div class="footer" data-v-6c8c3db5="">
      <div class="contert el-row">
        <div class="el-col el-col-4">
          <h3>视频工具</h3>
          <p>
            <a
              target="_blank"
              alt="视频剪切"
              href="https://www.67tool.com/video/edit/cut"
            >
              视频剪切
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="视频裁剪"
              href="https://www.67tool.com/video/edit/cutting"
            >
              视频裁剪
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="视频转换"
              href="https://www.67tool.com/video/convert?to=mp4&amp;type=all"
            >
              视频转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="视频压缩"
              href="https://www.67tool.com/video/compress"
            >
              视频压缩
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="视频拼接"
              href="https://www.67tool.com/video/merge"
            >
              视频拼接
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="视频调速"
              href="https://www.67tool.com/video/speed"
            >
              视频调速
            </a>
          </p>
        </div>
        <div class="el-col el-col-4">
          <h3>音频工具</h3>
          <p>
            <a
              target="_blank"
              alt="音频剪切"
              href="https://www.67tool.com/audio/edit/cut"
            >
              音频剪切
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="音频转换"
              href="https://www.67tool.com/audio/convert?to=mp3&amp;type=all"
            >
              音频转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="音频压缩"
              href="https://www.67tool.com/audio/compress"
            >
              音频压缩
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="音频合并"
              href="https://www.67tool.com/audio/merge"
            >
              音频合并
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="音频调速"
              href="https://www.67tool.com/audio/edit/speed"
            >
              音频调速
            </a>
          </p>
        </div>
        <div class="el-col el-col-4">
          <h3>文档处理</h3>
          <p>
            <a
              target="_blank"
              alt="PDF压缩"
              href="https://www.67tool.com/pdf/compress"
            >
              PDF压缩
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="PDF合并"
              href="https://www.67tool.com/pdf/merge"
            >
              PDF合并
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="PDF拆分"
              href="https://www.67tool.com/pdf/range"
            >
              PDF拆分
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="PDF提取"
              href="https://www.67tool.com/pdf/extract"
            >
              PDF提取
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="PDF删除"
              href="https://www.67tool.com/pdf/delItem"
            >
              PDF删除
            </a>
          </p>
        </div>
        <div class="el-col el-col-4">
          <h3>图片工具</h3>
          <p>
            <a
              target="_blank"
              alt="图片压缩"
              href="https://www.67tool.com/images/imgCompress"
            >
              图片压缩
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="图片转换"
              href="https://www.67tool.com/images/imgConvert?to=png"
            >
              图片转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="图片放大"
              href="https://www.67tool.com/images/enlarge"
            >
              图片放大
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="图片编辑"
              href="https://www.67tool.com/images/edit"
            >
              图片编辑
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="图片调色"
              href="https://www.67tool.com/images/tinting"
            >
              图片调色
            </a>
          </p>
        </div>
        <div class="el-col el-col-4">
          <h3>单位转换</h3>
          <p>
            <a
              target="_blank"
              alt="面积转换"
              href="https://www.67tool.com/converter/area"
            >
              面积转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="时间转换"
              href="https://www.67tool.com/converter/time"
            >
              时间转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="体积转换"
              href="https://www.67tool.com/converter/volume"
            >
              体积转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="温度转换"
              href="https://www.67tool.com/converter/temperature"
            >
              温度转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="字节转换"
              href="https://www.67tool.com/converter/digital"
            >
              字节转换
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="速度转换"
              href="https://www.67tool.com/converter/speed"
            >
              速度转换
            </a>
          </p>
        </div>
        <div class="el-col el-col-4">
          <h3>支持服务</h3>
          <p>
            <a
              target="_blank"
              alt="关于我们"
              href="https://www.67tool.com/about"
            >
              关于我们
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="意见反馈"
              href="https://www.67tool.com/feedback"
            >
              意见反馈
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="隐私政策"
              href="https://www.67tool.com/privacy"
            >
              隐私政策
            </a>
          </p>
          <p>
            <a
              target="_blank"
              alt="使用条款"
              href="https://www.67tool.com/terms"
            >
              使用条款
            </a>
          </p>
        </div>
        <div class="link el-col el-col-24">
          友情链接:
          <a href="https://www.67tool.com" target="_blank">即时工具</a
          ><a href="https://www.67tool.com" target="_blank">67工具网</a
          ><a href="https://www.aewz.com" target="_blank">简视频</a
          ><a href="https://www.76ppt.com" target="_blank">ppt设计</a
          ><a href="https://www.91sotu.com" target="_blank">搜图导航</a
          ><a href="https://www.vlogxz.com" target="_blank">vlog剧本</a
          ><a href="https://ailongmiao.com" target="_blank">龙喵网址导航</a>
        </div>
      </div>
      <div class="copyright">
        Copyright ©2020-2022 深圳市搜图信息科技有限公司 |
        <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank">
          粤ICP备20050717号
        </a>
      </div>
    </div>
  </footer> -->
</template>

<style scoped>
.banner {
  position: relative;
  height: 300px;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(43deg, #4158d0, #c850c0);
  background-size: 400%;
  background-position: 0 100%;
  animation: bganimation 15s ease-in-out infinite;
  transform: translateZ(0);
}
.banner h2 {
  font-size: 28px;
  line-height: 90px;
  color: #fff;
  font-weight: 500;
  padding-top: 32px;
}
.banner .search {
  width: 480px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.banner .search .el-input input {
  font-size: 14px !important;
  height: 36px;
  text-indent: 6px;
  border-radius: 36px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 14px;
  border: none;
  background: #f6f6f6;
  width: 100%;
}
.banner .search .el-button {
  width: 80px;
  height: 36px;
  border-radius: 36px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 8px 0;
  background: #068eff;
  border: #068eff;
  color: #282828;
}
.i-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
svg {
  vertical-align: middle;
  text-anchor: middle;
  dominant-baseline: middle;
}
.i-icon svg {
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
}
.banner .data {
    margin: 50px;
  background-color: #fff;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  /* width: 890px; */
  height: 120px;
  /* margin: 0 auto; */
  border-radius: 8px;
}
.el-row {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.banner .data .el-col:first-child,
.banner .data .el-col:nth-child(2) {
  border-right: 1px solid #eee;
}
.banner .data .el-col,
.banner .data .el-row {
  height: 100%;
}
.el-col-8 {
  width: 33.33333%;
}
[class*='el-col-'] {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-footer {
  padding: 0 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.el-footer,
.el-main {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, 微软雅黑, Arial, sans-serif;
}
.el-footer {
  /* margin-top: 60px; */
  padding: 0 !important;
}
[data-theme='light-theme'] .footer {
  color: #333435;
}

.footer {
  width: 100%;
}
.footer .copyright {
  text-align: center;
  line-height: 40px;
  border-top: 1px solid rgba(188, 198, 208, 0.4);
  font-size: 12px;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
