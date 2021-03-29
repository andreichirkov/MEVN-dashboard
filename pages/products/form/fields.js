// переходим на роут /products - выводится список продуктов
// переходим на роут /products/form - форма создания продукта
// products/form/:id - редактирование продукта (_id.vue)
// тут объявим поля
export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название игры',
      madel: 'title',
      placeholder: 'Введите название игры',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Стоимость игры',
      madel: 'price',
      placeholder: 'Введите стоимость игры',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Описание игры',
      madel: 'description',
      placeholder: 'Введите описание игры',
      hint: 'Max 50 characters',
      rows: 10,
      styleClasses: 'col-md-12'
    },
    {
      type: 'input',
      label: 'Количество',
      madel: 'amount',
      placeholder: 'Введите доступное количество',
      inputType: 'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      label: 'Изображение',
      madel: 'imageUrl',
      placeholder: 'Введите ссылку на картинку',
      inputType: 'text',
      styleClasses: 'col-md-6'
    }
  ]
}
