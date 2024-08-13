import { useCounter } from '@vueuse/core'

const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)

defineExpose({
  inc,
  dec,
})

/** ### The Counter */
export default (
  <>
    <div style={{ display: 'flex', gap: '0.5em' }}>
      {count.value}
      <button class="inc" onClick={() => inc()}>
        +
      </button>
      <button class="dec" onClick={() => dec()}>
        -
      </button>
    </div>
    <div v-if={count.value > 3}>Count is greater than 3</div>
  </>
)
