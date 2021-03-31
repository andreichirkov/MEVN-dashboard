<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
        <form @submit.prevent="onLogin">
          <FieldValidator name="email"
                          v-slot="{ errors }"
                          rules="email|required"
                          mode="lazy"
                          slim>
            <div class="form-group">
              <label>Почта</label>
              <input type="text"
                     v-model="loginForm.email"
                     name="email"
                     :class="{'is-invalid': errors.length > 0}"
                     class="form-control"
                     placeholder="Почта">
              <div v-for="(error, key) in errors"
                   :key="`email-${key}`"
                   class="invalid-feedback"
                   v-show="errors">{{ error }}
              </div>
            </div>
          </FieldValidator>
          <FieldValidator name="password"
                          v-slot="{ errors }"
                          rules="required"
                          mode="lazy"
                          slim>
            <div class="form-group">
              <label>Пароль</label>
              <input type="password"
                     v-model="loginForm.password"
                     name="password"
                     class="form-control"
                     :class="{'is-invalid': errors.length > 0}"
                     placeholder="Пароль">
              <div v-for="(error, key) in errors"
                     :key="`password-${key}`"
                     class="invalid-feedback"
                     v-show="errors">{{ error }}
              </div>
            </div>
          </FieldValidator>
          <button type="submit" class="btn btn-success">Войти</button>
          <!--        <button type="submit" class="btn btn-secondary">Register</button>-->
          <div v-if="loginFormError" class="login-form_network-error">
            {{ loginFormError }}
          </div>
        </form>
      </FormValidator>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: "LoginPage",
  layout: 'unauthorized',
  components: {
    //меняем названия для нормального восприятия
    FormValidator: ValidationObserver,
    FieldValidator: ValidationProvider
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginFormError: null
    }
  },
  methods: {
    async onLogin() {
      //включает валидацию по нажатию на кнопку
      const isCorrect = await this.$refs.authForm.validate()
      if (isCorrect) {
        try {
          const response = await this.$auth.loginWith('local', {
            data: this.loginForm
          })
          this.$router.push('/products')
        } catch (err) {
          this.loginFormError = err.response.data.message
          console.log(err.response)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form_network-error {
  border-radius: 6px;
  padding: 10px;
  color: red;
  background: lightpink;
  margin-top: 20px;
}
</style>
