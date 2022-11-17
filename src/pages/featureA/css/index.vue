<template>
  <div class="ellipsis-test ellipsis">测试超行省略fffffffffffffff</div>
  <p>1px</p>
  <div class="van-hairline--top"></div>
  <div class="foot safe-area-bottom">
    <nut-button type="primary" block>底部安全区域</nut-button>
  </div>
</template>

<style lang="scss">
.ellipsis-test {
  width: 120px;
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
