import { ButtonHTMLAttributes, forwardRef } from "react";

interface BecImageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const BecImageButton = forwardRef<HTMLButtonElement, BecImageButtonProps>((props, ref) => {
    return (
        <>
        <button ref={ref} {...props}/>
        </>
    );
});

export {BecImageButton}