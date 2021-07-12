import { createAction } from '@reduxjs/toolkit';
import { ADD_ITEM, REMOVE_ITEM } from './type';
import { ItemType } from '../../Components/ListItem';
const addItem = createAction<ItemType>(ADD_ITEM);
const removeItem = createAction<ItemType>(REMOVE_ITEM);

export { addItem, removeItem };
