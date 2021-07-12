import { ReactElement, FormEvent, ChangeEvent, useState } from 'react'
import style from './style.module.scss'
import LıstItemStyle from '../ListItem/style.module.scss'
import { useAppDispatch } from '../../Store/hooks'
import { addItem } from '../../Store/schedule/action'
import { ItemType } from '../ListItem'
interface Props {

}

function AddItem({ }: Props): ReactElement {
    const [newItem, setNewItem] = useState<ItemType>({Id: new Date().getTime(), Topic: "", description: "", date: String(new Date())})
    const dispatch = useAppDispatch();
    const submit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(newItem.Topic === "" || newItem.description === "") return
        dispatch(addItem(newItem));
        setNewItem({Id: new Date().getTime(), Topic: "", description: "", date: String(new Date())})
    }

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItem(prevItem => ({
            ...prevItem,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className={`${style.Container} ${LıstItemStyle.Container}`}>
                    <div className={style.Header}>
                        <input onChange={inputOnChange} value={newItem.Topic} placeholder="Topic" name="Topic" className={style.input} type="text" />
                    </div>
                    <div className={style.Content}>
                        <input onChange={inputOnChange} value={newItem.description} name="description" placeholder="Description" type="text" />
                        <h5>
                            {String(new Date())}
                        </h5>
                    </div>
                </div>
                <button className={style.addNewContainer}type="submit">
                +
                </button>
            </form>
        </>
    )
}

export default AddItem
