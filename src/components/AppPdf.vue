<template>
  <div class="container">
    <body>
      <table class="table-custom">
        <thead>
          <tr>
            <th colspan="4" class="header-large">SRI<br>FORMULARIO SRI-GP</th>
            <th colspan="7" class="header-large">DECLARACIÓN DE GASTOS PERSONALES A SER UTILIZADOS POR EL EMPLEADOR EN
              EL
              CASO DE INGRESOS EN RELACIÓN DE DEPENDENCIA</th>
          </tr>
        </thead>
        <tbody class="p">
          <tr>
            <td rowspan="2">EJERCICIO FISCAL</td>
            <td rowspan="2"></td>
            <td rowspan="2">2</td>
            <td rowspan="2">0</td>
            <td rowspan="2">2</td>
            <td rowspan="2">6</td>

            <td ROWSPAN="2">CIUDAD Y FECHA DE ENTREGA/RECEPCIÓN</td>
            <td>CIUDAD</td>
            <td>AÑO</td>
            <td>MES</td>
            <td>DIA</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table-custom">
        <thead>
          <tr>
            <td colspan="4"><strong>Información / Identificación del empleado contribuyente (a ser llenado por el
                empleado)</strong>
            </td>
          </tr>
        </thead>
        <tbody class="p">
          <tr>
            <td rowspan="2">101</td>
            <td>CÉDULA O PASAPORTE</td>
            <td rowspan="2">102</td>
            <td>APELLIDOS Y NOMBRES COMPLETOS</td>
          </tr>
          <tr>
            <td>{{ cedulaRuc }}</td>
            <td>{{ nombre }}</td>
          </tr>
        </tbody>
      </table>
      <table class="table-custom">
        <tbody class="p">
          <tr>
            <td colspan="4"><strong>INGRESOS PROYECTADOS (ver Nota 1)</strong></td>
          </tr>
          <tr>
            <td colspan="2">(+) TOTAL INGRESOS CON ESTE EMPLEADOR (con el empleador que más ingresos perciba)</td>
            <td>103</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) TOTAL INGRESOS CON OTROS EMPLEADORES (en caso de haberlos)</td>
            <td>104</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2"><strong>(=) TOTAL INGRESOS PROYECTADOS</strong></td>
            <td>105</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="4"><strong>GASTOS PROYECTADOS</strong></td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE VIVIENDA</td>
            <td>106</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE EDUCACIÓN ARTE Y CULTURA</td>
            <td>107</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE SALUD</td>
            <td>108</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE VESTIMENTA</td>
            <td>109</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE ALIMENTACIÓN</td>
            <td>110</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2">(+) GASTOS DE TURISMO</td>
            <td>111</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2"><strong>(=) TOTAL GASTOS PROYECTADOS (106+107+108+109+110+111)</strong></td>
            <td>112</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2"><strong>TRABAJADOR O SUS CARGAS FAMILIARES CON ENFERMEDAD CATASTRÓFICA </strong></td>
            <td>113</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2"><strong>NÚMERO DE CARGAS FAMILIARES PARA REBAJA DE GASTOS PERSONALES </strong></td>
            <td>114</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td colspan="2"><strong>REBAJA DE IMPUESTO A LA RENTA POR GASTOS PERSONALES PROYECTADOS</strong></td>
            <td>115</td>
            <td>USD$</td>
          </tr>
          <tr>
            <td class="p" colspan="4"><strong>NOTAS:</strong> 1.- Cuando un contribuyente trabaje con DOS O MÁS
              empleadores,
              presentará este informe al
              empleador con el que perciba mayores ingresos, el que efectuará la retención considerando los ingresos
              gravados y deducciones (aportes personales al IESS) con todos los empleadores, sobre la base imponible así
              obtenida, se aplicará la tarifa contenida en la tabla de Impuesto a la Renta de personas naturales y
              sucesiones indivisas de la Ley de Régimen Tributario Interno, con lo que se obtendrá la proyección del
              Impuesto a la Renta causado en el ejercicio económico. Al resultado obtenido se le restará la rebaja por
              la proyección de gastos personales, según los límites establecidos en la Ley, y se dividirá para 12, para
              determinar la alícuota mensual a retener por concepto de Impuesto a la Renta. Cuando la relación laboral
              inicie en un mes distinto de enero el resultado deberá dividirse para el número de meses que resten para
              finalizar el periodo.
              Una copia certificada, con la respectiva firma y sello del empleador, será presentada a los demás
              empleadores para que se abstengan de efectuar retenciones sobre los pagos efectuados por concepto de
              remuneración del trabajo en relación de dependencia
            </td>
          </tr>
          <tr>
            <td class="p" colspan="4">2.- Para efectos de este cálculo se considerará el valor de la canasta familiar
              básica, al mes
              de enero del ejercicio fiscal respecto del que se realiza la proyección, según los datos que publique el
              Instituto Nacional de Estadística y Censos.</td>
          </tr>
          <tr>
            <td class="p" colspan="4">3.- Se considerarán como cargas familiares a los padres, cónyuge o pareja en unión
              de hecho e
              hijos hasta los 21 años o con discapacidad de cualquier edad, siempre que no perciban ingresos gravados y
              que sean dependientes del sujeto pasivo. En ningún caso, dos o más contribuyentes podrán considerar a la
              misma carga familiar para la rebaja por gastos personales.</td>
          </tr>
        </tbody>

      </table>
      <br>
      <table class="table-custom p">
        <thead>
          <tr>
            <td colspan="4"><strong>Identificación del Agente de Retención (a ser llenado por el empleador)</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">116</td>
            <td>RUC</td>
            <td rowspan="2">117</td>
            <td> RAZON SOCIAL, DENOMINACIÓN O APELLIDOS Y NOMBRES COMPLETOS</td>
          </tr>
          <tr>
            <td style="width: 250px; height: 100px;">&nbsp;</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table-custom p">
        <tbody>
          <tr>
            <td colspan="2">Firmas</td>
          </tr>
          <tr>
            <td>EMPLEADOR / AGENTE DE RETENCIÓN</td>
            <td>EMPLEADO CONTRIBUYENTE</td>
          </tr>
          <tr>
            <td style="height: 80px;"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br>
    </body>
  </div>
</template>

<script>

export default {
  // computed: {
  //   cedulaRuc() {
  //     return this.$store.state.cedulaRuc
  //   }
  // },
  data() {
    return {
      datos: this.$route.params.datos
    };
  }
}



</script>

<style>
.table-custom {
  width: 100%;
  border-collapse: collapse;
}

.table-custom th,
.table-custom td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}

.table-custom th {
  background-color: #ADD8E6;
  text-align: center;
}

.table-custom .header-large {
  background-color: #ADD8E6;
}

.p {
  font-size: 10px;
}
</style>
