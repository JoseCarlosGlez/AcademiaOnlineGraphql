import { IResolvers } from 'graphql-tools'
import { database } from '../data/data.store';
import _ from 'lodash'

const type: IResolvers = {
    Student: {
        courses: (parent) => {
            const cursosLista: Array<any> = [];
            parent.courses.map((curso: string) => {

                cursosLista.push(_.filter(database.cursos, ['id', curso])[0])

            });

            return cursosLista
        }
    },

    Course: {
        students: parent => {
            const listaEstudiantes: Array<any> = [];

            const idCurso = parent.id;

            database.students.map((estudiante: any) => {

                if (estudiante.courses.find((id: any) => id === idCurso) ) listaEstudiantes.push(estudiante)

            });

            return listaEstudiantes

        },
        path:parent=> `http://www.udemy.com${parent.path}`
    
    },

}


export default type;