

type Props = {
    children:React.ReactNode,
    className?:string
}

export const HeaderText = ({children , className = ''}:Props) => {
    return (
        <h1 className ={`font-alt text-3xl font-bold basis-3/5 text-[#5e0000] ${className}`}>{children}</h1>
    );
}