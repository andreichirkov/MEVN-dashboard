import crudStore from "@/store/generic"

export default {
  ...crudStore({
    url: 'categories',
    name: 'Categories',
  })
}
