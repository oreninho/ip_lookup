import { useState } from 'react';
// import Header from '../Header/Header';
import Button from '../Button/Button';
import InputList from '../InputList/InputList';
import { Plus } from 'lucide-react';
import './IpLookupPage.scss';
import {useTranslation} from "react-i18next";


const Header = (props: {title: string, subtitle?: string}) => {
    return (
        <header className="header">
        <h3 className="header__title">{props.title}</h3>
        <hr className="header__divider" />
        {props.subtitle && <p className="header__subtitle">{props.subtitle}</p>}
        </header>
    );

}
export default function IpLookupPage() {
  const [rows, setRows] = useState<number[]>([1]);
  const {t} = useTranslation('ipLookup');

  const addRow = () => setRows((r) => [...r, r.length + 1]);


  return (
    <div className="page">
      <Header
        title={t('TITLE')}
        subtitle={t('SUBTITLE')}
      />

      <div className="page__content">
        <Button className={'stick'} onClick={addRow} >
            <Plus size={14} color="#fff" />
            <span>{t('ADD_BUTTON_LABEL')}</span>

        </Button>

        <hr className="page__divider" />

        <InputList rows={rows} label={t('LIST_LABEL')} />
      </div>
    </div>
  );
}