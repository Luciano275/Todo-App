export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SEARCH_TODO = "SEARCH_TODO";

export function add_todo_action(text){
    return{
        type: ADD_TODO,
        payload: text
    }
}

export function remove_todo_action(index){
    return{
        type: REMOVE_TODO,
        payload: index
    }
}

export function search_todo_action(typing, todos){
    return{
        type: SEARCH_TODO,
        payload: {
            typing,
            todos
        }
    }
}