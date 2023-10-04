import {
    Jobs,
    Ingresos,
    Inmueble,
    Vehicle,
    Mueble,
    Inversion,
    Adeudos,
    MapperJobs,
    MapperInmueble,
    MapperMueble,
    MapperVehicles,
    MapperInversion,
    MapperAdeudos,
    MapperIngresos
} from '../types/types'

export const domicilioConfig = [
    {
        str: "NÚMERO EXTERIOR:",
        x: 559,
        key: "numero_exterior"
    },
    {
        str: "CALLE:",
        x: 158,
        key: "calle"
    },
    {
        str: "COLONIA / LOCALIDAD:",
        x: 559,
        key: "localidad_colonia"
    },
    {
        str: "CÓDIGO POSTAL:",
        x: 158,
        key: "codigo_postal"
    },
    {
        str: "ENTIDAD FEDERATIVA:",
        x: 559,
        key: "entidad_federativa"
    },
    {
        str: "MUNICIPIO / ALCALDÍA:",
        x: 158,
        key: "municipio_delegación"
    }
];

export const datosPuestoConfig = [
    {
        str: "EMPLEO, CARGO O COMISIÓN:",
        x: 281,
        key: "nombre_encargo_puesto"
    },
    {
        str: "NOMBRE DEL ENTE PÚBLICO:",
        x: 281,
        key: "dependencia_entidad"
    },
    {
        str: "FECHA DE CONCLUSIÓN DEL EMPLEO, CARGO O COMISIÓN:",
        x: 280,
        key: "fecha_inicio_del_encargo"
    },
    {
        str: "¿ESTÁ CONTRATADO POR HONORARIOS?:",
        x: 281,
        key: "contratado_por_honorarios"
    },
    // {
    //   str: "ENTIDAD FEDERATIVA:",
    //   x: 559,
    //   key: "entidad_federativa"
    // }
];

export const contactoConfig = [
    {
        str: "TELÉFONO DE OFICINA Y EXTENSIÓN:",
        x: 281,
        key: "telefono_oficina"
    }
];

export const mapperInmuebles = [
    { value: "TIPO DE INMUEBLE:", addPositions: 1, key: "tipo_inmueble" },
    { value: "SUPERFICIE DEL TERRENO:", addPositions: 1, key: "superficie_terreno" },
    { value: "SUPERFICIE DE CONSTRUCCIÓN:", addPositions: 1, key: "superficie_construccion" },
    { value: "FORMA DE ADQUISICIÓN:", addPositions: 1, key: "forma_adquisicion" },
    { value: "VALOR DE ADQUISICIÓN:", addPositions: 1, key: "valor" },
    { value: "TIPO DE MONEDA:", addPositions: 1, key: "moneda" },
    { value: "FECHA DE ADQUISICIÓN DEL INMUEBLE:", addPositions: 1, key: "fecha_adquisicion" },
] as MapperInmueble[];

export const mapperMuebles = [
    { value: "TITULAR DEL BIEN:", addPositions: 1, key: "titular_bien" },
    { value: "TIPO DEL BIEN:", addPositions: 1, key: "tipo_bien" },
    { value: "TRANSMISOR:", addPositions: 1, key: "transmisor" },
    { value: "DESCRIPCION GENERAL DEL BIEN:", addPositions: 1, key: "descripcion_bien" },
    { value: "FORMA DE ADQUISICIÓN:", addPositions: 1, key: "forma_adquisicion" },
    { value: "FORMA DE PAGO:", addPositions: 1, key: "forma_pago" },
    { value: "VALOR DE ADQUISICIÓN DEL MUEBLE:", addPositions: 1, key: "valor_mueble" },
    { value: "TIPO DE MONEDA:", addPositions: 1, key: "moneda" },
    { value: "FECHA DE ADQUISICIÓN:", addPositions: 1, key: "fecha_adquisicion" },
] as MapperMueble[];

