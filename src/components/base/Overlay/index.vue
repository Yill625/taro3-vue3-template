<template>
  <Transition name="overlay-fade">
    <view
      v-if="lockScroll"
      :class="classes"
      @click="onClick"
      :style="style"
      v-show="visible"
      :catch-move="true"
    >
      <slot></slot>
    </view>
    <view v-else :class="classes" @click="onClick" :style="style" v-show="visible">
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed, defineComponent } from 'vue'

const componentName = 'nut-' + 'overlay'
const overlayProps = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  overlayClass: {
    type: String,
    default: ''
  },
  overlayStyle: {
    type: Object as PropType<CSSProperties>
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
}

export { overlayProps }

export default defineComponent({
  props: overlayProps,
  emits: ['click', 'update:visible'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      }
    })

    const style = computed(() => {
      return {
        animationDuration: `${props.duration}s`,
        ...props.overlayStyle
      }
    })

    const onClick = (e: MouseEvent) => {
      emit('click', e)
      if (props.closeOnClickOverlay) {
        emit('update:visible', false)
      }
    }

    return { classes, style, onClick }
  }
})
</script>

<style lang="scss">
$overlay-bg-color: rgba(0, 0, 0, 0.7) !default;
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.5s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.nut-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $overlay-bg-color;
  z-index: 2000;
}

.nut-overflow-hidden {
  overflow: hidden !important;
}
</style>
