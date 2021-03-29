import GenericService from "@/services/generic.service";

//дистриктурируем props
const crudStore = ({ name, url }) => {
  const genericService = new GenericService({
    name, url
  })

  return {
    state: () => ({
      item: {},
      items: [],

      //из пропсов берем нейм чтобы сделать динамичный ключ
      itemError: null
    }),
    actions: {
      async fetchAll({ commit }) {
        try {
          const items = await genericService.fetchAll()
          commit('fetchItemsSuccess', items)
        } catch(err) {
          commit('fetchItemsFail', {
            errType: `${name} fetchAll failed`
          })
        }
      },
      async fetchOne({ commit }, id) {
        try {
          const item = await genericService.fetchOne(id)
          commit('fetchItemSuccess', item)
        } catch(err) {
          commit('fetchItemFail', {
            errType: `${name} fetchOne failed`
          })
        }
      },
      async create({ commit }, payload) {
        try {
          const item = await genericService.create(payload)
          commit('createItemSuccess', item)
        } catch(err) {
          commit('createItemFail', {
            errType: `${name} create failed`
          })
          throw err
        }
      },
      async update({ commit }, { payload, id }) {
        try {
          const item = await genericService.update(id, payload)
          commit('updateItemSuccess', item)
        } catch(err) {
          commit('updateItemFail', {
            errType: `${name} update failed`
          })
        }
      },
      async delete({ commit }, id) {
        try {
          const item = await genericService.delete(id)
          commit('deleteItemSuccess', item)
        } catch(err) {
          commit('deleteItemFail', {
            errType: `${name} delete failed`
          })
        }
      }
    },
    mutations: {
      updateItemSuccess(state, item) {
        state.item = item
      },
      updateItemFail(state, err) {
        state.itemError = err
      },

      createItemSuccess(state, item) {
        state.item = item
      },
      createItemFail(state, err) {
        state.itemError = err
      },

      fetchItemSuccess(state, item) {
        state.item = item
      },
      fetchItemFail(state, err) {
        state.itemError = err
      },

      fetchItemsSuccess(state, items) {
        state.items = items
      },
      fetchItemsFail(state, err) {
        state.itemError = err
      },

      deleteItemSuccess(state, item) {},
      deleteItemFail(state, err) {
        state.itemError = err
      },
    },
    getters: {
      item: (state) => state.item,
      items: (state) => state.items,

      //из пропсов берем нейм чтобы сделать динамичный ключ
      itemError: (state) => state.itemError
    }

  }
}

export default crudStore
