import { PDFExtractPage } from 'pdf.js-extract';
import { Adeudos, Inversion, Mueble, Vehicle, Inmueble, Jobs, Ingresos } from '../types/types';
import {
    mapperAdeudos,
    mapperInversion,
    mapperMuebles,
    mapperVehicles,
    mapperInmuebles,
    mapperPrivado,
    mapperPublico,
} from '../mappers/mappers-config';



export class getDataParse {
    pages: readonly PDFExtractPage[];

    constructor(data: PDFExtractPage[]) {
        this.pages = Object.freeze(data);
    }

    getAdeudos(adeudosPositionsIdxs: number[][][]) {
        const pages = this.pages;

        return adeudosPositionsIdxs.map(([inicio, fin]) => {
            const adeudosPuesto = {} as Adeudos;

            if (inicio[1] === fin[1]) {
                pages[inicio[1] - 1].content
                    .slice(inicio[0], fin[0] + 2)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperAdeudos.find((h) => h.value === str);
                        console.log(array);

                        if (helpObj) {
                            adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            } else {
                pages[inicio[1] - 1].content
                    .slice(inicio[0])
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperAdeudos.find((h) => h.value === str);

                        if (helpObj) {
                            adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });

                pages[fin[1] - 1].content
                    .slice(0, fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperAdeudos.find((h) => h.value === str);

                        if (helpObj) {
                            adeudosPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            }
            return adeudosPuesto;
        });
    }

    getInversion(inversionPositionsIdxs: number[][][]): Inversion[] {
        const pages = this.pages;

        return inversionPositionsIdxs.map(([inicio, fin]) => {
            const inversionPuesto = {} as Inversion;

            if (inicio[1] === fin[1]) {
                pages[inicio[1] - 1].content
                    .slice(inicio[0], fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperInversion.find((h) => h.value === str);

                        if (helpObj) {
                            inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            } else {
                pages[inicio[1] - 1].content
                    .slice(inicio[0])
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperInversion.find((h) => h.value === str);

                        if (helpObj) {
                            inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });

                pages[fin[1] - 1].content
                    .slice(0, fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperInversion.find((h) => h.value === str);

                        if (helpObj) {
                            inversionPuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            }
            return inversionPuesto;
        });
    }

    getMueble(mueblePositionsIdxs: number[][][]): Mueble[] {
        const pages = this.pages;

        return mueblePositionsIdxs.map(([inicio, fin]) => {
            const mueblePuesto = {} as Mueble;

            if (inicio[1] === fin[1]) {
                // fin[0] + 1: Check if last string has the value
                // in the file in one line or multiple lines
                // Then modify the sum properly
                pages[inicio[1] - 1].content
                    .slice(inicio[0], fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperMuebles.find(
                            (h) =>
                                h.value === str &&
                                str !==
                                'INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)',
                        );

                        if (helpObj) {
                            mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            } else {
                pages[inicio[1] - 1].content
                    .slice(inicio[0])
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperMuebles.find(
                            (h) =>
                                h.value === str &&
                                str !==
                                'INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)',
                        );

                        if (helpObj) {
                            mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });

                pages[fin[1] - 1].content
                    .slice(0, fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperMuebles.find(
                            (h) =>
                                h.value === str &&
                                str !==
                                'INVERSIONES, CUENTAS BANCARIAS Y OTRO TIPO DE VALORES / ACTIVOS (SITUACIÓN ACTUAL)',
                        );

                        if (helpObj) {
                            mueblePuesto[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            }
            return mueblePuesto;
        });
    }

    getVehicle(vehiclePositionsIdxs: number[][][]): Vehicle[] {
        const pages = this.pages;

        return vehiclePositionsIdxs.map(([inicio, fin]) => {
            const puestoVehicle = {} as Vehicle;

            if (inicio[1] === fin[1]) {
                // fin[0] + 1: Check if last string has the value
                // in the file in one line or multiple lines
                // Then modify the sum properly
                pages[inicio[1] - 1].content
                    .slice(inicio[0], fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperVehicles.find((h) => h.value === str);

                        if (helpObj) {
                            puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            } else {
                pages[inicio[1] - 1].content
                    .slice(inicio[0])
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperVehicles.find((h) => h.value === str);

                        if (helpObj) {
                            puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });

                pages[fin[1] - 1].content
                    .slice(0, fin[0] + 1)
                    .map((c) => c.str)
                    .forEach((str, idx, array) => {
                        const helpObj = mapperVehicles.find((h) => h.value === str);

                        if (helpObj) {
                            puestoVehicle[helpObj.key] = array[idx + helpObj.addPositions];
                        }
                    });
            }
            return puestoVehicle;
        });
    }

    getInmueble(inmuePositionsIdxs: number[][]): Inmueble[] {
        const pages = this.pages;

        return inmuePositionsIdxs
            .map(([from, page]) => pages[page - 1].content.slice(from, from + 120).map((c) => c.str))
            .map((puesto) => {
                const inmueblePuesto = {} as Inmueble;

                puesto.forEach((str, idx) => {
                    const helpObj = mapperInmuebles.find(
                        (h) => h.value === str && str !== 'VEHÍCULOS (SITUACIÓN ACTUAL)',
                    );

                    if (helpObj) {
                        inmueblePuesto[helpObj.key] = puesto[idx + helpObj.addPositions];
                    }
                });
                return inmueblePuesto;
            });
    }

    getEmpleados(jobsPositionsIdxs: number[][]): Jobs[] {
        const pages = this.pages;

        return jobsPositionsIdxs
            .map(([from, page]) => pages[page - 1].content.slice(from, from + 24).map((c) => c.str))
            .map((puesto) => {
                const dataPuesto = {} as Jobs;
                const isPrivado = puesto[10] === 'PRIVADO';

                puesto.forEach((str, idx) => {
                    const mapper = isPrivado ? mapperPrivado : mapperPublico;
                    const helpObj = mapper.find(
                        (h) => h.value === str && str !== 'INGRESOS NETOS DEL DECLARANTE (SITUACIÓN ACTUAL)',
                    );

                    if (helpObj) {
                        dataPuesto[helpObj.key] = puesto[idx + helpObj.addPositions];
                    }
                });
                return dataPuesto;
            });
    }

    getDataIngresos(ingresosPositionsIdxs: number[][]) {
        const pages = this.pages;
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

}