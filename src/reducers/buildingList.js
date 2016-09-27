import * as types from '../actions/actionTypes'

import LOCATION_DATA from '../../data/locations'

const initialState = {
  searchParams: {
    category: 1,
    address: "",
    location: LOCATION_DATA[0].value,
  },
  searchActive: false,
}

export default function buildingList(state = initialState, action = {}){
  switch(action.type){
    case types.APPLY_SEARCH_PARAMETERS:
      return {
        ...state,
        searchParams: action.data,
        searchActive: true
      }
    case types.CLEAR_SEARCH_PARAMETERS:
      return {
        ...state,
        searchParams: initialState.searchParams,
        searchActive: false
      }
    default:
      return state
  }
}