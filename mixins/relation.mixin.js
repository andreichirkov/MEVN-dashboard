export const relationsMixin = {
  methods: {
    //ищем по модели products и будем добавлять это в values
    setFields({ fieldKey, values = [] }) {
      const foundField = this.schema.fields.find(field => {
        return field.model === fieldKey
      })
      foundField.values = [...values]
    }
  }
}
