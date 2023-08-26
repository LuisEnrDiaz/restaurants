import { Button } from "@material-tailwind/react";
import { SyntheticEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
    const location = useLocation();

    window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const header = document.querySelector("header");

        if (scroll <= 250) {
            header?.classList.add("bg-transparent");
            header?.classList.remove("bg-bgBluePrimary-600");
            header?.classList.remove("shadow-md");
        } else {
            header?.classList.remove("bg-transparent");
            header?.classList.add("bg-bgBluePrimary-600");
            header?.classList.add("shadow-md");
        }
    });

    const navigate = useNavigate();

    const returnHome = (event: SyntheticEvent) => {
        event.preventDefault();
        navigate("/");
        window.scrollTo(0, 0);
    };

    const returnToRestaurants = (event: SyntheticEvent) => {
        event.preventDefault();
        navigate("/#restaurants");
    };

    const isRestaurantPage = /^\/restaurant\/\d+$/g.test(location.pathname);

    useEffect(() => {
        if (location.hash === "#restaurants") {
            const restaurantsSection = document.getElementById("restaurants");
            if (restaurantsSection) {
                restaurantsSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    return (
        <header
            className={`h-14 w-full flex items-center justify-between px-4 fixed top-0 z-10 transition-all ease-linear delay-75`}
        >
            <button
                onClick={returnHome}
                className="bg-bgBluePrimary-600 p-2 rounded-full"
            >
                <img className="w-9" src="/assets/logo.png" alt="" />
            </button>

            {isRestaurantPage ? (
                <Button
                    onClick={returnToRestaurants}
                    variant="text"
                    className="flex text-white text-base items-center gap-2 p-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                    volver
                </Button>
            ) : null}
        </header>
    );
}
