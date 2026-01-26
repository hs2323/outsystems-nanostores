import { atom, map, onMount } from 'nanostores';

declare global {
  interface Window {
    NanoStores: {
      atom: typeof atom;
      map: typeof map;
      onMount: typeof onMount;
    };
  }
}

window.NanoStores = {
    atom,
    map,
    onMount
};
