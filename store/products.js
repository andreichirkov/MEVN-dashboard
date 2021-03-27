import crudStore from "@/store/generic"

export default {
  ...crudStore({
    url: 'products',
    name: 'products',
  })
}
