<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <Card>
          <CrudForm v-if="model"
                    @on-submit="onFormSubmit"
                    :title="config.formTitle"
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
import { schema, defaultForm } from "@/pages/categories/form/fields"
import { mapActions, mapGetters } from "vuex"
import { config } from "../setup"
import { relationsMixin } from "@/mixins/relation.mixin"

export default {
  name: config.formName,
  mixins: [relationsMixin],
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
  },
  data() {
    return {
      //как будет выглядеть форма
      model: null,
      schema,
      config,
    }
  },
  computed: {
    ...mapGetters({
      item: `${config.crudName}/item`,
      error: `${config.crudName}/itemError`,

      products: 'products/items'
    }),
    //диструктуризируем объект роута
    isUpdating: ({ $route: { params: { id } } }) => {
      return id !== undefined
    }
  },
  async mounted() {
    await this.fetchProducts()
    this.setFields({ fieldKey: 'products', values: this.products })
    if (this.isUpdating) {
      console.log('inside')
      //ждем получения одного продукта по id
      await this.fetchItem(this.$route.params.id)

      //в model помещаем product из геттеров
      this.model = { ...this.item }
      return
    }
    //в другом случае сетим пустую модель
    this.setModel()
  },
  methods: {
    ...mapActions({
      createItem: `${config.crudName}/create`,
      fetchItem: `${config.crudName}/fetchOne`,
      updateItem: `${config.crudName}/update`,

      fetchProducts: 'products/fetchAll'
    }),
    setModel() {
      this.model = {
      ...defaultForm
      }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        //возвращаем массив всех айдишников
        products: this.model.products.map(product => product._id)
      }

      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel
      })
      this.$router.back()
    },
    async onItemCreate() {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        await this.onItemUpdate()
        return
      }
      await this.onItemCreate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