export const mapperVehicles = [
    { value: "TIPO DE VEHÍCULO:", addPositions: 1, key: "tipo_vehiculo" },
    { value: "MARCA:", addPositions: 1, key: "marca" },
    { value: "MODELO:", addPositions: 1, key: "modelo" },
    { value: "FORMA DE ADQUISICIÓN:", addPositions: 1, key: "forma_adquisicion" },
    { value: "VALOR DE ADQUISICIÓN DEL VEHÍCULO:", addPositions: 1, key: "valor_compra" },
    { value: "TIPO DE MONEDA:", addPositions: 1, key: "moneda" },
    { value: "FECHA DE ADQUISICIÓN DEL VEHÍCULO:", addPositions: 1, key: "fecha_adquisicion" },
] as MapperVehicles[];

export const mapperInversion = [
    { value: "TIPO DE INVERSIÓN / ACTIVO:", addPositions: 1, key: "tipo_inversion" },
    { value: "TITULAR DE LA INVERSIÓN, CUENTA BANCARIA Y OTRO TIPO DE VALORES:", addPositions: 1, key: "titular" },
    { value: "SUB TIPO DE INVERSIÓN:", addPositions: 1, key: "subtipo" },
    { value: "INSTITUCIÓN O RAZÓN SOCIAL:", addPositions: -1, key: "institucion_razon_social" },
    { value: "TIPO DE MONEDA:", addPositions: -1, key: "moneda" },
    {
        value: "¿DÓNDE SE LOCALIZA LA INVERSIÓN, CUENTA BANCARIA Y OTRO TIPO DE VALORES / ACTIVOS ?", addPositions: -4, key: "ubicacion"
    },
] as MapperInversion[];

export const mapperAdeudos = [
    { value: "TITULAR DEL ADEUDO:", addPositions: 1, key: "titular" },
    { value: "TIPO DE ADEUDO:", addPositions: 1, key: "tipo_adeudo" },
    { value: "MONTO ORIGINAL DEL ADEUDO / PASIVO:", addPositions: 1, key: "monto" },
    { value: "FECHA DE ADQUISICIÓN DEL ADEUDO / PASIVO:", addPositions: 1, key: "fecha_adeudo" },
    { value: "TIPO DE MONEDA:", addPositions: 1, key: "moneda" },
    { value: "Nombre:", addPositions: -1, key: "nombre" },
    { value: "¿DÓNDE SE LOCALIZA EL ADEUDO?", addPositions: 1, key: "ubicacion" },
] as MapperAdeudos[];

export const mapperPublico = [
    { value: "ÁMBITO / SECTOR EN EL QUE LABORASTE:", addPositions: 11, key: "ambito_sector" },
    { value: "NIVEL / ORDEN DE GOBIERNO:", addPositions: 14, key: "nivel_orden_gobierno" },
    { value: "ÁMBITO PÚBLICO:", addPositions: 14, key: "ambito_publico" },
    { value: "NOMBRE DEL ENTE PÚBLICO / NOMBRE DE LA EMPRESA,", addPositions: 14, key: "dependencia_entidad" },
    { value: "SOCIEDAD O ASOCIACIÓN:", addPositions: 13, key: "sociedad_asociacion" },
    { value: "ÁREA DE ADSCRIPCIÓN / ÁREA:", addPositions: 13, key: "area_adscripcion" },
    { value: "EMPLEO, CARGO O COMISIÓN / PUESTO:", addPositions: 13, key: "nombre_encargo_puesto" },
    { value: "ESPECIFIQUE FUNCIÓN PRINCIPAL:", addPositions: 13, key: "funcion_principal" },
    { value: "FECHA DE INGRESO:", addPositions: 13, key: "fecha_inicio_del_encargo" },
    { value: "FECHA DE EGRESO:", addPositions: 13, key: "fecha_termino_del_encargo" },
    { value: "LUGAR DONDE SE UBICA:", addPositions: 13, key: "lugar_donde_se_ubica" },
] as MapperJobs[];

