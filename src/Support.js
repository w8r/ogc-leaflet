export const cors = ((window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest()));
export const pointerEvents = document.documentElement.style.pointerEvents === '';

export const Support = {
  cors: cors,
  pointerEvents: pointerEvents
};

export default Support;
