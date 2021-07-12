import { useTranslation } from 'react-i18next';
import AddItem from '../Components/AddItem';
import ListWrapper from '../Components/ListWrapper'
import { useAppSelector } from '../Store/hooks'
interface Props {}


const Layout = (props: Props) => {
  const { t } = useTranslation();
  const { Items } = useAppSelector(state => state.schedule)
  return (
    <div>
      <h1>{t('hello')}</h1>
      <AddItem />
      <ListWrapper Items={Items}/>
    </div>
  );
};

export default Layout;
