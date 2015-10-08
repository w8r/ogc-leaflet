export const cors = ((window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest()));
export const pointerEvents = document.documentElement.style.pointerEvents === '';
export const WMS_VERSION = '1.3.0';

export const Support = {
  cors,
  pointerEvents
};

export default Support;
