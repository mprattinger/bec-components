interface BecTopbarProps {
    programName: string,
    companyLabel: string | null,
    company: string | null
}

const BecTopbar: React.FC<BecTopbarProps> = (props) => {
    return (
        <>
            <div>
                <div>
                    {props.programName}
                </div>
                (props.company &&
                <div>
                    <span>{props.companyLabel}</span>
                    <span>{props.company}</span>
                </div>
                )
                <div>
                    
                </div>
            </div>
        </>
    );
}

export { BecTopbar }