export function Video() {
    return (
        <section className="relative h-screen">
            <video
                className="absolute h-full object-cover center"
                loop
                preload="true"
                autoPlay={true}
                muted
                src="./assets/videos/restaurantMd.mp4"
            ></video>

            <div className="absolute h-full w-full grid place-content-center place-items-center  p-1 text-white gap-2">
                <p className="text-4xl sm:text-6xl text-center font-black font-concert">
                    "Un estómago lleno una vida feliz"
                </p>

                <p className="text-2xl sm:text-3xl text-center font-concert">
                    ¿Por qué no encuentras tus restaurantes favoritos?
                </p>

                <a
                    href="#restaurants"
                    className="w-80 h-10 rounded-md bg-bgBluePrimary-700 m-2 p-1 shadow-bottom text-xl text-center  transition-all delay-75 hover:-translate-y-1 hover:bg-bgBluePrimary-600  hover:border-2 hover:border-solid hover:border-bgBluePrimary-800 "
                >
                    Ver los restaurantes
                </a>
            </div>
        </section>
    );
}
