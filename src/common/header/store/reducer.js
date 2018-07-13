import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState=fromJS({
	a:0,
	active:false,
	list:[]
})
export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.INCREAMENT:
			return state.set('a', a++);
	}
	return state;
}