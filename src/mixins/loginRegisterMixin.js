import { mdiEmail, mdiLockQuestion } from '@mdi/js'

export const loginRegisterMixin = {
  data() {
    return {
      mdiEmail,
      mdiLockQuestion,
      showPassword: false,
      email: '',
      password: '',
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ]
    }
  }
}