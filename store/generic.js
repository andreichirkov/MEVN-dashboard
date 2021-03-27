import GenericService from "@/services/generic.service";

//дистриктурируем props
const crudStore = ({ name, url, keyName }) => {
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
        console.log(2)
        try {
          console.log(3)
          const items = await genericService.fetchAll()
          commit('fetchItemsSuccess', items)
        } catch(err) {
          console.log(4)
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
        }
      },
      async update({ commit }, { payload, id }) {
        try {
          const item = await genericService.create(id, payload)
          commit('updateItemSuccess', item)
        } catch(err) {
          commit('updateFail', {
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
      updateSuccess(state, item) {
        state.item = item
      },
      updateFail(state, err) {
        state.itemError = err
      },

      createSuccess(state, item) {
        state.item = item
      },
      createFail(state, err) {
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
