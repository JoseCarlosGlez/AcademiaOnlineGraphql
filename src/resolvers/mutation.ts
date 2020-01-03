import { IResolvers } from 'graphql-tools'
import __ from 'lodash'
import { database } from '../data/data.store';


const mutation: IResolvers = {

    Mutation: {
        cursoNuevo(_: void, { curso }): any {
            const ItemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }


            if (!database.cursos.find(dbCurso => dbCurso.title.toLowerCase() === ItemCurso.title.toLowerCase())) {

                database.cursos.push(ItemCurso)
                return ItemCurso
            }

            return {
                id: 'undefined',
                title: 'undefined',
                description: 'undefined',
                clases: -1,
                time: 0.0,
                level: 'NULL',
                logo: 'undefined',
                path: 'undefined',
                teacher: 'undefined',
                reviews: []

            }

        },
        modificarCurso(_: void, { curso }): any {

            const elementoExiste = __.findIndex(database.cursos, (o) => {
                return o.id === curso.id

            })


            if (elementoExiste > -1) {
                const valoraciones = database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoExiste] = curso;
                return curso;

            }


            return {
                id: 'undefined',
                title: 'undefined',
                description: 'undefined',
                clases: -1,
                time: 0.0,
                level: 'NULL',
                logo: 'undefined',
                path: 'undefined',
                teacher: 'undefined',
                reviews: []

            }

        },


        eliminarCurso(_: void, { id }): any {

            const cursoEliminado = __.find(database.cursos, { 'id': id })

            if (cursoEliminado) {
                database.cursos = __.filter(database.cursos, (curso) => curso.id !== id)
                return cursoEliminado
            }

            return {
                id: 'undefined',
                title: 'undefined',
                description: 'undefined',
                clases: -1,
                time: 0.0,
                level: 'NULL',
                logo: 'undefined',
                path: 'undefined',
                teacher: 'undefined',
                reviews: []

            }







        }



    }


}





export default mutation;


