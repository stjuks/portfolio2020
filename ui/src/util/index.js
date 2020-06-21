export const scrollIntoView = (query) => {
  const el = document.querySelector(query);

  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const buildAPIURL = (path) => {
  const { protocol, hostname } = document.location;

  let url = `${protocol}//${hostname}`;

  if (process.env.NODE_ENV === 'development') {
    url += ':5000';
  }

  url += path;

  return url;
};
