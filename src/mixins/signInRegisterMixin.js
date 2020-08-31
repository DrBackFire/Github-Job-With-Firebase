import { mdiEmail, mdiLockQuestion, mdiAccount } from '@mdi/js'

export const signInRegisterMixin = {
  data() {
    return {
      mdiEmail,
      mdiAccount,
      mdiLockQuestion,
      isLoading: false,
      showPassword: false,
      user: {
        email: '',
        password: '',
        name: '',
        title: ''
      },
      emailRules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ],
      generalRules: [v => !!v || 'This field is required']
    }
  }
}
