<template>
  <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
  <nut-dialog
    title="基础弹框"
    content="这是基础弹框。"
    v-model:visible="visible1"
    @cancel="onCancel"
    @ok="onOk"
  />

  <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
  <nut-dialog content="这是无标题弹框。" v-model:visible="visible2" @cancel="onCancel" @ok="onOk" />

  <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
  <nut-dialog
    no-cancel-btn
    title="温馨提示"
    content="这是提示弹框。"
    v-model:visible="visible3"
    @cancel="onCancel"
    @ok="onOk"
  />

  <nut-cell title="异步关闭" @click="componentClick"></nut-cell>
  <nut-dialog
    title="异步关闭"
    :content="closeContent"
    :visible="visible4"
    @cancel="onCancel"
    @ok="onOkAsync"
  />

  <nut-cell :title="`基本用法`" desc="" @click="base = true"></nut-cell>
  <NutSku
    v-model:visible="base"
    :sku="data.sku"
    :goods="data.goods"
    @selectSku="selectSku"
    @clickBtnOperate="clickBtnOperate"
    @close="close"
  ></NutSku>
  <!-- <nut-watermark class="mark1" z-index="1" content="nut-ui-water-mark"></nut-watermark> -->
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { Dialog as NutDialog, Cell as NutCell, Sku as NutSku } from '@nutui/nutui-taro'
import type { Sku, Goods } from '@/api/goods'
import { getGoods } from '@/api/goods'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const closeContent = ref('')
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))
const countDown = (second: number) => `倒计时 ${second} 秒`

const onCancel = () => {
  console.log('event cancel')
}
const onOk = () => {
  console.log('event ok')
}
const onOkAsync = () => {
  sleep()
    .then(() => {
      closeContent.value = countDown(2)
      return sleep()
    })
    .then(() => {
      closeContent.value = countDown(1)
      return sleep()
    })
    .then(() => {
      closeContent.value = countDown(0)
    })
    .then(() => {
      visible4.value = false
    })
}

const baseClick = (): void => {
  visible1.value = true
}
const noTitleClick = () => {
  visible2.value = true
}
const tipsClick = () => {
  visible3.value = true
}

const componentClick = () => {
  closeContent.value = `点击确定时3s后关闭`
  visible4.value = true
}

const base = ref(false)
const data = reactive<{
  sku: Sku[]
  goods: Goods | {}
}>({
  sku: [],
  goods: {},
})

onMounted(async () => {
  const res = await getGoods()
  const { Sku, Goods } = res
  data.sku = Sku
  data.goods = Goods
})
// 切换规格类目
const selectSku = (ss) => {
  const { sku, parentIndex } = ss
  if (sku.disable) return false
  data.sku[parentIndex].list.forEach((s) => {
    s.active = s.id === sku.id
  })
  data.goods = {
    skuId: sku.id,
    price: '4599.00',
    imagePath:
      'https//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
  }
}
// 底部操作按钮触发
const clickBtnOperate = (op: string) => {
  console.log('点击了操作按钮', op)
}
// 关闭商品规格弹框
const close = () => {}
</script>

<style lang="scss">
.index {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
