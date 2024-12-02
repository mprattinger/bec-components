import { ButtonHTMLAttributes, forwardRef } from "react";

interface BecButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const BecButton = forwardRef<HTMLButtonElement, BecButtonProps>(({className, ...props}, ref) => {
    return (
        <>
        <button ref={ref} className={className} {...props} />
        </>
    );
})

export { BecButton }