import { Video } from "../../utils/video/video";
import { Restaurants } from "../../utils/restaurants/restaurants";

export function Home() {
    return (
        <main className="min-h-screen bg-bgBluePrimary-100">
            <Video />

            <section className="w-full h-[30rem] bg-decorationFamily bg-cover bg-no-repeat bg-center flex items-center justify-center"></section>

            <Restaurants />

            <section className="w-full h-[30rem] bg-decorationCouple bg-cover bg-no-repeat flex items-center justify-center"></section>
        </main>
    );
}
