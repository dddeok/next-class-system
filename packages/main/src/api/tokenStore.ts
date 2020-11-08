import Cookies from 'js-cookie';

export const tokenStoreKey = 'staffToken';

export const tokenStore = {
  get() {
    return Cookies.get(tokenStoreKey);
  },
  save(token: string) {
    Cookies.set(tokenStoreKey, token, { expires: 1 });
  },
  clear() {
    Cookies.remove(tokenStoreKey);
  },
};
