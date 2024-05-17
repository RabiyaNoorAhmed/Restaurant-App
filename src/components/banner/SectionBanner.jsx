const SectionBanner = (props) => {
    return (
        <div>
            {/* menu banner */}
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
                <div className="py-48 flex flex-col items-center justify-center">
                    {/* content */}
                    <div className=" text-center px-4 space-y-7">
                        <h2 className="text-textcolor md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                            {props.title}
                            <span className="text-Red ml-2">{props.subtitle}</span>
                        </h2>
                        <p className="text-textcolor text-xl md:w-4/5 mx-auto">
                            {props.text}
                        </p>
                        <button className={`bg-Green font-semibold btn text-white px-8 py-3 rounded-full hover:text-Green hover:bg-white ${props.btnClass}`}>
                            {props.buttonText}
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionBanner
