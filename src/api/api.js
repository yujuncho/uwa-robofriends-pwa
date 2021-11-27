export const apiCall = (link, fetch) =>
  fetch(link).then(response => response.json());
