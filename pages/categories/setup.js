export const config = {
  name: 'Категории',
  crudName: 'categories',
  singleName: 'категорию',
  pageName: 'CategoryPage',
  formName: 'CategoryForm',
  formTitle: 'Форма категории',
}

export const columns = [
  { key: 'title', name: 'Название категории' }
]

export const actions = [
  {
    className: 'btn btn-warning',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id'//айди элемента который нужно изменить
  },
  {
    className: 'btn btn-danger',
    label: 'X',
    emit: 'onDelete',
    actionKey: '_id'//айди элемента который нужно изменить
  }
]
