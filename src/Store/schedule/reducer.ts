import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './action';
import { ItemsType } from '../../Components/ListWrapper'

interface schedule {
  Items: ItemsType;
}

const initlState = { 
  Items: [
    {Id: 0, Topic: 'Web Programming', description: "Working Typescript", date: String(new Date())},
    {Id: 1, Topic: 'Web Programming', description: "Working Jest", date: String(new Date())},
    {Id: 2, Topic: 'Backend programming', description: "Working Express", date: String(new Date())},
    {Id: 3, Topic: 'Backend programming', description: "Working NodeJs", date: String(new Date())}
  ] 
} as schedule;

const scheduleReducer = createReducer(initlState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      state.Items = [action.payload].concat(state.Items)
    })
    .addCase(removeItem, (state, action) => {
      state.Items = state.Items.filter(item => item.Id !== action.payload.Id )
    })
});

export default scheduleReducer;
