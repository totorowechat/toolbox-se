<script setup>
import { NSpace } from 'naive-ui'
import { ref } from 'vue'
const message = ref('')
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

  <!-- <div style="margin-top: 100px">
  </div>
  <div class="item-list">
    <a href=""></a>
    <n-space>
      <router-link to="/random-num" class="block"><h4>RandonNum</h4><p>select a random number</p></router-link>
      
      <router-link to="/statistics-word-num" class="block"><h4>CharacterCount</h4><p>Count the number of character</p></router-link>
      <router-link to="/translate-10-2" class="block"><h4>RadixConvert</h4><p>change decimal to binary system</p></router-link>
      <router-link to="/translate-text-2-ascll" class="block"><h4>Texttoascll</h4><p>change text to Ascii</p></router-link>
    </n-space>
  </div> -->

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
.item-list {
    overflow: hidden;
    padding: 0 8px;
    display: flex;
    text-decoration: none;
    flex-wrap: wrap;
    
}
.item-list .block {
    text-decoration: none;
    width: 200px;
    border: 1px solid;
    margin: 12px 0;
    padding: 0 12px!important;
    flex: 0 0 20%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    display: block;
    -webkit-box-shadow: 5px 10px 10px 0 #ecf0f3;
    box-shadow: 5px 10px 10px 0 #ecf0f3;
    border-radius: 8px;
    background: #fff;
    padding: 20px;
    flex: 0 0 33.333%;
    background-image: linear-gradient(43deg, #81d041, #507ac8);
    animation: bganimation 15s ease-in-out infinite;
    background-size: 400%;
    background-position: 0 100%;
    transform: translateZ(0);
}
.item-list .block h4 {
    font-size: 18px;
    line-height: 34px;
    color: rgb(252, 248, 248);
    font-weight: 500;
    padding-top: 14px;
    height: 34px;
    overflow: hidden;
}
.item-list .block p {
    color: rgb(250, 245, 245);
    margin-bottom: 8px;
    line-height: 24px;
    height: 48px;
    overflow: hidden;
    text-align: center;
    word-break: break-all;
    padding-top: 5px;
}
</style>
