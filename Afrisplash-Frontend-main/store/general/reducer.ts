
interface stateProps{
    count: number,
}
const initialState: stateProps ={
    count: 1
}

export const counterReducer =(state: stateProps = initialState, action: any)=>{
    switch(action.type){
        case 'INCREMENT':
            return state.count + 1;
        case 'DECREMENT':
            return state.count - 1;
        default: 
            return state.count;
    }
}