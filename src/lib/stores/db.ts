import type { User } from '$lib/types';
import { writable } from 'svelte/store';
import { localStorageStore } from './localstorage';

export const db = localStorageStore<User[]>('userdata', []);
export const showDrawer = writable(false);
