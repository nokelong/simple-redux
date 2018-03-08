import { combineReducers } from 'redux'

const counts = (state = 0, action) => {
	switch(action.type) {
	    case 'ADD_COUNT':	
	        console.log('ADD_COUNT');       
	        return state + 1;
	    case 'DEL_COUNT':
	        return state - 1;
	    case 'REST_COUNT':
            return 0;
        default:
            return state;
	}
}

const Reducer = combineReducers({counts})

export default Reducer;