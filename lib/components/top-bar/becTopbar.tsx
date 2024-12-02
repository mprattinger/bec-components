interface BecTopbarProps {
    programName: string,
    companyLabel: string | null,
    company: string | null
}

const BecTopbar: React.FC<BecTopbarProps> = (props) => {
    return (
        <>
            <div className="flex w-full h-[30px]">
                <div className="font-bold text-becblue-500 text-2xl">
                    {props.programName}
                </div>
                {props.company != null &&
                    <div className="flex h-full items-center">
                        <span className="text-sm mr-2">{props.companyLabel}</span>
                        <span className="font-bold text-becblue-500">{props.company}</span>
                    </div>
                }
                <div className="flex gap-2 ml-2">

                </div>
            </div>
        </>
    );
}

export { BecTopbar }