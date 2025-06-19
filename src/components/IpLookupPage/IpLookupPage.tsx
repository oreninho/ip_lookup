import { useState } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import InputList from '../InputList/InputList';
import { Plus } from 'lucide-react';
import './IpLookupPage.scss';

export default function IpLookupPage() {
  const [rows, setRows] = useState<number[]>([1]);
  const addRow = () => setRows((r) => [...r, r.length + 1]);

  return (
    <div className="page">
      <Header
        title="IP Lookup"
        subtitle="Enter one or more IP addresses and get their country"
      />

      <div className="page__content">
        <Button onClick={addRow}  icon={<Plus size={16} color="#fff" />}>
          Add
        </Button>

        <hr className="page__divider" />

        <InputList rows={rows} />
      </div>
    </div>
  );
}