"use client";

import {
    Button,
    Dialog,
    Card,
    CardHeader,
    Typography,
    CardBody,
    Input,
    Checkbox,
    CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export default function Reserve() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((cur) => !cur);
    };

    return (
        <>
            <Button
                className="w-80 h-10 rounded-md bg-bgBluePrimary-700 m-2 p-1 shadow-bottom text-xl text-center  transition-all delay-75 hover:-translate-y-1 hover:bg-bgBluePrimary-600  hover:border-2 hover:border-solid hover:border-bgBluePrimary-800"
                onClick={handleOpen}
            >
                Reservar
            </Button>

            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none "
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="filled"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center p-2 bg-bgBluePrimary-600 shadow-bgBluePrimary-600"
                    >
                        <Typography
                            className="text-center "
                            variant="h4"
                            color="white"
                        >
                            Regístrate para finalizar tu reserva
                        </Typography>
                    </CardHeader>

                    <CardBody className="flex flex-col gap-4">
                        <Input
                            crossOrigin={"*"}
                            label="Teléfono"
                            placeholder="Ej: 1234567890"
                            type="tel"
                            size="lg"
                            variant="static"
                        />

                        <Input
                            crossOrigin={"*"}
                            label="Correo electrónico"
                            placeholder="Ej: correo@correo.com"
                            size="lg"
                            variant="static"
                        />

                        <Input
                            crossOrigin={"*"}
                            label="Contraseña"
                            placeholder="Ej: contraseña"
                            size="lg"
                            variant="static"
                        />

                        <div className="-ml-2.5">
                            <Checkbox
                                className="border-solid border-[1px]"
                                crossOrigin={Checkbox}
                                label="Recordarme"
                            />
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0">
                        <Button
                            className="rounded-md bg-bgBluePrimary-700 shadow-bottom text-lg transition-all delay-75 hover:-translate-y-1 hover:bg-bgBluePrimary-600  hover:border-2 hover:border-solid hover:border-bgBluePrimary-800"
                            variant="filled"
                            onClick={handleOpen}
                            fullWidth
                        >
                            Registrarse
                        </Button>

                        <Typography
                            variant="small"
                            className="mt-6 flex justify-center"
                        >
                            Ya tienes una cuenta creada?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpen}
                            >
                                Iniciar sesion
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
