export const columns = [
  { key: 'title', name: 'Название продукта' },
  { key: 'amount', name: 'Доступное кол-во' },
  { key: 'price', name: 'Цена' }
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
