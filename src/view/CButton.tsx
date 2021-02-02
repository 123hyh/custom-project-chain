import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    counter: {
      type: Number,
      required: true
    },
    selfClick: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return () => (
      <button onClick={() => props.selfClick()}>打印次数{props.counter}</button>
    )
  }
})
