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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reserve() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const notify = () => {
        toast.success(
            "¡Tu reserva ha sido realizada! Recibirás un email de confirmación con los datos de tu reserva.",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        );
        handleOpenModal();
    };

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <>
            <Button
                className="w-80 h-10 rounded-md bg-bgBluePrimary-700 m-2 p-1 shadow-bottom text-xl text-center  transition-all delay-75 hover:-translate-y-1 hover:bg-bgBluePrimary-600  hover:border-2 hover:border-solid hover:border-bgBluePrimary-800"
                onClick={handleOpenModal}
            >
                Reservar
            </Button>

            <ToastContainer
                style={{ textAlign: "center" }}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <Dialog
                size="xs"
                open={openModal}
                handler={handleOpenModal}
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
                            label="Correo electrónico"
                            placeholder="Ej: correo@correo.com"
                            type="email"
                            size="lg"
                            variant="static"
                            autoFocus={false}
                        />

                        <Input
                            crossOrigin={"*"}
                            label="Teléfono"
                            placeholder="Ej: 1234567890"
                            type="tel"
                            size="lg"
                            maxLength={9}
                            autoFocus={false}
                            variant="static"
                        />

                        <Input
                            crossOrigin={"*"}
                            label="Contraseña"
                            placeholder="Ej: contraseña"
                            size="lg"
                            variant="static"
                            autoFocus={false}
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
                            className="w-full  rounded-md bg-bgBluePrimary-700  p-1 shadow-bottom text-xl text-center  transition-all delay-75 hover:-translate-y-1 hover:bg-bgBluePrimary-600  hover:border-2 hover:border-solid hover:border-bgBluePrimary-800"
                            onClick={notify}
                        >
                            Registrarse
                        </Button>

                        <Typography
                            variant="small"
                            className="mt-6 flex justify-center"
                        >
                            ¿Ya tienes una cuenta creada?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpenModal}
                            >
                                Iniciar sesión
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
