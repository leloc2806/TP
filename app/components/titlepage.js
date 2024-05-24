const TitlePage = ({title}) => {
    return(
        <div className="title-page block relative h-auto w-[80vw] max-[1100px]:w-[90vw] mx-auto font-normal text-[5vw] pt-[13rem] px-[0rem] pb-[3rem] max-[1100px]:pt-[160px] max-[1100px]:pb-[20px] max-[580px]:pt-[120px]">
            <div className="relative block w-full h-auto overflow-hidden">
                <h1 className="text-[4vw] font-normal relative block uppercase">{title}</h1>
            </div>   
            <span className="absolute bottom-0 left-0 block w-full h-px opacity-60 bg-[var(--color-black20)]"></span>
        </div>
    )
}

export default TitlePage;