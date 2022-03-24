import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

const client = typeof window !== "undefined";
type WritableLocalStorage<T> = Writable<T>;
export function localStorageStore<T>(key: string, initial: T): WritableLocalStorage<T> {
  const {
    set: setStore,
    update: updateStore,
    subscribe
  } = writable(initial, () => {
    if (!client) return;

    getAndSetFromLocalStorage();

    const updateFromStorageEvents = event => {
      if (event.key === key) getAndSetFromLocalStorage();
    };
    window.addEventListener("storage", updateFromStorageEvents);
    return () => window.removeEventListener("storage", updateFromStorageEvents);
  });

  // Set both the localStorage and this Svelte store
  const set: typeof setStore = value => {
    setStore(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  // update both the session storage and the svelte store
  const update: typeof updateStore = value => {
    updateStore(value);
    const unsub = subscribe(current => {
      if (client) {
        localStorage.setItem(key, JSON.stringify(current));
      }
    });
    unsub();
  };

  // Synchronize the Svelte store and session storage
  const getAndSetFromLocalStorage = () => {
    const localValue = localStorage.getItem(key);

    if (localValue === null) set(initial);
    else {
      try {
        setStore(JSON.parse(localValue));
      } catch {
        set(initial);
      }
    }
  };

  return { subscribe, update, set };
}
