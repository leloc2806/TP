const TitlePage = ({title}) => {
    return(
        <div className="title-page block relative h-auto w-[80vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem]">
            <div className="relative block w-full h-auto overflow-hidden">
                <h1 className="text-[6vw] font-normal relative block">{title}</h1>
            </div>   
            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
        </div>
    )
}

export default TitlePage;