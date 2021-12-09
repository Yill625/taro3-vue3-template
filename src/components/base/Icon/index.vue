<script lang="ts">
import { h, defineComponent } from 'vue'

export const pxCheck = (value: string | number): string => {
  return isNaN(Number(value)) ? String(value) : `${value}px`
}

const componentName = 'liang-' + 'icon'
export default defineComponent({
  name: componentName,
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    classPrefix: { type: String, default: 'liang-icon' },
    fontClassName: { type: String, default: 'liang-iconfont' },
    color: { type: String, default: '' },
    tag: { type: String, default: 'img' }
  },
  emits: ['click'],

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', event)
    }

    const isImage = () => {
      return props.name ? props.name.indexOf('/') !== -1 : false
    }

    return () => {
      const _isImage = isImage()
      return h(
        _isImage ? 'img' : props.tag,
        {
          class: _isImage
            ? `${componentName}__img`
            : `${props.fontClassName} ${componentName} ${props.classPrefix}-${props.name}`,
          style: {
            color: props.color,
            fontSize: pxCheck(props.size),
            width: pxCheck(props.size),
            height: pxCheck(props.size)
          },
          onClick: handleClick,
          src: _isImage ? props.name : ''
        },
        slots.default?.()
      )
    }
  }
})
</script>
<style lang="scss">
@import './index.scss';
</style>
