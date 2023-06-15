<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          td, th {
            border: 1px solid black;
            padding: 5px;
          }
          .mas-habitantes {
            background-color: tomato ;
            font-weight: bold;
          }
          .media-natalidad {
            background-color: yellow;
            font-weight: bold;
          }
          .media-mortalidad {
            background-color: orange;
            font-weight: bold;
          }
          .mas-esperanza {
            background-color: lightgreen;
            font-weight: bold;
          }
          .pobre {
            background-color: lightgray;
            font-weight: bold;
          }
          .euro {
            background-color: cyan;
            font-weight: bold;
          }
          .ingles {
            background-color: pink;
            font-weight: bold;
          }
          .europa {
            background-color: greenyellow;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <table>
          <tr>
            <th>País</th>
            <th>Continente</th>
            <th>Habitantes</th>
            <th>Natalidad</th>
            <th>Mortalidad</th>
            <th>Esperanza de Vida</th>
            <th>Economía</th>
            <th>Moneda</th>
            <th>Idioma</th>
            <th>Capital</th>
          </tr>
          <xsl:for-each select="paises/pais">
          <xsl:sort select="pais"/>
            <xsl:variable name="habitantes" select="habitantes" />
            <xsl:variable name="natalidad" select="natalidad" />
            <xsl:variable name="mortalidad" select="mortalidad" />
            <xsl:variable name="esperanza_vida" select="esperanza_vida" />
            <xsl:variable name="economia" select="economia" />
            <xsl:variable name="moneda" select="moneda" />
            <xsl:variable name="idioma" select="idioma" />
            <xsl:variable name="media_natalidad" select="sum(/paises/pais/natalidad) div count(/paises/pais)" />
            <xsl:variable name="media_mortalidad" select="sum(/paises/pais/mortalidad) div count(/paises/pais)" />
            <tr>
              <td>
                <xsl:value-of select="nombre" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="contains(continente, 'Europa')">
                    <xsl:attribute name="class">europa</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="continente" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="$habitantes &gt; 200000000">
                    <xsl:attribute name="class">mas-habitantes</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="habitantes" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="$natalidad &gt; $media_natalidad">
                    <xsl:attribute name="class">media-natalidad</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="natalidad" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="$mortalidad &gt; $media_mortalidad">
                    <xsl:attribute name="class">media-mortalidad</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="mortalidad" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="$esperanza_vida &gt; 75">
                    <xsl:attribute name="class">mas-esperanza</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="esperanza_vida" />
              </td>
              <td>
                <xsl:choose>
                  <xsl:when test="$economia &lt; 1.500">
                    <xsl:attribute name="class">pobre</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="economia" />
              </td>
              <td>
              <xsl:choose>
                  <xsl:when test="contains ($moneda, 'Euro')">
                    <xsl:attribute name="class">euro</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="moneda" />
              </td>
              <td>
                <xsl:choose>
                 <xsl:when test="contains ($idioma, 'Inglés')">
                    <xsl:attribute name="class">ingles</xsl:attribute>
                  </xsl:when>
                </xsl:choose>
                <xsl:value-of select="idioma" />
              </td>
              <td>
                <xsl:value-of select="capital" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
