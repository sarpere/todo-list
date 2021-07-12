import { ReactElement } from 'react'
import style from './style.module.scss'
import { useAppDispatch } from '../../Store/hooks'
import { removeItem } from '../../Store/schedule/action'
interface Props {
    item: ItemType
}

export interface ItemType {
    Id: number;
    Topic: string;
    description: string;
    date: string;
}

function ListItem({ item }: Props): ReactElement {
    const { Topic, description, date } = item;
    const dispatch = useAppDispatch();
    const onRemove = () => {
        dispatch(removeItem(item))
    }
    return (
        <div className={style.Container}>
            <div className={style.remove} onClick={onRemove}> x </div>
            <div className={style.Header}>
                <h2>{Topic}</h2>
            </div>
            <div className={style.Content}>
                <p>
                    {description}
                </p>
                <h5>
                    {date}
                </h5>
            </div>
        </div>
    )
}

export default ListItem
