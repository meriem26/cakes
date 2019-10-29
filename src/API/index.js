export const fetchCakesList = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
  );
  const data = await res.json();
  return data;
};

// promise