export const mapperPrivado = [
    { value: "ÁMBITO / SECTOR EN EL QUE LABORASTE:", addPositions: 10, key: "ambito_sector" },
    { value: "NIVEL / ORDEN DE GOBIERNO:", addPositions: 13, key: "nivel_orden_gobierno" },
    { value: "NOMBRE DEL ENTE PÚBLICO / NOMBRE DE LA EMPRESA,", addPositions: 13, key: "dependencia_entidad" },
    { value: "SOCIEDAD O ASOCIACIÓN:", addPositions: 12, key: "sociedad_asociacion" },
    { value: "RFC:", addPositions: 8, key: "rfc" },
    { value: "ÁREA DE ADSCRIPCIÓN / ÁREA:", addPositions: 13, key: "area_adscripcion" },
    { value: "EMPLEO, CARGO O COMISIÓN / PUESTO:", addPositions: 11, key: "nombre_encargo_puesto" },
    { value: "FECHA DE INGRESO:", addPositions: 11, key: "fecha_inicio_del_encargo" },
    { value: "FECHA DE EGRESO:", addPositions: 11, key: "fecha_termino_del_encargo" },
    { value: "LUGAR DONDE SE UBICA:", addPositions: 11, key: "lugar_donde_se_ubica" },
] as MapperJobs[];

export const mapperNeto = [
    { value: "ÁMBITO / SECTOR EN EL QUE LABORASTE:", addPositions: 10, key: "ambito_sector" },
    { value: "NIVEL / ORDEN DE GOBIERNO:", addPositions: 13, key: "nivel_orden_gobierno" },
    { value: "NOMBRE DEL ENTE PÚBLICO / NOMBRE DE LA EMPRESA,", addPositions: 13, key: "dependencia_entidad" },
    { value: "SOCIEDAD O ASOCIACIÓN:", addPositions: 12, key: "sociedad_asociacion" },
    { value: "RFC:", addPositions: 8, key: "rfc" },
    { value: "ÁREA DE ADSCRIPCIÓN / ÁREA:", addPositions: 13, key: "area_adscripcion" },
    { value: "EMPLEO, CARGO O COMISIÓN / PUESTO:", addPositions: 11, key: "nombre_encargo_puesto" },
    { value: "FECHA DE INGRESO:", addPositions: 11, key: "fecha_inicio_del_encargo" },
    { value: "FECHA DE EGRESO:", addPositions: 11, key: "fecha_termino_del_encargo" },
    { value: "LUGAR DONDE SE UBICA:", addPositions: 11, key: "lugar_donde_se_ubica" },
] as MapperJobs[];
//    "INGRESOS DEL
//    "",
//    "15398",
//    "13040",
//    "13,040",
//    "0",
export const mapperIngresos = [
    { value: "I. REMUNERACIÓN NETA DEL AÑO EN CURSO A LA FECHA DE CONCLUSIÓN DEL EMPLEO, CARGO O COMISIÓN DEL DECLARANTE POR SU CARGO PÚBLICO (POR CONCEPTO DE SUELDOS,", addPositions: 1, key: "remuneración_neta" },
    { value: "I. REMUNERACIÓN ANUAL NETA DEL DECLARANTE POR SU CARGO PÚBLICO (POR CONCEPTO DE SUELDOS, HONORARIOS, COMPENSACIONES, BONOS, AGUINALDOS Y OTRAS", addPositions: -1, key: "remuneración_anual_neta" },
    {
        value: "(CANTIDADES NETAS DESPUÉS DE IMPUESTOS):", addPositions: -1, key: "remuneración_mensual_neta"
    },
    { value: "II. OTROS INGRESOS DEL DECLARANTE (SUMA DEL II.1 AL II.5)", addPositions: -2, key: "otros_ingresos" },
    { value: "II.5 OTROS INGRESOS NO CONSIDERADOS A LOS ANTERIORES (DESPUÉS DE IMPUESTOS)", addPositions: -8, key: "ingresos_no_considerados" },
    { value: "II.4 POR ENAJENACIÓN DE BIENES (DESPUÉS DE IMPUESTOS)", addPositions: -8, key: "enajenacion_bienes" },
    { value: "A.- INGRESO MENSUAL NETO DEL DECLARANTE (SUMA DEL NUMERAL I Y II)", addPositions: -1, key: "ingreso_mensual_neto" },
] as MapperIngresos[];