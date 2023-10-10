import fs from 'fs';
import { Request, Response } from "express"
import { PDFExtract, PDFExtractOptions, PDFExtractResult } from "pdf.js-extract";
import {
    domicilioConfig,
    datosPuestoConfig,
    contactoConfig,
    mapperInmuebles,
    mapperMuebles,
    mapperVehicles,
    mapperInversion,
    mapperAdeudos,
    mapperPublico,
    mapperPrivado,
    mapperNeto,
    mapperIngresos
} from '../mappers/mappers-config'
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

export class DeclaraNetController {
    static async getData(req: Request, res: Response) {
        try {
            const dataEmpleado = {
                puestos: [] as any[]
            }

            function getDataAdeudos(adeudosPositionsIdxs: number[][][], data: PDFExtractResult) {
                const { pages } = Object.freeze(data);

                return adeudosPositionsIdxs.map(([inicio, fin]) => {
                    const adeudosPuesto = {} as Adeudos;

                    if (inicio[1] === fin[1]) {
                        pages[inicio[1] - 1].content.slice(inicio[0], fin[0] + 2).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperAdeudos.find(h => h.value === str)
                            console.log(array);

                            if (helpObj) {
                                adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    } else {
                        pages[inicio[1] - 1].content.slice(inicio[0]).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperAdeudos.find(h => h.value === str)

                            if (helpObj) {
                                adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })

                        pages[fin[1] - 1].content.slice(0, fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperAdeudos.find(h => h.value === str)

                            if (helpObj) {
                                adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    }
                    return adeudosPuesto
                })
            }

            function getDataInversion(inversionPositionsIdxs: number[][][], data: PDFExtractResult) {
                const { pages } = Object.freeze(data);

                return inversionPositionsIdxs.map(([inicio, fin]) => {
                    const inversionPuesto = {} as Inversion;

                    if (inicio[1] === fin[1]) {
                        pages[inicio[1] - 1].content.slice(inicio[0], fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperInversion.find(h => h.value === str)

                            if (helpObj) {
                                inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    } else {
                        pages[inicio[1] - 1].content.slice(inicio[0]).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperInversion.find(h => h.value === str)

                            if (helpObj) {
                                inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })

                        pages[fin[1] - 1].content.slice(0, fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperInversion.find(h => h.value === str)

                            if (helpObj) {
                                inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    }
                    return inversionPuesto
                })
            }

            function getDataMueble(mueblePositionsIdxs: number[][][], data: PDFExtractResult): Mueble[] {

                const { pages } = Object.freeze(data);

                return mueblePositionsIdxs.map(([inicio, fin]) => {
                    const mueblePuesto = {} as Mueble;

                    if (inicio[1] === fin[1]) {
                        // fin[0] + 1: Check if last string has the value
                        // in the file in one line or multiple lines
                        // Then modify the sum properly
                        pages[inicio[1] - 1].content.slice(inicio[0], fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperMuebles.find(h => h.value === str && str !== "INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)")

                            if (helpObj) {
                                mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    } else {
                        pages[inicio[1] - 1].content.slice(inicio[0]).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperMuebles.find(h => h.value === str && str !== "INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)")

                            if (helpObj) {
                                mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })

                        pages[fin[1] - 1].content.slice(0, fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperMuebles.find(h => h.value === str && str !== "INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)")

                            if (helpObj) {
                                mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    }
                    return mueblePuesto
                })
            }

            function getDataVehicle(vehiclePositionsIdxs: number[][][], data: PDFExtractResult) {

                const { pages } = Object.freeze(data);

                return vehiclePositionsIdxs.map(([inicio, fin]) => {
                    const puestoVehicle = {} as Vehicle;

                    if (inicio[1] === fin[1]) {
                        // fin[0] + 1: Check if last string has the value
                        // in the file in one line or multiple lines
                        // Then modify the sum properly
                        pages[inicio[1] - 1].content.slice(inicio[0], fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperVehicles.find(h => h.value === str)

                            if (helpObj) {
                                puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    } else {
                        pages[inicio[1] - 1].content.slice(inicio[0]).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperVehicles.find(h => h.value === str)

                            if (helpObj) {
                                puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })

                        pages[fin[1] - 1].content.slice(0, fin[0] + 1).map(c => c.str).forEach((str, idx, array) => {
                            const helpObj = mapperVehicles.find(h => h.value === str)

                            if (helpObj) {
                                puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                            }
                        })
                    }
                    return puestoVehicle
                })
            }

            function getDataInmueble(inmuePositionsIdxs: number[][], data: PDFExtractResult) {

                const { pages } = Object.freeze(data);

                return inmuePositionsIdxs
                    .map(([from, page]) => pages[page - 1].content.slice(from, from + 120).map(c => c.str))
                    .map(puesto => {
                        const inmueblePuesto = {} as Inmueble;

                        puesto.forEach((str, idx) => {
                            const helpObj = mapperInmuebles.find(h => h.value === str && str !== "VEHÍCULOS (SITUACIÓN ACTUAL)")

                            if (helpObj) {
                                inmueblePuesto[helpObj.key] = puesto[idx + helpObj.addPositions];
                            }
                        })
                        return inmueblePuesto;
                    })
            }

            function getDataEmpleados(jobsPositionsIdxs: number[][], data: PDFExtractResult) {
                const { pages } = Object.freeze(data);
                // Jobs positions has the following value [ [ 0, 2 ], [ 24, 2 ], [ 48, 2 ], [ 72, 2 ], [ 0, 3 ] ]
                // console.log(jobsPositionsIdxs);
                // This is interpreted like [startIndex, pageIndexFind]
                // console.log(jobsPositionsIdxs);

                return jobsPositionsIdxs
                    .map(([from, page]) => pages[page - 1].content.slice(from, from + 24).map(c => c.str))
                    .map(puesto => {
                        const dataPuesto = {} as Jobs;
                        const isPrivado = puesto[10] === 'PRIVADO';

                        puesto.forEach((str, idx) => {
                            const mapper = isPrivado ? mapperPrivado : mapperPublico;
                            const helpObj = mapper.find(h => h.value === str);

                            if (helpObj) {
                                dataPuesto[helpObj.key] = puesto[idx + helpObj.addPositions];
                            }
                        })
                        return dataPuesto;
                    })
            }

            function getDataIngresos(ingresosPositionsIdxs: number[][], data: PDFExtractResult) {
                const { pages } = Object.freeze(data);
                const [inicio, fin] = ingresosPositionsIdxs

                const ingresos = {} as Ingresos;
                let strArray: string[] = []

                if (inicio[1] === fin[1]) {
                    strArray = pages[inicio[1] - 1].content.slice(inicio[0], fin[0]).map(c => c.str)
                } else {
                    strArray = pages[inicio[1] - 1].content.slice(inicio[0]).map(c => c.str)
                    strArray = strArray.concat(pages[fin[1] - 1].content.slice(0, fin[0] + 1).map(c => c.str))
                }

                const numbers = strArray.map(e => parseInt(e.replace(',', ''))).filter(n => typeof n === 'number' && !isNaN(n))

                const isMensual = strArray.filter(e => e.includes('I.'))[0].toUpperCase().includes('MENSUAL')

                if (isMensual) {
                    ingresos.remuneracion_mensual_cargo_publico = numbers[0]
                    ingresos.remuneracion_mensual_neta = numbers[numbers.length - 1]
                } else {
                    ingresos.remuneracion_anual_cargo_publico = numbers[0]
                    ingresos.remuneracion_anual_neta = numbers[numbers.length - 1]
                }

                ingresos.otros_ingresos = numbers[1]

                return ingresos;
            }

            new PDFExtract().extract("pdf/pdf-7.pdf", {
                // disableCombineTextItems: true,
            }).then(async data => {

                // console.log(data.pages);

                const arrData = {
                    informacion_personal: {
                        nombre: "",
                        tipo_de_declaración: "",
                        fecha_de_declaración: ""
                    },
                    domicilio: {
                        calle: "",
                        numero_exterior: "",
                        localidad_colonia: "",
                        codigo_postal: "",
                        entidad_federativa: "",
                        municipio_delegación: ""
                    },
                    contacto: {
                        telefono_oficina: "",
                        correo_electrónico_institucional: ""
                    },
                    datos_del_puesto: {
                        nombre_encargo_puesto: "",
                        dependencia_entidad: "",
                        fecha_inicio_del_encargo: "",
                        contratado_por_honorarios: "",
                        clave_presupuestal_equivalente: ""
                    },
                    puestos: [] as Jobs[],
                    inmueble: [] as Inmueble[],
                    mueble: [] as Mueble[],
                    vehicle: [] as Vehicle[],
                    inversion: [] as Inversion[],
                    adeudos: [] as Adeudos[],
                    declaracion_datos_patrimoniales: {} as any,
                }
                // tuple type 
                const jobsPositionsIdxs: number[][] = [];
                const inmuePositionsIdxs: number[][] = [];
                const vehiclePositionsIdxs: number[][][] = [];
                const mueblePositionsIdxs: number[][][] = [];
                const InversionPositionsIdxs: number[][][] = [];
                const adeudosPositionsIdxs: number[][][] = [];
                const ingresosPositionsIdxs: number[][] = [];
                let strIngresos = "";
                data.pages.forEach((page) => {
                    const { pageInfo, content } = page
                    // console.log(content);
                    // res.send(content)
                    if (pageInfo.num === 1) {
                        content.forEach((text, idx) => {
                            if (text.str !== "" && text.str !== " ") {

                                // Información personal
                                if (text.x === 202 && text.y === 169.42000000000002) {
                                    arrData.informacion_personal.nombre = text.str
                                }
                                if (text.x === 202 && text.y === 179.5) {
                                    arrData.contacto.correo_electrónico_institucional = text.str
                                }
                                if (text.x === 602.61 && text.y === 94.27999999999997) {
                                    const regex = /(\d{2}\/\d{2}\/\d{4})/;
                                    const match = text.str.match(regex);

                                    if (match) {
                                        arrData.informacion_personal.fecha_de_declaración = match[1]
                                    } else {
                                        arrData.informacion_personal.fecha_de_declaración = ""
                                    }
                                }
                                // DOMICILIO - En base al objeto domicilioConfig se obtienen los datos del domicilio
                                // y se asignan al objeto secretaria.domicilio
                                arrData.domicilio = domicilioConfig.reduce((acc, curr) => {
                                    const { str, x, key } = curr;
                                    if (text.str === str) {
                                        acc[key] = content
                                            .find((tx) =>
                                                tx.x === x && tx.y === content[idx].y
                                            ).str;
                                    }
                                    return acc;
                                }, arrData.domicilio);

                                arrData.datos_del_puesto = datosPuestoConfig.reduce((acc, curr) => {
                                    const { str, x, key } = curr;
                                    if (text.str === str) {
                                        acc[key] = content
                                            .find((tx) =>
                                                tx.x === x && tx.y === content[idx].y
                                            ).str;
                                    }
                                    return acc;
                                }, arrData.datos_del_puesto);

                                arrData.contacto = contactoConfig.reduce((acc, curr) => {
                                    const { str, x, key } = curr;

                                    if (str && text.str === str) {
                                        acc[key] = content
                                            .find((tx) =>
                                                tx.x === x && tx.y === content[idx].y
                                            ).str;
                                    }
                                    return acc;
                                }, arrData.contacto);




                            }
                        });
                    }

                    page.content.forEach((content, idxContent) => {

                        // Setting up jobs positions
                        if (content.str === 'ÁMBITO / SECTOR EN EL QUE LABORASTE:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            jobsPositionsIdxs.push([idxContent, page.pageInfo.num])
                        }

                        if (content.str === 'TIPO DE INMUEBLE:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            inmuePositionsIdxs.push([idxContent, page.pageInfo.num])

                        }

                        if (content.str === 'TIPO DE VEHÍCULO:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            vehiclePositionsIdxs.push([[idxContent, page.pageInfo.num]])
                        }

                        if (content.str === 'EN CASO DE BAJA DEL VEHÍCULO INCLUIR MOTIVO:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            // This case is to check if there's a page change on 'TITULAR DEL BIEN:'
                            vehiclePositionsIdxs.forEach((mueble, idx) => {
                                if (mueble[1]) return

                                if (mueble[0][1] === page.pageInfo.num) {
                                    if (idxContent > mueble[0][0]) {
                                        vehiclePositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    }
                                    return
                                } else {
                                    vehiclePositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    return
                                }
                            })
                        }


                        if (content.str === 'TITULAR DEL BIEN:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            mueblePositionsIdxs.push([[idxContent, page.pageInfo.num]])
                        }

                        if (content.str === 'EN CASO DE BAJA DEL MUEBLE INCLUIR MOTIVO:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            // This case is to check if there's a page change on 'TITULAR DEL BIEN:'
                            mueblePositionsIdxs.forEach((mueble, idx) => {
                                if (mueble[1]) return

                                if (mueble[0][1] === page.pageInfo.num) {
                                    if (idxContent > mueble[0][0]) {
                                        mueblePositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    }
                                    return
                                } else {
                                    mueblePositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    return
                                }
                            })
                        }

                        if (content.str === 'TIPO DE INVERSIÓN / ACTIVO:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            InversionPositionsIdxs.push([[idxContent, page.pageInfo.num]])

                        }


                        if (content.str === 'INSTITUCIÓN O RAZÓN SOCIAL:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            // This case is to check if there's a page change on 'TITULAR DEL BIEN:'
                            InversionPositionsIdxs.forEach((inversion, idx) => {
                                if (inversion[1]) return

                                if (inversion[0][1] === page.pageInfo.num) {
                                    if (idxContent > inversion[0][0]) {
                                        InversionPositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    }
                                    return
                                } else {
                                    InversionPositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    return
                                }
                            })
                        }

                        if (content.str === 'TITULAR DEL ADEUDO:') {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            adeudosPositionsIdxs.push([[idxContent, page.pageInfo.num]])
                        }

                        if (content.str.includes('PRÉSTAMO O COMODATO POR TERCEROS')) {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            // This case is to check if there's a page change on 'TITULAR DEL BIEN:'
                            adeudosPositionsIdxs.forEach((adeudos, idx) => {
                                if (adeudos[1]) return

                                if (adeudos[0][1] === page.pageInfo.num) {
                                    if (idxContent > adeudos[0][0]) {
                                        adeudosPositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    }
                                    return
                                } else {
                                    adeudosPositionsIdxs[idx].push([idxContent, page.pageInfo.num])
                                    return
                                }
                            })
                        }

                        const posibleValues = new RegExp("NETOS DEL DECLARANTE");
                        if (posibleValues.test(content.str)) {
                            console.log("Into ingresos")
                            strIngresos = content.str;
                            ingresosPositionsIdxs.push([idxContent, page.pageInfo.num])
                        }

                        if (content.str.includes('A.') && content.str.includes('(SUMA DEL NUMERAL I Y II)')) {
                            // Here, push to helper, if the current string it's the mentioned
                            // then, save the current index and the current page scanned
                            // This case is to check if there's a page change on 'TITULAR DEL BIEN:'
                            if (ingresosPositionsIdxs.length === 1) {
                                ingresosPositionsIdxs.push([idxContent, page.pageInfo.num])
                            }
                        }
                        // console.log({ content: content.str, width: content.width, height: content.height }, ',')

                    });
                })
                // console.log({ ingresosPositionsIdxs }, "dasd");

                arrData.declaracion_datos_patrimoniales = getDataIngresos(ingresosPositionsIdxs, data)
                arrData.puestos = getDataEmpleados(jobsPositionsIdxs, data)
                arrData.inmueble = getDataInmueble(inmuePositionsIdxs, data)
                arrData.vehicle = getDataVehicle(vehiclePositionsIdxs, data)
                arrData.mueble = getDataMueble(mueblePositionsIdxs, data)
                arrData.inversion = getDataInversion(InversionPositionsIdxs, data)
                arrData.adeudos = getDataAdeudos(adeudosPositionsIdxs, data)
                // console.log(arrData, "cs");

                res.send(arrData)

                fs.writeFileSync('data.json', JSON.stringify(dataEmpleado.puestos, null, 2));
            })


        } catch (error) {
            console.log(error);

        }
    }
}
