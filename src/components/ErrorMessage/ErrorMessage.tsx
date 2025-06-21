import './ErrorMessage.scss'
export default function ErrorMessage({ className, message,...props }: {className?:string,  message: string }) {
    return (
        <div className={`error ${className}`} {...props}>
            <span>⚠️</span>
            <span >{message}</span>
        </div>
    );
}