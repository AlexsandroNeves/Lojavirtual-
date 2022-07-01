import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://bitbucket.org/webjump/assessment-frontend/raw/fb526a0df8447b4bae52cf61c083db60d920d3f7/mock-api/V1/categories'
})

export const buscaSapato = async (setDado) =>{
    const res = await api.get('/3')
    setDado(res.data.items)

}

export const buscaCalca = async (setDado) =>{
    const res = await api.get('/2')
    setDado(res.data.items)
  
}

export const buscaCamiseta = async (setDado) =>{
    const res = await api.get('/1')
    setDado(res.data.items)
  
}

export const buscaLista = async (setDado) =>{
    const res = await api.get('/list')
    setDado(res.data.items)

  
}