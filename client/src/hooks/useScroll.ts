

export const useScrollHook = ()=>{

    return (id:string)=>{
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:"smooth"})
    }
}