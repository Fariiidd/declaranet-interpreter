export type Jobs = {
    ambito_sector?: string;
    nivel_orden_gobierno?: string;
    ambito_publico?: string;
    dependencia_entidad?: string;
    sociedad_asociacion?: string;
    area_adscripcion?: string;
    nombre_encargo_puesto?: string;
    funcion_principal?: string;
    fecha_inicio_del_encargo?: string;
    fecha_termino_del_encargo?: string;
    lugar_donde_se_ubica?: string;
    rfc?: string;
}

export type Ingresos = {
    otros_ingresos?: number;
    remuneracion_mensual_cargo_publico?: number;
    remuneracion_anual_cargo_publico?: number
    remuneracion_mensual_neta?: number
    remuneracion_anual_neta?: number;
}

export type Inmueble = {
    tipo_inmueble?: string;
    superficie_terreno?: string;
    superficie_construccion?: string;
    forma_adquisicion?: string;
    valor: string;
    moneda: string;
    fecha_adquisicion: string;
}

export type Vehicle = {
    tipo_vehiculo?: string;
    marca?: string;
    modelo?: string;
    forma_adquisicion?: string;
    valor_compra?: string;
    moneda?: string;
    fecha_adquisicion?: string;
}

export type Mueble = {
    titular_bien?: string;
    tipo_bien?: string;
    transmisor?: string;
    descripcion_bien?: string;
    forma_adquisicion?: string;
    forma_pago?: string;
    moneda?: string;
    valor_mueble?: string;
    fecha_adquisicion?: string;
}

export type Inversion = {
    tipo_inversion?: string;
    titular?: string;
    subtipo?: string;
    institucion_razon_social?: string;
    rfc?: string;
    moneda?: string;
    ubicacion?: string;
}

export type Adeudos = {
    titular: string;
    tipo_adeudo: string;
    monto: string;
    fecha_adeudo: string;
    moneda: string;
    nombre: string;
    ubicacion: string;
}

export type MapperJobs = {
    value: string;
    addPositions: number,
    key: keyof Jobs
}

export type MapperInmueble = {
    value: string;
    addPositions: number,
    key: keyof Inmueble
}

export type MapperMueble = {
    value: string;
    addPositions: number,
    key: keyof Mueble
}

export type MapperVehicles = {
    value: string;
    addPositions: number,
    key: keyof Vehicle
}

export type MapperInversion = {
    value: string;
    addPositions: number,
    key: keyof Inversion
}

export type MapperAdeudos = {
    value: string;
    addPositions: number,
    key: keyof Adeudos
}

export type MapperIngresos = {
    value: string;
    addPositions: number,
    key: keyof Ingresos
}