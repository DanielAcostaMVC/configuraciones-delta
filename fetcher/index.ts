import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL
const isServer = typeof window === 'undefined'

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(async config => {
    if (isServer) {
        const { cookies } = (await import('next/headers'));
        const cookie = cookies().get('contexto-marco')
        const cookieData = JSON.parse(cookie?.value || '{}');
        const token = cookieData.datosSesion.token;
        if (token) {
            config.headers['Authorization'] = token
        }
    }
    else {

        const token = document.datosSesion.token;

        if (token) {
            config.headers['Authorization'] = token
        }
    }
    return config
})

export default api