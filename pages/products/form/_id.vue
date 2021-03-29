<template>
  <div class="product-row">
    <div class="row">
      <div class="col-md-9">
        <CrudForm v-if="model"
                  title="Форма продукта"
                  :formSchema="schema"
                  :formModel="model"/>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { schema } from "@/pages/products/form/fields";

export default {
  name: "ProductForm",
  components: {
    CrudForm: () => import('@/components/CrudForm')
  },
  data() {
    return {
      //как будет выглядеть форма
      model: null,
      schema
    }
  },
  computed: {
    //диструктуризируем объект роута
    isUpdated: ({ $route: { params: { id } } }) => {
      return id !== undefined
    }
  },
  mounted() {
    if (this.isUpdated) {
      //получим объект с апи
      // this.model = {}
      return
    }
    //в другом случае сетим пустую модель
    this.setModel()
  },
  methods: {
    setModel() {
      this.model = {
        title: '',
        description: '',
        price: 0,
        amount: 0,
        imageURL: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
