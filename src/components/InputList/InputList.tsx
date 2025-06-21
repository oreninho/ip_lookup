import './InputList.scss';
import IpLookupController from "../IpLookupController/IpLookupContoller";
import {useEffect, useRef} from "react";

export default function InputList({rows,label = 'IP Addresses'}: {}) {
   const endOfListRef = useRef<HTMLDivElement>(null as never as HTMLDivElement );
    useEffect(() => {
        endOfListRef.current?.scrollIntoView({
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
          <div ref={endOfListRef}/>
      </div>
  );
}
