import { IResolvers } from 'graphql-tools'
import { database } from '../data/data.store';
import __ from 'lodash'


const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.students;
        },
        estudiante(_: void, { id }): any {
            const resultado = database.students.find(estudiante => estudiante.id === id)

            if (resultado === undefined) {
                return { id: '-1', name: `No se ha encontrado id ${id}`, email: '', courses: [] }
            }

            return resultado
        },
        cursos(): any {
            return database.cursos;
        },

        curso(_: void, { id }): any {
            const resultado = database.cursos.find(curso => curso.id === id)


            if (resultado === undefined) {
                return { id: 'undefined', title: `undefined`, description: 'undefined', clases:-1, time:-1, logo:'undefined',level:'NULL',path: 'undefined', teacher: 'undefined', reviews:[] }
            }

            return resultado
        },
    }
}


export default query;


