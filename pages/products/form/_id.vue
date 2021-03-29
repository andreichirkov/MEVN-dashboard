<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <Card>
          <CrudForm v-if="model"
                    @on-submit="onFormSubmit"
                    title="Форма продукта"
                    :formSchema="schema"
                    :formModel="model" />
          <p class="text-danger">{{ error }}</p>
        </Card>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
import { schema } from "@/pages/products/form/fields"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "ProductForm",
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
  },
  data() {
    return {
      //как будет выглядеть форма
      model: null,
      schema
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/item',
      error: 'products/itemError'
    }),
    //диструктуризируем объект роута
    isUpdating: ({ $route: { params: { id } } }) => {
      return id !== undefined
    }
  },
  async mounted() {
    if (this.isUpdating) {
      console.log('inside')
      //ждем получения одного продукта по id
      await this.fetchProduct(this.$route.params.id)

      //в model помещаем product из геттеров
      this.model = { ...this.product }
      return
    }
    //в другом случае сетим пустую модель
    this.setModel()
  },
  methods: {
    ...mapActions({
      createProduct: 'products/create',
      fetchProduct: 'products/fetchOne',
      updateProduct: 'products/update'
    }),
    setModel() {
       this.model = {
        title: '',
        description: '',
        price: 0,
        amount: 0,
        imageURL: ''
      }
    },
    async onProductUpdate() {
      await this.updateProduct({
        id: this.$route.params.id,
        payload: this.model
      })
      this.$router.back()
    },
    async onProductCreate() {
      await this.createProduct(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
         await this.onProductUpdate()
        return
      }
      await this.onProductCreate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
