export const scrollIntoView = (query) => {
  const el = document.querySelector(query);
  
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
