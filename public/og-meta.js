const path = window.location.pathname;

const setOG = (title, description, url, image) => {
  document.querySelector("meta[property='og:title']")?.setAttribute("content", title);
  document.querySelector("meta[property='og:description']")?.setAttribute("content", description);
  document.querySelector("meta[property='og:url']")?.setAttribute("content", url);
  document.querySelector("meta[property='og:image']")?.setAttribute("content", image);
};

if (path === "/hernan") {
  setOG(
    "Hernan Andrade - Conductor Profesional | AngoTrans",
    "Conductor profesional en Chiloé. Tours personalizados y traslados privados.",
    "https://angotrans.cl/hernan",
    "https://angotrans.cl/angotrans-og.jpg"
  );
}

if (path === "/servicios") {
  setOG(
    "Servicios de Transporte y Tours en Chiloé | AngoTrans",
    "Conoce nuestros tours personalizados y traslados privados desde Castro, Ancud y todo Chiloé.",
    "https://angotrans.cl/servicios",
    "https://angotrans.cl/angotrans-og.jpg"
  );
}