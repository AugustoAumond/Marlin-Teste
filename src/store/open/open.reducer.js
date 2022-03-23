export default function listReducer (state = false, 
    action){
    
    switch(action.type){
        case 'change':
            return action;

        default:
        return state
    } 
}