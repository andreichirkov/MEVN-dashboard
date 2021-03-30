<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
        <form>
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
          <button type="submit" class="btn btn-black">Войти</button>
          <!--        <button type="submit" class="btn btn-secondary">Register</button>-->
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
      }
    }
  },
  methods: {
    async onLogin() {

    }
  }
}
</script>

<style scoped>

</style>
