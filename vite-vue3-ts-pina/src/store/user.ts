import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '山里的闲人',
            counter: 0
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        }
    },
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
})