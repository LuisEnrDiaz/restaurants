import {
    Carousel,
    Input,
    Rating,
    Select,
    Textarea,
    Typography,
    Option,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

import { dataRestaurants } from "../../../core/data/dataRestaurants";
import Reserve from "../../utils/modals/reserve/reserve";

export function Restaurant() {
    const { id } = useParams();

    const restaurant = dataRestaurants.find((restaurant) => {
        return restaurant.id === id;
    });

    return (
        <main className="min-h-screen flex flex-col items-center bg-bgBluePrimary-100 gap-5">
            <Carousel
                loop={true}
                autoplay={true}
                className="w-full h-[40rem] z-0 bg-bgBluePrimary-600"
            >
                <img
                    src={restaurant?.img}
                    alt={restaurant?.name}
                    className="h-full w-full object-cover"
                />

                <img
                    src={restaurant?.img2}
                    alt={restaurant?.name}
                    className="h-full w-full object-cover"
                />

                <img
                    src={restaurant?.img3}
                    alt={restaurant?.name}
                    className="h-full w-full object-cover"
                />
            </Carousel>

            <div className="w-full md:w-1/2 flex flex-col p-5 gap-4">
                <h1 className="text-3xl md:text-5xl font-medium font-concert">
                    {restaurant?.name}
                </h1>

                <div className="flex items-center gap-2">
                    <Rating value={4} />

                    <Typography color="blue-gray" className="font-medium">
                        4.0 Clasificado
                    </Typography>
                </div>

                <p className="font-normal text-gray-700 md:text-xl">
                    {restaurant?.description}
                </p>

                <div className="flex flex-col gap-4 p-2 pt-5 min-h-96 rounded-md">
                    <h2 className="text-2xl font-concert ">Reserva una mesa</h2>

                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                        <Input
                            crossOrigin={Input}
                            variant="static"
                            type="number"
                            label="¿Cuántas personas vais a ser?"
                            placeholder="Ej: 2"
                            max={10}
                            min={1}
                        />

                        <Select variant="static" label="Hora de la reserva">
                            <label>Comida</label>
                            <Option>13:00</Option>
                            <Option>13:30</Option>
                            <Option>14:00</Option>
                            <Option>14:30</Option>
                            <Option>15:00</Option>
                            <Option>15:30</Option>
                            <Option>16:00</Option>
                            <Option>16:30</Option>
                            <label>Cena</label>
                            <Option>20:00</Option>
                            <Option>20:30</Option>
                            <Option>21:00</Option>
                            <Option>21:30</Option>
                            <Option>22:00</Option>
                            <Option>22:30</Option>
                            <Option>23:00</Option>
                            <Option>23:30</Option>
                        </Select>

                        <Input
                            crossOrigin={Input}
                            variant="static"
                            type="date"
                            label="¿Para cuándo quieres reservar?"
                        />
                    </div>

                    <Textarea
                        className="p-1"
                        variant="static"
                        label="¿Algo que debamos saber?"
                        placeholder="Ej: Alergias, intolerancias..."
                    />

                    <div className="flex items-center justify-center">
                        <Reserve></Reserve>
                    </div>
                </div>
            </div>
        </main>
    );
}
