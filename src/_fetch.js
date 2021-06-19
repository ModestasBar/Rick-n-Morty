export const _fetch = (url) =>
  new Promise((resolve, rej) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch(() => rej());
  });
