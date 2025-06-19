import InputRow from '../InputRow/InputRow';
import './InputList.scss';
import {memo} from "react";

export interface InputListProps {
  rows: number[];
}

export default memo(function InputList({ rows }: InputListProps) {
  return (
    <div className="input-list">
      {rows.map((idx) => (
        <InputRow key={idx} index={idx} />
      ))}
    </div>
  );
})