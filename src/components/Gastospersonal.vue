<template>
  <!DOCTYPE html>
  <html lang="en-es">

  <head>
    <title>Declaración de gastos</title>
  </head>

  <body>
    <form>
      <div class="container">
        <!-- Primera tabla -->
        <table class="table">
          <thead class="table-header">
            <tr>
              <th colspan="3" class="text-center">Datos personales del Colaborador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Número de cédula</td>
              <td></td>
              <td><input v-model="cedulaRuc" type="text"></td>
            </tr>
            <tr>
              <td>Nombres completos</td>
              <td></td>
              <td><input v-model="nombre" type="text"></td>
            </tr>
            <tr>
              <td>Ciudad de Trabajo</td>
              <td></td>
              <td><input v-model="ciudad" type="text"></td>
            </tr>
            <tr>
              <td>Fecha de <strong>elaboración</strong></td>
              <td>Año (números)</td>
              <td><input v-model="fecha" type="text"></td>
            </tr>
            <tr>
              <td></td>
              <td>Mes (números)</td>
              <td><input type="text"></td>
            </tr>
            <tr>
              <td></td>
              <td>Día (números)</td>
              <td><input type="text"></td>

            </tr>
            <!-- Añade más filas según sea necesario -->
          </tbody>
        </table>
        <!-- Segunda tabla detalle de ingresos del colaborador -->
        <div class="container mt-5">
          <h2 class="text-center mb-4">Detalle de Ingresos del Colaborador</h2>
          <table class="table table-bordered">
            <thead class="table-header">
              <tr>
                <th></th>
                <th>Mensual</th>
                <th>No. Veces al año</th>
                <th>Ingreso Anual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salario</td>
                <td><input v-model="salarioMensual" @input="formatInput('salarioMensual')" type="text"
                    id="salarioMensual" placeholder="USD"></td>
                <td><input v-model="salarioVeces" @input="validateInput('salarioVeces', null, 100)" type="number"
                    min="1" max="100" placeholder="-"></td>
                <td class="text-right">
                  <p>{{ salario }}</p>
                </td>
              </tr>
              <tr>
                <td>Comisiones Mandato</td>
                <td><input v-model="comisionesMandatoMensual" @input="formatInput('comisionesMandatoMensual')"
                    type="text" placeholder="USD"></td>
                <td><input v-model="comisionesMandatoVeces" @input="validateInput('comisionesMandatoVeces', null, 100)"
                    type="text" placeholder="-"></td>
                <td class="text-right">
                  <p>{{ comisionesMandato }}</p>
                </td>
              </tr>
              <tr>
                <td>Remuneración Variable</td>
                <td><input v-model="remuneracionVariableMensual" @input="formatInput('remuneracionVariableMensual')"
                    type="text" placeholder="USD"></td>
                <td><input v-model="remuneracionVariableVeces"
                    @input="validateInput('remuneracionVariableVeces', null, 100)" type="text" placeholder="-"></td>
                <td class="text-right">
                  <p>{{ remuneracionVariable }}</p>
                </td>
              </tr>
              <tr>
                <td>Horas extras</td>
                <td><input v-model="horasExtrasMensual" @input="formatInput('horasExtrasMensual')" type="text"
                    placeholder="USD"></td>
                <td><input v-model="horasExtrasVeces" type="text" placeholder="-"></td>
                <td class="text-right">
                  <p>{{ horasExtras }}</p>
                </td>
              </tr>
              <tr>
                <td>Otros</td>
                <td><input v-model="otrosMensual" @input="formatInput('otrosMensual')" type="text" placeholder="USD">
                </td>
                <td><input v-model="otrosVeces" @input="validateInput('otrosVeces', null, 100)" type="text"
                    placeholder="-">
                </td>
                <td class="text-right">
                  <p>{{ otros }}</p>
                </td>
              </tr>
              <tr>
                <td>Utilidades (A recibir Abr 2024)</td>
                <td><input v-model="utilidadesMensual" @input="formatInput('utilidadesMensual')" type="text"
                    placeholder="USD"></td>
                <td><input v-model="utilidadesVeces" @input="validateInput('utilidadesVeces', null, 100)" type="text"
                    placeholder="-">
                </td>
                <td class="text-right">
                  <p>{{ utilidades }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">Total Ingresos Anuales Proyectados</td>
                <td class="text-right">
                  <p>{{ totalIngresosAnuales }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="4">Si tienes o has tenido otro empleador durante el año 2024, es decir constas bajo otra
                  relación de dependencia:</td>
              </tr>
              <tr>
                <td>Ingresos (salario, comisiones, bonos)</td>
                <td><input v-model="ingresoMensual" @input="formatInput('ingresoMensual')" type="text"
                    placeholder="USD">
                </td>
                <td><input v-model="ingresoVeces" @input="validateInput('ingresoVeces', null, 100)" type="text"
                    placeholder="-"></td>
                <td class="text-right">
                  <p>{{ ingresos }}</p>
                </td>
              </tr>
              <tr>
                <td>Vacaciones pagadas</td>
                <td><input v-model="vacacionesMensual" @input="formatInput('vacacionesMensual')" type="text"
                    placeholder="USD"></td>
                <td><input v-model="vacacionesVeces" @input="validateInput('vacacionesVeces', null, 100)" type="text"
                    placeholder="-">
                </td>
                <td class="text-right">
                  <p>{{ vacaciones }}</p>
                </td>
              </tr>
              <tr>
                <td>Utilidades (recibidad Abr 2024)</td>
                <td><input v-model="utilidadesEmpleadorMensual" @input="formatInput('utilidadesEmpleadorMensual')"
                    type="text" placeholder="USD"></td>
                <td><input v-model="utilidadesEmpleadorVeces"
                    @input="validateInput('utilidadesEmpleadorVeces', null, 100)" type="text" placeholder="-"></td>
                <td class="text-right">
                  <p>{{ utilidadesEmpleador }}</p>
                </td>
              </tr>

              <tr>
                <td colspan="3">Total Ingresos Anuales Proyectados - Otro empleador</td>
                <td class="text-right">
                  <p>{{ ingresosAnualesEmpleador }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">TOTAL INGRESOS ANUALES (INCLUYE INGRESOS EXENTOS) CONSOLIDADO</td>
                <td class="text-right">
                  <p>{{ ingresosAnualesConsolidado }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--tercera tabla credito tributario para impuesto a la renta por gastos personales-->
        <div class="container mt-5">
          <h2 class="text-center mb-4">Cálculo de gastos personales</h2>
          <table class="table table-bordered">
            <thead class="table-header">
              <tr>
                <th colspan="2" class="text-center">DATOS BASE PARA EL CALCULO DEL CREDITO TRIBUTARIO PARA IMPUESTO A LA
                  RENTA POR GASTOS PERSONALES</th>
              </tr>
            </thead>
            <tbody class="text-right">
              <tr>
                <td>Canasta Básica Familiar</td>
                <td>
                  789,57
                </td>
              </tr>
              <tr>
                <td>¿Va a declarar cargas familiares?</td>
                <td><input v-model="cargasFamiliares" type="checkbox"></td>
              </tr>
              <tr>
                <td>¿Cuántas cargas familiares va a declarar?</td>
                <td>
                  <input v-model="numeroCargas" type="number" placeholder="ej: 4" :disabled="!cargasFamiliares">
                </td>
              </tr>
              <tr>
                <td>Máximo en Gastos personales para aplicar en el año 2024 según sus cargas</td>
                <td>USD {{ gastosPersonales }}</td>
              </tr>
              <tr>
                <td>¿Tiene usted o alguna de sus cargas familiares alguna enfermedad catalogada como catastrófica, rara
                  o
                  huérfana?</td>
                <td><input v-model="enfermedadCatastrofica" type="checkbox"></td>
              </tr>
              <tr>
                <td>REBAJA MÁXIMA DEL IMPUESTO A LA RENTA 2024</td>
                <td>USD {{ rebajaMaxima }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button @click="goToPage">Ir a la página</button>    
    </form>
  </body>

  </html>
</template>

<script>

export default {
  name: "GastosPersonales",
  data() {
    return {
      salarioMensual: null,
      salarioVeces: null,
      comisionesMandatoMensual: null,
      comisionesMandatoVeces: null,
      remuneracionVariableMensual: null,
      remuneracionVariableVeces: null,
      horasExtrasMensual: null,
      horasExtrasVeces: null,
      otrosMensual: null,
      otrosVeces: null,
      utilidadesMensual: null,
      utilidadesVeces: null,
      ingresoMensual: null,
      ingresoVeces: null,
      vacacionesMensual: null,
      vacacionesVeces: null,
      utilidadesEmpleadorMensual: null,
      utilidadesEmpleadorVeces: null,
      numeroCargas: null,
      cargasFamiliares: false,
      enfermedadCatastrofica: false,
      gastosCargas: {
        0: 5526.99,
        1: 7106.13,
        2: 8685.27,
        3: 11053.98,
        4: 13422.69,
        5: 15791.49
      },
      rebajasMaximas: {
        0: 994.86,
        1: 1279.10,
        2: 1563.35,
        3: 1989.72,
        4: 2416.08,
        5: 2842.45
      },
    }
  },
  computed: {
    //detalle ingresos del colaborador
    salario() {
      if (this.salarioMensual && this.salarioVeces) {
        return (parseFloat(this.salarioMensual) * parseFloat(this.salarioVeces)).toFixed(2);
      }
      return null;
    },
    comisionesMandato() {
      if (this.comisionesMandatoMensual && this.comisionesMandatoVeces) {
        return (parseFloat(this.comisionesMandatoMensual) * parseFloat(this.comisionesMandatoVeces)).toFixed(2);
      }
      return null;
    },
    remuneracionVariable() {
      if (this.remuneracionVariableMensual && this.remuneracionVariableVeces) {
        return (parseFloat(this.remuneracionVariableMensual) * parseFloat(this.remuneracionVariableVeces)).toFixed(2);
      }
      return null;
    },
    horasExtras() {
      if (this.horasExtrasMensual && this.horasExtrasVeces) {
        return (parseFloat(this.horasExtrasMensual) * parseFloat(this.horasExtrasVeces)).toFixed(2);
      }
      return null;
    },
    otros() {
      if (this.otrosMensual && this.otrosVeces) {
        return (parseFloat(this.otrosMensual) * parseFloat(this.otrosVeces)).toFixed(2);
      }
      return null;
    },
    utilidades() {
      if (this.utilidadesMensual && this.utilidadesVeces) {
        return (parseFloat(this.utilidadesMensual) * parseFloat(this.utilidadesVeces)).toFixed(2);
      }
      return null;
    },

    totalIngresosAnuales() {
      let total = 0;
      total += this.salario ? parseFloat(this.salario) : 0;
      total += this.comisionesMandato ? parseFloat(this.comisionesMandato) : 0;
      total += this.remuneracionVariable ? parseFloat(this.remuneracionVariable) : 0;
      total += this.horasExtras ? parseFloat(this.horasExtras) : 0;
      total += this.otros ? parseFloat(this.otros) : 0;
      total += this.utilidades ? parseFloat(this.utilidades) : 0;
      return total.toFixed(2);
    },

    ingresos() {
      if (this.ingresoMensual && this.ingresoVeces) {
        return (parseFloat(this.ingresoMensual) * parseFloat(this.ingresoVeces)).toFixed(2);
      }
      return null;
    },
    vacaciones() {
      if (this.vacacionesMensual && this.vacacionesVeces) {
        return (parseFloat(this.vacacionesMensual) * parseFloat(this.vacacionesVeces)).toFixed(2);
      }
      return null;
    },
    utilidadesEmpleador() {
      if (this.utilidadesEmpleadorMensual && this.utilidadesEmpleadorVeces) {
        return (parseFloat(this.utilidadesEmpleadorMensual) * parseFloat(this.utilidadesEmpleadorVeces)).toFixed(2);
      }
      return null;
    },
    ingresosAnualesEmpleador() {
      let total = 0;
      total += this.ingresos ? parseFloat(this.ingresos) : 0;
      total += this.vacaciones ? parseFloat(this.vacaciones) : 0;
      total += this.utilidadesEmpleador ? parseFloat(this.utilidadesEmpleador) : 0;
      return total.toFixed(2);
    },
    ingresosAnualesConsolidado() {
      let total = 0;
      total += this.totalIngresosAnuales ? parseFloat(this.totalIngresosAnuales) : 0;
      total += this.ingresosAnualesEmpleador ? parseFloat(this.ingresosAnualesEmpleador) : 0;
      return total.toFixed(2);
    },
    //termina detalle ingresos del colaborador
    //calculo crédito tributario
    gastosPersonales() {
      if (this.enfermedadCatastrofica) {
        return 78957.00;
      } else if (this.numeroCargas >= 5) {
        return this.gastosCargas[5];
      } else {
        return this.gastosCargas[this.numeroCargas];
      }
    },
    rebajaMaxima() {
      if (this.enfermedadCatastrofica) {
        return 14212.26;
      } else {
        return this.numeroCargas >= 5 ? this.rebajasMaximas[5] : this.rebajasMaximas[this.numeroCargas];
      }
    }
  },
  methods: {
    //detalle ingresos del colaborador
    formatInput(field) {
      let value = this[field];
      if (!isNaN(value)) {
        let decimal = value.indexOf(".");
        if (decimal != -1 && value.length > decimal + 3) {
          this[field] = value.slice(0, decimal + 3);
        }
      } else {
        this[field] = null;
      }
    },
    onlyInteger(event) {
      let keyCode = (event.which) ? event.which : event.keyCode;
      if ((keyCode < 48 || keyCode > 57)) {
        event.preventDefault();
      }
    },
    validateInput(field, min, max) {
      let value = this[field];
      if (value < min) {
        this[field] = min;
      } else if (value > max) {
        this[field] = max;
      } else if (value % 1 !== 0) {
        this[field] = Math.floor(value);
      }
    },
    goToPage() {
      this.$router.push('/pdf');
    }
    //termina detalle ingresos del colaborador
  },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-header {
  background-color: #79adc2;
  /* Color amarillo para las cabeceras */
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
  /* Borde para las celdas */
}

.text-right {
  text-align: right;
  /* Alineación de texto a la derecha */
}

input {
  width: 100%;
  box-sizing: border-box;
}


.no-border {
  border: none !important;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
