export const useNuxtApp = () => ({})
export const useRoute = () => ({
    query: {},
    matched: [],
    fullPath: '',
    hash: '',
    path: '',
    params: {},
    meta: {},
})
export const useRouter = () => ({
    fullPath: '',
    hash: '',
    matched: [],
    meta: {},
    params: {},
    path: '',
    query: {},
    resolve() {
        return {
            matched: [],
            href: '',
        }
    },
})
export const useRuntimeConfig = () => ({ public: {} })
