import who from '../actions/who';

export default function(state = null, action) {
	//console.log('Action received', action);
	switch (action.type) {
		case who.FETCH_WEATHER: 
			return action.payload;
	}
	return state
}