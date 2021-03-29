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
      placeholder: 'Введите название игры',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость игры',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Описание игры',
      model: 'description',
      placeholder: 'Введите описание игры',
      hint: 'Max 50 characters',
      rows: 2,
      styleClasses: 'col-md-12'
    },
    {
      type: 'input',
      label: 'Количество',
      model: 'amount',
      placeholder: 'Введите доступное количество',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Изображение',
      model: 'imageUrl',
      placeholder: 'Введите ссылку на картинку',
      inputType: 'text',
      styleClasses: 'col-md-6'
    }
  ]
}
