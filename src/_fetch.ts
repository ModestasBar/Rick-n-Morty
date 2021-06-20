export const _fetch = (url: RequestInfo): Promise<any> =>
  new Promise(async (resolve, rej) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      resolve(data);
    } catch (e) {
      return rej();
    }
  });
