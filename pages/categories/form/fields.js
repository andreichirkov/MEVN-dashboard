// переходим на роут /products - выводится список продуктов
// переходим на роут /products/form - форма создания продукта
// products/form/:id - редактирование продукта (_id.vue)
// тут объявим поля
export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название категории',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Описание категории',
      model: 'description',
      placeholder: 'Введите описание категории',
      hint: 'Max 500 characters',

      rows: 10,
      styleClasses: 'col-md-12'
    },
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  products: []
}
