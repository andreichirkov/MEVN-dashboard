<template>
  <div class="panel-body">
    <h2>{{ title }}</h2>
    <form @submit.prevent="validate">
<!--ref на форму, чтобы в любой момент получить к ней доступ-->
      <vue-form-generator :options="formOptions"
                          :model="formModel"
                          :schema="formSchema"
                          ref="form"
                          @model-updated="onUpdate">
      </vue-form-generator>
      <hr>

      <div class="text-center">
        <button class="btn btn-success" type="submit">
          Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
//он использует вьюФормГенератор и что то возвращает + валидация
//@model-updated когда модель обновилась
export default {
  name: "CrudForm",
  props: {
    formSchema: {
      type: Object,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    },
    formOptions: {
      type: Object,
      default: () => ({
        validateAsync: true
      })
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    //благодаря рефу можно вызывать внутренние методы компонента
    async validate() {
      console.log('validate fn')
      const errors = await this.$refs.form.validate()
      const isValid = errors.length === 0

      if (isValid) {
        this.$emit('on-submit', this.formModel)
      }
    },
    onUpdate(val, field) {
      //тайтл апдейт, прайс апдейт и тд
      this.$emit(`on${field}Update`, val)
    }
  },
  mounted() {}
}
</script>

<style scoped>

</style>
