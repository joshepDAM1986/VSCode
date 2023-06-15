document.addEventListener("DOMContentLoaded", realizarTransformacion);

function realizarTransformacion() {
  const xmlPath = "entregaWeb_paises.xml";
  const xsltPath = "entregaWeb_paises.xsl";

  const xhrXML = new XMLHttpRequest();
  xhrXML.onreadystatechange = function () {
    if (xhrXML.readyState === 4 && xhrXML.status === 200) {
      const xml = xhrXML.responseText;

      const xhrXSLT = new XMLHttpRequest();
      xhrXSLT.onreadystatechange = function () {
        if (xhrXSLT.readyState === 4 && xhrXSLT.status === 200) {
          const xslt = xhrXSLT.responseText;

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xml, "application/xml");
          const xsltDoc = parser.parseFromString(xslt, "application/xml");

          const procesador = new XSLTProcessor();
          procesador.importStylesheet(xsltDoc);
          const resultado = procesador.transformToDocument(xmlDoc);

          const resultadoHTML = new XMLSerializer().serializeToString(
            resultado
          );
          document.getElementById("resultado").innerHTML = resultadoHTML;
        }
      };
      xhrXSLT.open("GET", xsltPath, true);
      xhrXSLT.send();
    }
  };
  xhrXML.open("GET", xmlPath, true);
  xhrXML.send();
}
