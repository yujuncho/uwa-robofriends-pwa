export const apiCall = (link, fetchCall) => {
  return fetchCall(link).then(response => {
    return response.json();
  });
};
