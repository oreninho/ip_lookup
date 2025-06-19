import './InputRow.scss';

export interface InputRowProps {
  index: number;
}

export default function InputRow({ index }: InputRowProps) {
  return (
    <div className="input-row">
      <span className="input-row__index">{index}</span>
      <input
        className="input-row__field"
        type="text"
        placeholder="e.g. 8.8.8.8"
      />
    </div>
  );
}