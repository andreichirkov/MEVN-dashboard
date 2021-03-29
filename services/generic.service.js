import axios from './request.service'

export default class GenericService {
  constructor({ url, name }) {
    this.url = url
    this.name = name
  }

  async fetchAll() {
    try {
      const { data } = await axios.get(`${this.url}/`)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `${this.name} with fetchAll smth wrong`
      }
    }
  }

  async fetchOne(id) {
    try{
      const { data } = await axios.get(`${this.url}/${id}`)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `${this.name} with fetchOne smth wrong`
      }
    }
  }

  async create(payload) {
    try{
      const { data } = await request.post(`${this.create}/`, payload)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `${this.name} with create smth wrong`
      }
    }
  }

  async update(id, payload) {
    try{
      const { data } = await axios.put(`${this.url}/${id}`, payload)
      return data
    } catch (err) {
      throw {
        err,
        error: true,
        message: `${this.name} with update smth wrong`
      }
    }
  }

  async delete(id) {
    try{
      await axios.delete(`${this.url}/${id}`)
    } catch (err) {
      throw {
        err,
        error: true,
        message: `${this.name} with delete smth wrong`
      }
    }
  }
}
