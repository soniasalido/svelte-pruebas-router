import { writable } from 'svelte/store'
import type { UserEntity } from "./users.vm";

const createUser = () => {
    const { subscribe, set } = writable<UserEntity[]>([]);

    return {
        subscribe,
        setUser: (user) => {
            set(user)
        }
    }
}

export const user = createUser();
export const isLoggedIn = writable(false);