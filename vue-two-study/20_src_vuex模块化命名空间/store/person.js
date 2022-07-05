import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions : {
        addPerson(context, value) {
            console.log('添加人')
            let person = {
                id: nanoid() ,
                name: value
            }
            context.commit('ADD_PERSON', person)
        }
    },
    mutations : {
        ADD_PERSON(state, value) {
            console.log('添加小王')
            state.personList.unshift(value)
        }
    },
    state : {
        personList: [
            {id: '001', name: '张三'},
        ]
    },
    getters : {},
}
