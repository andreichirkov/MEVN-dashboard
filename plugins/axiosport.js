import { setClient } from '@/services/request.service'

export default context => {
  setClient(context.$axios)
}
