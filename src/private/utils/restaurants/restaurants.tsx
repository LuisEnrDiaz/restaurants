import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Rating,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";
import { RestaurantI } from "../../../core/models/restaurant";
import { dataRestaurants } from "../../../core/data/dataRestaurants";

export function Restaurants() {
    const restaurant: RestaurantI[] = dataRestaurants;

    const navigate = useNavigate();

    const viewMore = (event: SyntheticEvent, id: string) => {
        event.preventDefault();
        navigate(`restaurant/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <section
            id="restaurants"
            className="min-h-screen flex flex-col items-center gap-2"
        >
            <div className="w-full h-96 p-2 bg-bgBluePrimary-600 grid place-content-center font-concert">
                <h1 className="text-bgGreenSecondary-50 font-black text-4xl text-center sm:text-5xl">
                    Los restaurantes favoritos de la ciudad
                </h1>
            </div>

            <ul className="md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-5 p-5">
                {restaurant.map((restaurant) => (
                    <li className="p-5" key={restaurant.id}>
                        <Card className="w-full max-sm:max-w-[20rem] md:h-96 md:w-[40rem] flex-col md:flex-row shadow-lg">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full md:w-2/5 shrink-0 rounded-t-md rounded-b-none md:rounded-r-none md:rounded-l-md"
                            >
                                <img
                                    src={restaurant.img}
                                    alt={restaurant.name}
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>

                            <CardBody className="flex flex-col justify-between">
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    className="mb-4 uppercase"
                                >
                                    {restaurant.name}
                                </Typography>

                                <div className="flex items-center gap-2">
                                    <Rating value={4} />

                                    <Typography
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        4.0 Rated
                                    </Typography>
                                </div>

                                <Typography
                                    color="gray"
                                    className="mb-8 md:mb-4 mt-4 font-normal text-gray-700 "
                                >
                                    {restaurant.description}
                                </Typography>

                                <Button
                                    onClick={(event) =>
                                        viewMore(event, restaurant.id)
                                    }
                                    variant="text"
                                    className="flex items-center gap-2"
                                >
                                    ver más
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </CardBody>
                        </Card>
                    </li>
                ))}
            </ul>

            <div className="text-bgBluePrimary-800 w-full text-center text-lg font-medium my-4 ">
                <p>Proximamente más....</p>
            </div>
        </section>
    );
}
