t
<template>
  <div>
    <form v-if="mostrarFormulario">
      <h2>Declaración de Gastos Personales</h2>
      <div class="container o-auto">
        <!-- Primera tabla -->
        <table class="table table-bordered" id="datosColaborador">
          <thead class="table-header">
            <tr>
              <th colspan="3" class="text-center">
                DATOS PERSONALES DEL COLABORADOR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Número de cédula</td>
              <td></td>
              <td>
                <input
                  v-model="cedulaRuc"
                  @input="validateInput('cedulaRuc')"
                  type="text"
                  id="cedulaRuc"
                  name="cedulaRuc"
                />
                <!-- <p
                    v-if="cedulaRuc.length !== 10 && cedulaRuc.length !== 13"
                    class="alerta"> -->
                <p v-if="cedulaRuc.length !== 10" class="alerta">
                  *La cédula debe tener 10 caracteres*
                </p>
              </td>
            </tr>
            <tr>
              <td>Nombres completos</td>
              <td></td>
              <td><input v-model="nombre" type="text" /></td>
            </tr>
            <tr>
              <td>Teléfono</td>
              <td></td>
              <td><input v-model="phone" type="text" /></td>
            </tr>
            <tr>
              <td>Correo</td>
              <td></td>
              <td><input v-model="email" type="text" /></td>
            </tr>
            <tr>
              <td>Ciudad de Trabajo</td>
              <td></td>
              <td><input v-model="ciudad" type="text" /></td>
            </tr>
            <tr>
              <td>Fecha de <strong>elaboración</strong></td>
              <td>Año (números)</td>
              <td>
                <input
                  v-model="anio"
                  @input="validateInput('anio')"
                  type="text"
                  placeholder="Ej: 2024"
                  maxlength="4"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Mes (números)</td>
              <td>
                <input
                  v-model="mes"
                  @input="validateInput('mes', null, 12)"
                  type="text"
                  placeholder="Ej: 1, 12"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Día (números)</td>
              <td>
                <input
                  v-model="dia"
                  @input="validateInput('dia', null, 31)"
                  type="text"
                  placeholder="Ej: 1, 31"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="shouldDisableCampos()"
          class="alert alert-danger"
          role="alert"
        >
          Llenar esta tabla es obligatoria
        </div>
        <!-- Segunda tabla detalle de ingresos del colaborador -->
        <div class="container mt-5 o-auto">
          <h2 class="text-center mb-4">Detalle de Ingresos del Colaborador</h2>
          <table class="table table-bordered">
            <thead class="table-header">
              <tr>
                <th class="text-center">INGRESOS</th>
                <th>MENSUAL</th>
                <th>NO. VECES AL AÑO</th>
                <th>INGRESO ANUAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sueldo / Salario</td>
                <td>
                  <input
                    v-model="salarioMensual"
                    @input="formatInput('salarioMensual')"
                    type="text"
                    id="salarioMensual"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="salarioVeces"
                    @input="validateInput('salarioVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ salario }}</p>
                </td>
              </tr>
              <tr>
                <td>Comisiones / Bonos</td>
                <td>
                  <input
                    v-model="comisionesMandatoMensual"
                    @input="formatInput('comisionesMandatoMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="comisionesMandatoVeces"
                    @input="validateInput('comisionesMandatoVeces', null, 12)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ comisionesMandato }}</p>
                </td>
              </tr>
              <tr>
                <td>Remuneración Variable</td>
                <td>
                  <input
                    v-model="remuneracionVariableMensual"
                    @input="formatInput('remuneracionVariableMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="remuneracionVariableVeces"
                    @input="
                      validateInput('remuneracionVariableVeces', null, 12)
                    "
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ remuneracionVariable }}</p>
                </td>
              </tr>
              <tr>
                <td>Horas Extras</td>
                <td>
                  <input
                    v-model="horasExtrasMensual"
                    @input="formatInput('horasExtrasMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="horasExtrasVeces"
                    @input="validateInput('horasExtrasVeces', null, 12)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ horasExtras }}</p>
                </td>
              </tr>
              <tr>
                <td>Otros</td>
                <td>
                  <input
                    v-model="otrosMensual"
                    @input="formatInput('otrosMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="otrosVeces"
                    @input="validateInput('otrosVeces', null, 12)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ otros }}</p>
                </td>
              </tr>
              <tr>
                <td>Utilidades</td>
                <td>
                  <input
                    v-model="utilidadesMensual"
                    @input="formatInput('utilidadesMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="utilidadesVeces"
                    @input="validateInput('utilidadesVeces', null, 1)"
                    type="text"
                    placeholder="-"
                  />
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
                <td colspan="4">
                  Si tienes o has tenido otro empleador durante el año 2024, es
                  decir constas bajo otra relación de dependencia:
                </td>
              </tr>
              <tr>
                <td>Ingresos (salario, comisiones, bonos)</td>
                <td>
                  <input
                    v-model="ingresoMensual"
                    @input="formatInput('ingresoMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="ingresoVeces"
                    @input="validateInput('ingresoVeces', null, 12)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ ingresos }}</p>
                </td>
              </tr>
              <tr>
                <td>Otros Ingresos</td>
                <td>
                  <input
                    v-model="vacacionesMensual"
                    @input="formatInput('vacacionesMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="vacacionesVeces"
                    @input="validateInput('vacacionesVeces', null, 12)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ vacaciones }}</p>
                </td>
              </tr>
              <tr>
                <td>Utilidades</td>
                <td>
                  <input
                    v-model="utilidadesEmpleadorMensual"
                    @input="formatInput('utilidadesEmpleadorMensual')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="utilidadesEmpleadorVeces"
                    @input="validateInput('utilidadesEmpleadorVeces', null, 1)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ utilidadesEmpleador }}</p>
                </td>
              </tr>

              <tr>
                <td colspan="3">
                  Total Ingresos Anuales Proyectados - Otro Empleador
                </td>
                <td class="text-right">
                  <p>{{ ingresosAnualesEmpleador }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <strong
                    >TOTAL INGRESOS ANUALES (INCLUYE INGRESOS EXENTOS)
                    CONSOLIDADO</strong
                  >
                </td>
                <td class="text-right">
                  <p>{{ ingresosAnualesConsolidado }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--tercera tabla credito tributario para impuesto a la renta por gastos personales-->
        <h2 class="text-center mb-4 mt-5">Cálculo de Gastos Personales</h2>
        <div class="container o-auto">
          <table class="table table-bordered">
            <thead class="table-header">
              <tr>
                <th colspan="2" class="text-center">
                  DATOS BASE PARA EL CALCULO DEL CREDITO TRIBUTARIO PARA
                  IMPUESTO A LA RENTA POR GASTOS PERSONALES
                </th>
              </tr>
            </thead>
            <tbody class="text-right">
              <tr>
                <td>Canasta Básica Familiar</td>
                <td>789,57</td>
              </tr>
              <tr>
                <td>¿Va a declarar cargas familiares?</td>
                <input
                  v-model="cargasFamiliares"
                  type="checkbox"
                  @change="checkCargasFamiliares"
                />
              </tr>
              <tr>
                <td>¿Cuántas cargas familiares va a declarar?</td>
                <td>
                  <input
                    v-model="numeroCargas"
                    type="number"
                    placeholder="ej: 4"
                    :disabled="!cargasFamiliares"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Máximo en Gastos personales para aplicar en el año 2024 según
                  sus cargas
                </td>
                <td>USD {{ gastosPersonales }}</td>
              </tr>
              <tr>
                <td>
                  ¿Tiene usted o alguna de sus cargas familiares alguna
                  enfermedad catalogada como catastrófica, rara o huérfana?
                </td>
                <td>
                  <input v-model="enfermedadCatastrofica" type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>REBAJA MÁXIMA DEL IMPUESTO A LA RENTA 2024</td>
                <td>USD {{ rebajaMaxima }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="mt-5">
          RESPALDOS PARA LOS GASTOS DECLARADOS COMO DEDUCIBLES PARA LA REBAJA
          MÁXIMA DE IMPUESTO A LA RENTA
        </h3>
        <div class="container o-auto">
          <table class="table table-bordered">
            <thead class="table-header">
              <tr>
                <th></th>
                <th class="text-center">CONCEPTO</th>
                <th>DETALLE</th>
                <th>DOC CON EL QUE PUEDE DEDUCIR</th>
                <th>MONTO UNITARIO</th>
                <th>No. Veces al año</th>
                <th class="text-right">MONTO TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="6"><strong>VIVIENDA</strong></td>
                <td>
                  ADQUISICIÓN / CONSTRUCCION / REMODELACIÓN / AMPLIACIÓN /
                  MEJORA / MANTENIMIENTO
                </td>
                <td>De un único bien inmueble para vivienda</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="adquisicionMonto"
                    @input="formatInput('adquisicionMonto')"
                    type="text"
                    id="adquisicionMonto"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="adquisicionVeces"
                    @input="validateInput('adquisicionVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ adquisicionTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>INTERESES PRÉSTAMO HIPOTECARIO</td>
                <td>
                  Los <strong>intereses </strong>de préstamos hipotecarios
                </td>
                <td>Contrato de préstamo</td>
                <td>
                  <input
                    v-model="interesMonto"
                    @input="formatInput('interesMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="interesVeces"
                    @input="validateInput('interesVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ interesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>IMPUESTO PREDIAL</td>
                <td>Impuestos Prediales de un único inmueble para vivienda</td>
                <td>Cartilla de pago</td>
                <td>
                  <input
                    v-model="impuestoMonto"
                    @input="formatInput('impuestoMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="impuestoVeces"
                    @input="validateInput('impuestoVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ impuestoTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>ALICUOTAS DE CONDOMINIO</td>
                <td>De un único bien inmueble para vivienda</td>
                <td>Factura/Recibo</td>
                <td>
                  <input
                    v-model="alicuotaMonto"
                    @input="formatInput('alicuotaMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="alicuotaVeces"
                    @input="validateInput('alicuotaVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ alicuotaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>ARRIENDO</td>
                <td>De un único bien inmueble para vivienda</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="arriendoMonto"
                    @input="formatInput('arriendoMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="arriendoVeces"
                    @input="validateInput('arriendoVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ arriendoTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>
                  PAGO SERVICIOS BASICOS : Agua, gas, luz, teléfono convencional
                </td>
                <td>De un único bien inmueble para vivienda</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="pagoServiciosMonto"
                    @input="formatInput('pagoServiciosMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="pagoServiciosVeces"
                    @input="validateInput('pagoServiciosVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ pagoServiciosTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="6">Total Vivienda</td>
                <td class="text-right">
                  <p>{{ viviendaTotal }}</p>
                  <p v-if="viviendaTotal > gastosPersonales">
                    HEY<i class="bi bi-x"></i>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowspan="8">
                  <strong>EDUCACIÓN, ARTE Y CULTURA</strong>
                </td>
                <td>MATRÍCULA, PENSION, DERECHOS DE GRADO</td>
                <td>
                  Matrículas y pensiones en todos los niveles educativos de
                  instituciones aprobadas por el Ministerio de Educación o en el
                  Consejo Nacional de Educación Superior.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="matriculaMonto"
                    @input="formatInput('matriculaMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="matriculaVeces"
                    @input="validateInput('matriculaVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ matriculaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>
                  ÚTILES Y TEXTOS ESCOLARES / MATERIAL DIDACTICO PARA ESTUDIO
                </td>
                <td>Útiles y textos escolares utilizados en la educación.</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="utilesMonto"
                    @input="formatInput('utilesMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="utilesVeces"
                    @input="validateInput('utilesVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ utilesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>UNIFORMES</td>
                <td>Uniformes en general.</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="uniformesMonto"
                    @input="formatInput('uniformesMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="uniformesVeces"
                    @input="validateInput('uniformesVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ uniformesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>TRANSPORTE ESCOLAR</td>
                <td>UTransporte para la educación.</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="transporteMonto"
                    @input="formatInput('transporteMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="transporteVeces"
                    @input="validateInput('transporteVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ transporteTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>EDUCACIÓN PARA DISCAPACITADOS</td>
                <td>
                  Servicios de educación especial brindados por órganos
                  competentes y autorizados.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="educacionMonto"
                    @input="formatInput('educacionMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="educacionVeces"
                    @input="validateInput('educacionVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ educacionTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>CUIDADO INFANTIL</td>
                <td>Servicios prestados por centros infantiles autorizados</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="cuidadoMonto"
                    @input="formatInput('cuidadoMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="cuidadoVeces"
                    @input="validateInput('cuidadoVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ cuidadoTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>EQUIPOS DE COMPUTACIÓN</td>
                <td>Equipo de computación destinado para la educación</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="equiposMonto"
                    @input="formatInput('equiposMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="equiposVeces"
                    @input="validateInput('equiposVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ equiposTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>CRÉDITOS EDUCATIVOS</td>
                <td>
                  Intereses créditos educativos otorgados por Instituciones
                  autorizadas.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="creditosMonto"
                    @input="formatInput('creditosMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="creditosVeces"
                    @input="validateInput('creditosVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ creditosTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="6">Total Educación</td>
                <td class="text-right">
                  <p>{{ educacionArteCulturaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td rowspan="2"><strong>VESTIMENTA</strong></td>
                <td>VESTIMENTA</td>
                <td>De un único bien inmueble para vivienda</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="vestimentaMonto"
                    @input="formatInput('vestimentaMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="vestimentaVeces"
                    @input="validateInput('vestimentaVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ vestimentaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="5">Total Vestimenta</td>
                <td class="text-right">
                  <p>{{ vestimentaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td rowspan="4"><strong>ALIMENTACIÓN</strong></td>
                <td>PRODUCTOS NATURALES, ARTIFICIALES</td>
                <td>Compra de alimentos de consumo humano.</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="productosMonto"
                    @input="formatInput('productosMonto')"
                    type="text"
                    id="adquisicionMonto"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="productosVeces"
                    @input="validateInput('productosVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ productosTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>PENSIONES ALIMENTICIAS</td>
                <td>
                  Pensiones alimenticias respaldadas en una resolución judicial.
                  Ante la autoridad competente.
                </td>
                <td>Resolución Judicial</td>
                <td>
                  <input
                    v-model="pensionesMonto"
                    @input="formatInput('pensionesMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="pensionesVeces"
                    @input="validateInput('pensionesVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ pensionesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>RESTAURANTES</td>
                <td>Compra de alimentos en locales de alimentos preparados.</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="restaurantesMonto"
                    @input="formatInput('restaurantesMonto')"
                    type="text"
                    id="adquisicionMonto"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="restaurantesVeces"
                    @input="validateInput('restaurantesVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ restaurantesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="5">Total alimentación</td>
                <td class="text-right">
                  <p>{{ alimentacionTotal }}</p>
                </td>
              </tr>
              <tr>
                <td rowspan="4"><strong>TURISMO LOCAL</strong></td>
                <td>PASAJES AÉREOS</td>
                <td>Pasajes para movilizarse dentro del ECUADOR</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="pasajesMonto"
                    @input="formatInput('pasajesMonto')"
                    type="text"
                    id="adquisicionMonto"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="pasajesVeces"
                    @input="validateInput('pasajesVeces', null, 12)"
                    type="number"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ pasajesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>ALIMENTACION</td>
                <td>
                  Compra de alimentos en locales de alimentos preparados con
                  Licencia Única Anual de Funcionamiento.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="alimentacionTurismoMonto"
                    @input="formatInput('alimentacionTurismoMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="alimentacionTurismoVeces"
                    @input="
                      validateInput('alimentacionTurismoVeces', null, 1000000)
                    "
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ alimentacionTurismoTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>HOSPEDAJE</td>
                <td>
                  Gastos por alquiler de habitaciones o un bien inmueble dentro
                  del ECUADOR con el objetivo de realizar turismo local
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="hospedajeMonto"
                    @input="formatInput('hospedajeMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="hospedajeVeces"
                    @input="validateInput('hospedajeVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ hospedajeTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="5">Total Turismo</td>
                <td class="text-right">
                  <p>{{ turismoTotal }}</p>
                </td>
              </tr>
              <tr>
                <td rowspan="7"><strong>SALUD</strong></td>
                <td>HONORARIOS MÉDICOS, DE PROFESIONALES DE LA SALUD</td>
                <td>
                  Honorarios de médicos y profesionales de la salud registrados
                  en el Consejo Nacional de Educación Superior.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="honorariosMonto"
                    @input="formatInput('honorariosMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="honorariosVeces"
                    @input="validateInput('honorariosVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ honorariosTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>SERVICIOS DE SALUD</td>
                <td>
                  Clínicas, hospitales, laboratorios y farmacias reconocidas por
                  el Ministerio de Salud.
                </td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="serviciosMonto"
                    @input="formatInput('serviciosMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="serviciosVeces"
                    @input="validateInput('serviciosVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ serviciosTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>MEDICINAS Y OTROS</td>
                <td>Medicamentos, insumos médicos, lentes y prótesis</td>
                <td>Factura</td>
                <td>
                  <input
                    v-model="medicinasMonto"
                    @input="formatInput('medicinasMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="medicinasVeces"
                    @input="validateInput('medicinasVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ medicinasTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>MEDICINA PREPAGADA</td>
                <td>
                  Medicina prepagada de contratos individuales o corporativos,
                  inclusive los descontados vía rol de pagos.
                </td>
                <td>Rol de Pago</td>
                <td>
                  <input
                    v-model="medicinaPrepagadaMonto"
                    @input="formatInput('medicinaPrepagadaMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="medicinaPrepagadaVeces"
                    @input="
                      validateInput('medicinaPrepagadaVeces', null, 1000000)
                    "
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ medicinaPrepagadaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>PRIMA DE SEGURO MÉDICO</td>
                <td>
                  Prima de seguro médico particuar de contratos individuales o
                  corporativos, inclusive los descontados vía rol de pagos.
                </td>
                <td>Rol de Pago</td>
                <td>
                  <input
                    v-model="primaMonto"
                    @input="formatInput('primaMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="primaVeces"
                    @input="validateInput('primaVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ primaTotal }}</p>
                </td>
              </tr>
              <tr>
                <td>DEDUCIBLES Y COPAGOS</td>
                <td>El deducible y copago no cancelado por la aseguradora</td>
                <td>Liquidación</td>
                <td>
                  <input
                    v-model="deduciblesMonto"
                    @input="formatInput('deduciblesMonto')"
                    type="text"
                    placeholder="USD"
                  />
                </td>
                <td>
                  <input
                    v-model="deduciblesVeces"
                    @input="validateInput('deduciblesVeces', null, 1000000)"
                    type="text"
                    placeholder="-"
                  />
                </td>
                <td class="text-right">
                  <p>{{ deduciblesTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="5">Total Salud</td>
                <td class="text-right">
                  <p>{{ saludTotal }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <strong>TOTAL DEDUCCIÓN DE GASTOS PERSONALES</strong>
                </td>
                <td class="text-right">
                  <p>{{ deduccionGastosPersonales }}</p>
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <h4>
                    <strong
                      >REBAJA DE IMPUESTO A LA RENTA POR GASTOS PERSONALES
                      PROYECTADOS</strong
                    >
                  </h4>
                </td>
                <td class="text-right">
                  <p>{{ rebajaGastosPersonales }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        class="mb-2"
        @click="enviarFormulario"
        :disabled="shouldDisableGastos() || shouldDisableCampos()"
      >
        Siguiente
      </button>
      <div v-if="shouldDisableGastos()" class="alert alert-danger" role="alert">
        No puedes avanzar porque los campos obligatorios están vacíos o valores
        sobrepasan el límite que seleccionó: {{ gastosPersonales }}
      </div>
    </form>
    <div v-else id="content" class="container o-auto">
      <!-- Tu tabla aquí -->
      <table class="table-custom">
        <thead>
          <tr class="p-doce">
            <th colspan="4" class="header-large">SRI<br />FORMULARIO SRI-GP</th>
            <th colspan="7" class="header-large">
              DECLARACIÓN DE GASTOS PERSONALES A SER UTILIZADOS POR EL EMPLEADOR
              EN EL CASO DE INGRESOS EN RELACIÓN DE DEPENDENCIA
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-doce" rowspan="2">EJERCICIO FISCAL</td>
            <td class="p-doce" rowspan="2">2</td>
            <td class="p-doce" rowspan="2">0</td>
            <td class="p-doce" rowspan="2">2</td>
            <td class="p-doce" rowspan="2">4</td>

            <td class="p-doce" rowspan="2">
              CIUDAD Y FECHA DE ENTREGA/RECEPCIÓN
            </td>
            <td class="p-ocho">CIUDAD</td>
            <td class="p-ocho">AÑO</td>
            <td class="p-ocho">MES</td>
            <td class="p-ocho">DIA</td>
          </tr>
          <tr>
            <td class="p-diesciseis">{{ ciudad }}</td>
            <td class="p-diesciseis">{{ anio }}</td>
            <td class="p-diesciseis">{{ mes }}</td>
            <td class="p-diesciseis">{{ dia }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table class="table-custom">
        <thead>
          <tr class="p-diez">
            <td colspan="7">
              <strong
                >Información / Identificación del empleado contribuyente (a ser
                llenado por el empleado)</strong
              >
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2" class="p-ocho">101</td>
            <td colspan="4" class="p-ocho">CÉDULA O PASAPORTE</td>
            <td rowspan="2" class="p-ocho">102</td>
            <td class="p-ocho">APELLIDOS Y NOMBRES COMPLETOS</td>
          </tr>
          <tr>
            <td colspan="5">{{ cedulaRuc }}</td>
            <td>{{ nombre }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table-custom">
        <tbody>
          <tr>
            <td colspan="4" class="p-nueve">
              <strong>INGRESOS PROYECTADOS (ver Nota 1)</strong>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              (+) TOTAL INGRESOS CON ESTE EMPLEADOR (con el empleador que más
              ingresos perciba)
            </td>
            <td class="p-ocho">103</td>
            <td class="p-catorce">USD$ {{ totalIngresosAnuales }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              (+) TOTAL INGRESOS CON OTROS EMPLEADORES (en caso de haberlos)
            </td>
            <td class="p-ocho">104</td>
            <td class="p-catorce">USD$ {{ ingresosAnualesEmpleador }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              <strong>(=) TOTAL INGRESOS PROYECTADOS</strong>
            </td>
            <td class="p-ocho">105</td>
            <td class="p-catorce">USD$ {{ ingresosAnualesConsolidado }}</td>
          </tr>
          <tr>
            <td colspan="4" class="p-ocho">
              <strong>GASTOS PROYECTADOS</strong>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">(+) GASTOS DE VIVIENDA</td>
            <td class="p-ocho">106</td>
            <td class="p-catorce">USD${{ viviendaTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              (+) GASTOS DE EDUCACIÓN ARTE Y CULTURA
            </td>
            <td class="p-ocho">107</td>
            <td class="p-catorce">USD$ {{ educacionArteCulturaTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">(+) GASTOS DE SALUD</td>
            <td class="p-ocho">108</td>
            <td class="p-catorce">USD$ {{ saludTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">(+) GASTOS DE VESTIMENTA</td>
            <td class="p-ocho">109</td>
            <td class="p-catorce">USD$ {{ vestimentaTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">(+) GASTOS DE ALIMENTACIÓN</td>
            <td class="p-ocho">110</td>
            <td class="p-catorce">USD$ {{ alimentacionTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">(+) GASTOS DE TURISMO</td>
            <td class="p-ocho">111</td>
            <td class="p-catorce">USD$ {{ turismoTotal }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              <strong
                >(=) TOTAL GASTOS PROYECTADOS (106+107+108+109+110+111)</strong
              >
            </td>
            <td class="p-ocho">112</td>
            <td class="p-catorce">USD$ {{ deduccionGastosPersonales }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              <strong
                >TRABAJADOR O SUS CARGAS FAMILIARES CON ENFERMEDAD CATASTRÓFICA
              </strong>
            </td>
            <td class="p-ocho">113</td>
            <td class="p-catorce" v-if="cargasFamiliares == true">SI</td>
            <td class="p-catorce" v-else>NO</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              <strong
                >NÚMERO DE CARGAS FAMILIARES PARA REBAJA DE GASTOS PERSONALES
              </strong>
            </td>
            <td class="p-ocho">114</td>
            <td class="p-catorce">{{ numeroCargas }}</td>
          </tr>
          <tr>
            <td colspan="2" class="p-ocho">
              <strong
                >REBAJA DE IMPUESTO A LA RENTA POR GASTOS PERSONALES
                PROYECTADOS</strong
              >
            </td>
            <td class="p-ocho">115</td>
            <td class="p-catorce">USD$ {{ rebajaGastosPersonales }}</td>
          </tr>
          <tr>
            <td colspan="4" class="p-ocho">
              <strong>NOTAS:</strong> 1.- Cuando un contribuyente trabaje con
              DOS O MÁS empleadores, presentará este informe al empleador con el
              que perciba mayores ingresos, el que efectuará la retención
              considerando los ingresos gravados y deducciones (aportes
              personales al IESS) con todos los empleadores, sobre la base
              imponible así obtenida, se aplicará la tarifa contenida en la
              tabla de Impuesto a la Renta de personas naturales y sucesiones
              indivisas de la Ley de Régimen Tributario Interno, con lo que se
              obtendrá la proyección del Impuesto a la Renta causado en el
              ejercicio económico. Al resultado obtenido se le restará la rebaja
              por la proyección de gastos personales, según los límites
              establecidos en la Ley, y se dividirá para 12, para determinar la
              alícuota mensual a retener por concepto de Impuesto a la Renta.
              Cuando la relación laboral inicie en un mes distinto de enero el
              resultado deberá dividirse para el número de meses que resten para
              finalizar el periodo. Una copia certificada, con la respectiva
              firma y sello del empleador, será presentada a los demás
              empleadores para que se abstengan de efectuar retenciones sobre
              los pagos efectuados por concepto de remuneración del trabajo en
              relación de dependencia
            </td>
          </tr>
          <tr>
            <td colspan="4" class="p-ocho">
              2.- Para efectos de este cálculo se considerará el valor de la
              canasta familiar básica, al mes de enero del ejercicio fiscal
              respecto del que se realiza la proyección, según los datos que
              publique el Instituto Nacional de Estadística y Censos.
            </td>
          </tr>
          <tr>
            <td colspan="4" class="p-ocho">
              3.- Se considerarán como cargas familiares a los padres, cónyuge o
              pareja en unión de hecho e hijos hasta los 21 años o con
              discapacidad de cualquier edad, siempre que no perciban ingresos
              gravados y que sean dependientes del sujeto pasivo. En ningún
              caso, dos o más contribuyentes podrán considerar a la misma carga
              familiar para la rebaja por gastos personales.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table class="table-custom">
        <thead>
          <tr>
            <td class="p-diez" colspan="4">
              <strong
                >Identificación del Agente de Retención (a ser llenado por el
                empleador)</strong
              >
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="p-ocho">
            <td rowspan="2">116</td>
            <td>RUC</td>
            <td rowspan="2">117</td>
            <td>RAZON SOCIAL, DENOMINACIÓN O APELLIDOS Y NOMBRES COMPLETOS</td>
          </tr>
          <tr style="width: 250px">
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table class="table-custom">
        <thead>
          <tr>
            <td colspan="2">Firmas</td>
          </tr>
        </thead>
        <tbody class="p-diez">
          <tr style="width: 50%">
            <td>EMPLEADOR / AGENTE DE RETENCIÓN</td>
            <td>EMPLEADO CONTRIBUYENTE</td>
          </tr>
          <tr style="height: 80px">
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button class="no-imprimir" @click="imprimir">Imprimir</button>
    </div>
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { db } from "@/db/db";
import { addDoc, collection } from "firebase/firestore";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  name: "GastosPersonales",
  data() {
    return {
      cedulaRuc: "",
      ciudad: "",
      anio: "",
      mes: "",
      phone: "",
      email: "",
      dia: "",
      nombre: null,
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
      cargasFamiliares: false,
      numeroCargas: 0,
      enfermedadCatastrofica: false,
      gastosCargas: {
        0: 5526.99,
        1: 7106.13,
        2: 8685.27,
        3: 11053.98,
        4: 13422.69,
        5: 15791.49,
      },
      rebajasMaximas: {
        0: 994.86,
        1: 1279.1,
        2: 1563.35,
        3: 1989.72,
        4: 2416.08,
        5: 2842.45,
      },
      mostrarFormulario: true,
      //gastos deducibles
      //vivienda
      adquisicionMonto: null,
      adquisicionVeces: null,
      interesMonto: null,
      interesVeces: null,
      impuestoMonto: null,
      impuestoVeces: null,
      alicuotaMonto: null,
      alicuotaVeces: null,
      arriendoMonto: null,
      arriendoVeces: null,
      pagoServiciosMonto: null,
      pagoServiciosVeces: null,
      //eduacion, arte y cultura
      matriculaMonto: null,
      matriculaVeces: null,
      utilesMonto: null,
      utilesVeces: null,
      uniformesMonto: null,
      uniformesVeces: null,
      transporteMonto: null,
      transporteVeces: null,
      educacionMonto: null,
      educacionVeces: null,
      cuidadoMonto: null,
      cuidadoVeces: null,
      equiposMonto: null,
      equiposVeces: null,
      creditosMonto: null,
      creditosVeces: null,
      //vestimenta
      vestimentaMonto: null,
      vestimentaVeces: null,
      //alimentacion
      productosMonto: null,
      productosVeces: null,
      pensionesMonto: null,
      pensionesVeces: null,
      restaurantesMonto: null,
      restaurantesVeces: null,
      //turismo local
      pasajesMonto: null,
      pasajesVeces: null,
      alimentacionTurismoMonto: null,
      alimentacionTurismoVeces: null,
      hospedajeMonto: null,
      hospedajeVeces: null,
      //salud
      honorariosMonto: null,
      honorariosVeces: null,
      serviciosMonto: null,
      serviciosVeces: null,
      medicinasMonto: null,
      medicinasVeces: null,
      medicinaPrepagadaMonto: null,
      medicinaPrepagadaVeces: null,
      primaMonto: null,
      primaVeces: null,
      deduciblesMonto: null,
      deduciblesVeces: null,
    };
  },
  computed: {
    //detalle ingresos del colaborador
    salario() {
      if (this.salarioMensual && this.salarioVeces) {
        return (
          parseFloat(this.salarioMensual) * parseFloat(this.salarioVeces)
        ).toFixed(2);
      }
      return null;
    },
    comisionesMandato() {
      if (this.comisionesMandatoMensual && this.comisionesMandatoVeces) {
        return (
          parseFloat(this.comisionesMandatoMensual) *
          parseFloat(this.comisionesMandatoVeces)
        ).toFixed(2);
      }
      return null;
    },
    remuneracionVariable() {
      if (this.remuneracionVariableMensual && this.remuneracionVariableVeces) {
        return (
          parseFloat(this.remuneracionVariableMensual) *
          parseFloat(this.remuneracionVariableVeces)
        ).toFixed(2);
      }
      return null;
    },
    horasExtras() {
      if (this.horasExtrasMensual && this.horasExtrasVeces) {
        return (
          parseFloat(this.horasExtrasMensual) *
          parseFloat(this.horasExtrasVeces)
        ).toFixed(2);
      }
      return null;
    },
    otros() {
      if (this.otrosMensual && this.otrosVeces) {
        return (
          parseFloat(this.otrosMensual) * parseFloat(this.otrosVeces)
        ).toFixed(2);
      }
      return null;
    },
    utilidades() {
      if (this.utilidadesMensual && this.utilidadesVeces) {
        return (
          parseFloat(this.utilidadesMensual) * parseFloat(this.utilidadesVeces)
        ).toFixed(2);
      }
      return null;
    },

    totalIngresosAnuales() {
      let total = 0;
      total += this.salario ? parseFloat(this.salario) : 0;
      total += this.comisionesMandato ? parseFloat(this.comisionesMandato) : 0;
      total += this.remuneracionVariable
        ? parseFloat(this.remuneracionVariable)
        : 0;
      total += this.horasExtras ? parseFloat(this.horasExtras) : 0;
      total += this.otros ? parseFloat(this.otros) : 0;
      total += this.utilidades ? parseFloat(this.utilidades) : 0;
      return total.toFixed(2);
    },

    ingresos() {
      if (this.ingresoMensual && this.ingresoVeces) {
        return (
          parseFloat(this.ingresoMensual) * parseFloat(this.ingresoVeces)
        ).toFixed(2);
      }
      return null;
    },
    vacaciones() {
      if (this.vacacionesMensual && this.vacacionesVeces) {
        return (
          parseFloat(this.vacacionesMensual) * parseFloat(this.vacacionesVeces)
        ).toFixed(2);
      }
      return null;
    },
    utilidadesEmpleador() {
      if (this.utilidadesEmpleadorMensual && this.utilidadesEmpleadorVeces) {
        return (
          parseFloat(this.utilidadesEmpleadorMensual) *
          parseFloat(this.utilidadesEmpleadorVeces)
        ).toFixed(2);
      }
      return null;
    },
    ingresosAnualesEmpleador() {
      let total = 0;
      total += this.ingresos ? parseFloat(this.ingresos) : 0;
      total += this.vacaciones ? parseFloat(this.vacaciones) : 0;
      total += this.utilidadesEmpleador
        ? parseFloat(this.utilidadesEmpleador)
        : 0;
      return total.toFixed(2);
    },
    ingresosAnualesConsolidado() {
      let total = 0;
      total += this.totalIngresosAnuales
        ? parseFloat(this.totalIngresosAnuales)
        : 0;
      total += this.ingresosAnualesEmpleador
        ? parseFloat(this.ingresosAnualesEmpleador)
        : 0;
      return total.toFixed(2);
    },
    //termina detalle ingresos del colaborador
    //calculo crédito tributario
    gastosPersonales() {
      if (this.enfermedadCatastrofica) {
        return 78957.0;
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
        return this.numeroCargas >= 5
          ? this.rebajasMaximas[5]
          : this.rebajasMaximas[this.numeroCargas];
      }
    },
    rebajaGastosPersonales() {
      let result;
      if (this.deduccionGastosPersonales >= this.gastosPersonales) {
        return this.rebajaMaxima;
      } else {
        result = this.deduccionGastosPersonales * 0.18;
      }
      return result.toFixed(2);
    },

    adquisicionTotal() {
      if (this.adquisicionMonto && this.adquisicionVeces) {
        return (
          parseFloat(this.adquisicionMonto) * parseFloat(this.adquisicionVeces)
        ).toFixed(2);
      }
      return null;
    },

    interesTotal() {
      if (this.interesMonto && this.interesVeces) {
        return (
          parseFloat(this.interesMonto) * parseFloat(this.interesVeces)
        ).toFixed(2);
      }
      return null;
    },
    impuestoTotal() {
      if (this.impuestoMonto && this.impuestoVeces) {
        return (
          parseFloat(this.impuestoMonto) * parseFloat(this.impuestoVeces)
        ).toFixed(2);
      }
      return null;
    },
    alicuotaTotal() {
      if (this.alicuotaMonto && this.alicuotaVeces) {
        return (
          parseFloat(this.alicuotaMonto) * parseFloat(this.alicuotaVeces)
        ).toFixed(2);
      }
      return null;
    },
    arriendoTotal() {
      if (this.arriendoMonto && this.arriendoVeces) {
        return (
          parseFloat(this.arriendoMonto) * parseFloat(this.arriendoVeces)
        ).toFixed(2);
      }
      return null;
    },
    pagoServiciosTotal() {
      if (this.pagoServiciosMonto && this.pagoServiciosVeces) {
        return (
          parseFloat(this.pagoServiciosMonto) *
          parseFloat(this.pagoServiciosVeces)
        ).toFixed(2);
      }
      return null;
    },
    viviendaTotal() {
      let total = 0;
      total += this.adquisicionTotal ? parseFloat(this.adquisicionTotal) : 0;
      total += this.interesTotal ? parseFloat(this.interesTotal) : 0;
      total += this.impuestoTotal ? parseFloat(this.impuestoTotal) : 0;
      total += this.alicuotaTotal ? parseFloat(this.alicuotaTotal) : 0;
      total += this.arriendoTotal ? parseFloat(this.arriendoTotal) : 0;
      total += this.pagoServiciosTotal
        ? parseFloat(this.pagoServiciosTotal)
        : 0;
      return total.toFixed(2);
    },

    matriculaTotal() {
      if (this.matriculaMonto && this.matriculaVeces) {
        return (
          parseFloat(this.matriculaMonto) * parseFloat(this.matriculaVeces)
        ).toFixed(2);
      }
      return null;
    },
    utilesTotal() {
      if (this.utilesMonto && this.utilesVeces) {
        return (
          parseFloat(this.utilesMonto) * parseFloat(this.utilesVeces)
        ).toFixed(2);
      }
      return null;
    },
    uniformesTotal() {
      if (this.uniformesMonto && this.uniformesVeces) {
        return (
          parseFloat(this.uniformesMonto) * parseFloat(this.uniformesVeces)
        ).toFixed(2);
      }
      return null;
    },
    transporteTotal() {
      if (this.transporteMonto && this.transporteVeces) {
        return (
          parseFloat(this.transporteMonto) * parseFloat(this.transporteVeces)
        ).toFixed(2);
      }
      return null;
    },
    educacionTotal() {
      if (this.educacionMonto && this.educacionVeces) {
        return (
          parseFloat(this.educacionMonto) * parseFloat(this.educacionVeces)
        ).toFixed(2);
      }
      return null;
    },
    cuidadoTotal() {
      if (this.cuidadoMonto && this.cuidadoVeces) {
        return (
          parseFloat(this.cuidadoMonto) * parseFloat(this.cuidadoVeces)
        ).toFixed(2);
      }
      return null;
    },
    equiposTotal() {
      if (this.equiposMonto && this.equiposVeces) {
        return (
          parseFloat(this.equiposMonto) * parseFloat(this.equiposVeces)
        ).toFixed(2);
      }
      return null;
    },
    creditosTotal() {
      if (this.creditosMonto && this.creditosVeces) {
        return (
          parseFloat(this.creditosMonto) * parseFloat(this.creditosVeces)
        ).toFixed(2);
      }
      return null;
    },
    educacionArteCulturaTotal() {
      let total = 0;
      total += this.matriculaTotal ? parseFloat(this.matriculaTotal) : 0;
      total += this.utilesTotal ? parseFloat(this.utilesTotal) : 0;
      total += this.uniformesTotal ? parseFloat(this.uniformesTotal) : 0;
      total += this.transporteTotal ? parseFloat(this.transporteTotal) : 0;
      total += this.educacionTotal ? parseFloat(this.educacionTotal) : 0;
      total += this.cuidadoTotal ? parseFloat(this.cuidadoTotal) : 0;
      total += this.equiposTotal ? parseFloat(this.equiposTotal) : 0;
      total += this.creditosTotal ? parseFloat(this.creditosTotal) : 0;
      return total.toFixed(2);
    },
    vestimentaTotal() {
      if (this.vestimentaMonto && this.vestimentaVeces) {
        return (
          parseFloat(this.vestimentaMonto) * parseFloat(this.vestimentaVeces)
        ).toFixed(2);
      }
      return null;
    },
    productosTotal() {
      if (this.productosMonto && this.productosVeces) {
        return (
          parseFloat(this.productosMonto) * parseFloat(this.productosVeces)
        ).toFixed(2);
      }
      return null;
    },
    pensionesTotal() {
      if (this.pensionesMonto && this.pensionesVeces) {
        return (
          parseFloat(this.pensionesMonto) * parseFloat(this.pensionesVeces)
        ).toFixed(2);
      }
      return null;
    },
    restaurantesTotal() {
      if (this.restaurantesMonto && this.restaurantesVeces) {
        return (
          parseFloat(this.restaurantesMonto) *
          parseFloat(this.restaurantesVeces)
        ).toFixed(2);
      }
      return null;
    },
    alimentacionTotal() {
      let total = 0;
      total += this.productosTotal ? parseFloat(this.productosTotal) : 0;
      total += this.pensionesTotal ? parseFloat(this.pensionesTotal) : 0;
      total += this.restaurantesTotal ? parseFloat(this.restaurantesTotal) : 0;
      return total.toFixed(2);
    },
    pasajesTotal() {
      if (this.pasajesMonto && this.pasajesVeces) {
        return (
          parseFloat(this.pasajesMonto) * parseFloat(this.pasajesVeces)
        ).toFixed(2);
      }
      return null;
    },
    alimentacionTurismoTotal() {
      if (this.alimentacionTurismoMonto && this.alimentacionTurismoVeces) {
        return (
          parseFloat(this.alimentacionTurismoMonto) *
          parseFloat(this.alimentacionTurismoVeces)
        ).toFixed(2);
      }
      return null;
    },
    hospedajeTotal() {
      if (this.hospedajeMonto && this.hospedajeVeces) {
        return (
          parseFloat(this.hospedajeMonto) * parseFloat(this.hospedajeVeces)
        ).toFixed(2);
      }
      return null;
    },
    turismoTotal() {
      let total = 0;
      total += this.pasajesTotal ? parseFloat(this.pasajesTotal) : 0;
      total += this.alimentacionTurismoTotal
        ? parseFloat(this.alimentacionTurismoTotal)
        : 0;
      total += this.hospedajeTotal ? parseFloat(this.hospedajeTotal) : 0;
      return total.toFixed(2);
    },
    honorariosTotal() {
      if (this.honorariosMonto && this.honorariosVeces) {
        return (
          parseFloat(this.honorariosMonto) * parseFloat(this.honorariosVeces)
        ).toFixed(2);
      }
      return null;
    },
    serviciosTotal() {
      if (this.serviciosMonto && this.serviciosVeces) {
        return (
          parseFloat(this.serviciosMonto) * parseFloat(this.serviciosVeces)
        ).toFixed(2);
      }
      return null;
    },
    medicinasTotal() {
      if (this.medicinasMonto && this.medicinasVeces) {
        return (
          parseFloat(this.medicinasMonto) * parseFloat(this.medicinasVeces)
        ).toFixed(2);
      }
      return null;
    },
    medicinaPrepagadaTotal() {
      if (this.medicinaPrepagadaMonto && this.medicinaPrepagadaVeces) {
        return (
          parseFloat(this.medicinaPrepagadaMonto) *
          parseFloat(this.medicinaPrepagadaVeces)
        ).toFixed(2);
      }
      return null;
    },
    primaTotal() {
      if (this.primaMonto && this.primaVeces) {
        return (
          parseFloat(this.primaMonto) * parseFloat(this.primaVeces)
        ).toFixed(2);
      }
      return null;
    },
    deduciblesTotal() {
      if (this.deduciblesMonto && this.deduciblesVeces) {
        return (
          parseFloat(this.deduciblesMonto) * parseFloat(this.deduciblesVeces)
        ).toFixed(2);
      }
      return null;
    },
    saludTotal() {
      let total = 0;
      total += this.honorariosTotal ? parseFloat(this.honorariosTotal) : 0;
      total += this.serviciosTotal ? parseFloat(this.serviciosTotal) : 0;
      total += this.medicinasTotal ? parseFloat(this.medicinasTotal) : 0;
      total += this.medicinaPrepagadaTotal
        ? parseFloat(this.medicinaPrepagadaTotal)
        : 0;
      total += this.primaTotal ? parseFloat(this.primaTotal) : 0;
      total += this.deduciblesTotal ? parseFloat(this.deduciblesTotal) : 0;
      return total.toFixed(2);
    },
    deduccionGastosPersonales() {
      let total = 0;
      total += this.viviendaTotal ? parseFloat(this.viviendaTotal) : 0;
      total += this.educacionArteCulturaTotal
        ? parseFloat(this.educacionArteCulturaTotal)
        : 0;
      total += this.vestimentaTotal ? parseFloat(this.vestimentaTotal) : 0;
      total += this.alimentacionTotal ? parseFloat(this.alimentacionTotal) : 0;
      total += this.turismoTotal ? parseFloat(this.turismoTotal) : 0;
      total += this.saludTotal ? parseFloat(this.saludTotal) : 0;
      return total.toFixed(2);
    },
  },
  methods: {
    shouldDisableGastos() {
      return (
        this.viviendaTotal > this.gastosPersonales ||
        this.vestimentaTotal > this.gastosPersonales ||
        this.educacionArteCulturaTotal > this.gastosPersonales ||
        this.alimentacionTotal > this.gastosPersonales ||
        this.turismoTotal > this.gastosPersonales ||
        this.saludTotal > this.gastosPersonales
      );
    },
    async sendDataToFirestore() {
      try {
        await addDoc(collection(db, "users"), {
          name: this.nombre,
          identity: this.cedulaRuc,
          phone: this.phone,
          email: this.email,
          ciudad: this.ciudad,
          anio: this.anio,
          mes: this.mes,
          dia: this.dia,
          salarioMensual: this.salarioMensual,
          salarioVeces: this.salarioVeces,
          comisionesMandatoMensual: this.comisionesMandatoMensual,
          comisionesMandatoVeces: this.comisionesMandatoVeces,
          remuneracionVariableMensual: this.remuneracionVariableMensual,
          remuneracionVariableVeces: this.remuneracionVariableVeces,
          horasExtrasMensual: this.horasExtrasMensual,
          horasExtrasVeces: this.horasExtrasVeces,
          otrosMensual: this.otrosMensual,
          otrosVeces: this.otrosVeces,
          utilidadesMensual: this.utilidadesMensual,
          utilidadesVeces: this.utilidadesVeces,
          ingresoMensual: this.ingresoMensual,
          ingresoVeces: this.ingresoVeces,
          vacacionesMensual: this.vacacionesMensual,
          vacacionesVeces: this.vacacionesVeces,
          utilidadesEmpleadorMensual: this.utilidadesEmpleadorMensual,
          utilidadesEmpleadorVeces: this.utilidadesEmpleadorVeces,
          cargasFamiliares: this.cargasFamiliares,
          numeroCargas: this.numeroCargas,
          enfermedadCatastrofica: this.enfermedadCatastrofica,
          adquisicionMonto: this.adquisicionMonto,
          adquisicionVeces: this.adquisicionVeces,
          interesMonto: this.interesMonto,
          interesVeces: this.interesVeces,
          impuestoMonto: this.impuestoMonto,
          impuestoVeces: this.impuestoVeces,
          alicuotaMonto: this.alicuotaMonto,
          alicuotaVeces: this.alicuotaVeces,
          arriendoMonto: this.arriendoMonto,
          arriendoVeces: this.arriendoVeces,
          pagoServiciosMonto: this.pagoServiciosMonto,
          pagoServiciosVeces: this.pagoServiciosVeces,
          matriculaMonto: this.matriculaMonto,
          matriculaVeces: this.matriculaVeces,
          utilesMonto: this.utilesMonto,
          utilesVeces: this.utilesVeces,
          uniformesMonto: this.uniformesMonto,
          uniformesVeces: this.uniformesVeces,
          transporteMonto: this.transporteMonto,
          transporteVeces: this.transporteVeces,
          educacionMonto: this.educacionMonto,
          educacionVeces: this.educacionVeces,
          cuidadoMonto: this.cuidadoMonto,
          cuidadoVeces: this.cuidadoVeces,
          equiposMonto: this.equiposMonto,
          equiposVeces: this.equiposVeces,
          creditosMonto: this.creditosMonto,
          creditosVeces: this.creditosVeces,
          vestimentaMonto: this.vestimentaMonto,
          vestimentaVeces: this.vestimentaVeces,
          productosMonto: this.productosMonto,
          productosVeces: this.productosVeces,
          pensionesMonto: this.pensionesMonto,
          pensionesVeces: this.pensionesVeces,
          restaurantesMonto: this.restaurantesMonto,
          restaurantesVeces: this.restaurantesVeces,
          pasajesMonto: this.pasajesMonto,
          pasajesVeces: this.pasajesVeces,
          alimentacionTurismoMonto: this.alimentacionTurismoMonto,
          alimentacionTurismoVeces: this.alimentacionTurismoVeces,
          hospedajeMonto: this.hospedajeMonto,
          hospedajeVeces: this.hospedajeVeces,
          honorariosMonto: this.honorariosMonto,
          honorariosVeces: this.honorariosVeces,
          serviciosMonto: this.serviciosMonto,
          serviciosVeces: this.serviciosVeces,
          medicinasMonto: this.medicinasMonto,
          medicinasVeces: this.medicinasVeces,
          medicinaPrepagadaMonto: this.medicinaPrepagadaMonto,
          medicinaPrepagadaVeces: this.medicinaPrepagadaVeces,
          primaMonto: this.primaMonto,
          primaVeces: this.primaVeces,
          deduciblesMonto: this.deduciblesMonto,
          deduciblesVeces: this.deduciblesVeces,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    shouldDisableCampos() {
      return (
        !this.cedulaRuc ||
        !this.nombre ||
        !this.anio ||
        !this.mes ||
        !this.dia ||
        !this.phone ||
        !this.email
      );
    },
    enviarFormulario() {
      if (this.shouldDisableGastos()) {
        this.showAlert = true;
      } else {
        this.sendDataToFirestore();
        this.mostrarFormulario = false;
      }
    },

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
      let keyCode = event.which ? event.which : event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
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
    checkCargasFamiliares() {
      this.numeroCargas = this.cargasFamiliares ? 1 : 0;
    },
    imprimir() {
      window.print();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media print {
  .no-imprimir {
    display: none;
  }
}
.alerta {
  color: red;
}

.o-auto {
  overflow-x: auto;
}

.table-custom {
  width: 100%;
  /* Ajusta esto al ancho que desees */
  max-width: 800px;
  /* Ajusta esto al ancho máximo que desees */
  margin: auto;
  /* Centra la tabla horizontalmente */
  border-collapse: separate;
}

.table-custom tr,
.table-custom td {
  padding: 2px;
  text-align: left;
}

.table-custom th {
  background-color: #add8e6;
  text-align: center;
}

.table-custom .header-large {
  background-color: #c7d5da;
}

.p-doce {
  font-size: 12px;
}

.p-diez {
  font-size: 10px;
}

.p-nueve {
  font-size: 9px;
}

.p-ocho {
  font-size: 8px;
}

.p-catorce {
  font-size: 14px;
}

.p-dieciseis {
  font-size: 16px;
}

.table-header {
  background-color: #5d7eaa;
  /* Color amarillo para las cabeceras */
}

.table-bordered td {
  border: 1px solid #dee2e6;
  /* Borde para las celdas */
}

.table-bordered th {
  color: #dee2e6;
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
