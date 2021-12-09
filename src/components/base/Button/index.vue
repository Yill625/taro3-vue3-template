<template>
  <view :class="classes" :style="getStyle" @click="handleClick">
    <view class="nut-button__warp">
      <liang-icon class="nut-icon-loading" v-if="loading"></liang-icon>
      <liang-icon :class="icon" v-if="icon && !loading" :name="icon"></liang-icon>
      <view :class="{ text: icon || loading }" v-if="$slots.default">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Icon from '../Icon/index.vue'
import { PropType, CSSProperties, toRefs, computed, defineComponent } from 'vue'
const componentName = 'liang-' + 'button'
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'
export type ButtonShape = 'square' | 'round'
export default defineComponent({
  components: {
    [Icon.name]: Icon
  },
  props: {
    color: String,
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'round'
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal'
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    console.log(Icon.name)
    const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props)

    const handleClick = (event: MouseEvent) => {
      if (!loading.value && !disabled.value) {
        emit('click', event)
      }
    }

    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      }
    })

    const getStyle = computed(() => {
      const style: CSSProperties = {}
      if (color?.value) {
        if (plain.value) {
          style.color = color.value
          style.background = '#fff'
          if (!color.value?.includes('gradient')) {
            style.borderColor = color.value
          }
        } else {
          style.color = '#fff'
          style.background = color.value
        }
      }

      return style
    })

    return {
      handleClick,
      classes,
      getStyle,
      Icon
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
