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
      <>
        <button onClick={() => props.selfClick()}>打印</button>
        <p>次数{props.counter}</p>
      </>
    )
  }
})
