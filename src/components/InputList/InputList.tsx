import './InputList.scss';
import IpLookupController from "../IpLookupController/IpLookupContoller";
import {useEffect, useRef} from "react";

export default function InputList({rows,label = 'IP Addresses'}: {}) {
   const ref = useRef<HTMLDivElement>(null as never as HTMLDivElement );
    useEffect(() => {
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
    });
    }, [rows.length]);
    return (
      <div role={'list'} aria-label={label}>
        <div className="input-list">
          {rows.map(idx => (
              <IpLookupController key={idx} index={idx} role={'listitem'} />
          ))}
        </div>
          <div ref={ref}/>
      </div>
  );
}
