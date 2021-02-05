/*
 * @Author: huangyuhui
 * @Date: 2021-02-04 23:07:08
 * @LastEditTime: 2021-02-05 22:07:57
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 * @FilePath: \custom-project-chain\src\view\login\index.tsx
 */
import $style from './index.module.scss'
import { defineComponent, reactive, ref } from 'vue'
import { Button, Input, Form } from 'ant-design-vue'
import { addPermisstionRoute } from '@/router/hooks'
import { useRouter } from 'vue-router'
import { useForm } from '@ant-design-vue/use'
import { setLogin } from '@/utils/system'

const placeholders = {
  name: '请输入用户名',
  password: '请输入密码'
}

export default defineComponent(() => {
  const router = useRouter()
  const loading = ref(false)
  const state = reactive({
    /**
     * 用户名
     */
    userName: '',
    /**
     * 密码
     */
    password: '',
    /**
     * 验证码
     */
    validateCode: ''
  })

  /**
   * 校验信息
   */
  const { validate, validateInfos } = useForm(state, {
    userName: [
      {
        required: true,
        message: placeholders.name
      }
    ],
    password: [
      {
        required: true,
        message: placeholders.password
      }
    ]
  })

  /**
   * 登录方法
   */
  async function goLogin() {
    loading.value = true
    await validate()
    addPermisstionRoute()
    setLogin(true)
    await router.replace('/')
    loading.value = false
  }

  return () => (
    <div class={$style.login_wrap}>
      <div class={$style.user_wrap}>
        <Form model={state}>
          <Form.Item {...validateInfos.userName} name="userName">
            <Input
              v-model={[state.userName, 'value']}
              placeholder={placeholders.name.substr(3)}
              allowClear={true}
            ></Input>
          </Form.Item>
          <Form.Item {...validateInfos.password} name="password">
            <Input.Password
              v-model={[state.password, 'value']}
              placeholder={placeholders.password.substr(3)}
              allowClear={true}
            ></Input.Password>
          </Form.Item>
        </Form>
        <Button
          loading={loading.value}
          block
          type="primary"
          onClick={() => goLogin()}
        >
          登录
        </Button>
      </div>
    </div>
  )
})
