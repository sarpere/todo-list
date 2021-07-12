import { ReactElement } from 'react';
import ListItem, { ItemType } from '../ListItem';
import style from './style.module.scss';

export type ItemsType = ItemType[]
interface Props {
    Items: ItemsType
}

function ListWrapper({ Items }: Props): ReactElement {
    return (
        <div className={style.Container}>
            {
                Items.map(item =>
                    <ListItem key={item.Id} item={item} />
                )
            }
        </div>
    )
}

export default ListWrapper
