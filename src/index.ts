import { atom, map, onMount, listenKeys, subscribeKeys } from 'nanostores';

declare global {
  interface Window {
    NanoStores: {
      atom: typeof atom;
      listenKeys: typeof listenKeys;
      map: typeof map;
      onMount: typeof onMount;
      subscribeKeys: typeof subscribeKeys;
    };
  }
}


window.NanoStores = {
    atom,
    listenKeys,
    map,
    onMount,
    subscribeKeys,
};
