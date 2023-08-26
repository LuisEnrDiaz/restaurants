import { Typography } from "@material-tailwind/react";

export function Footer() {
    return (
        <footer className="w-full bg-bgBluePrimary-700 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <img src="/assets/logo.png" alt="logo-ct" className="w-20" />

                <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-bgBluePrimary-400 focus:text-bgBluePrimary-400"
                        >
                            About Us
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-bgBluePrimary-400 focus:text-bgBluePrimary-400"
                        >
                            License
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-bgBluePrimary-400 focus:text-bgBluePrimary-400"
                        >
                            Contribute
                        </Typography>
                    </li>

                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-bgBluePrimary-400 focus:text-bgBluePrimary-400"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>

            <hr className="my-8 border-blue-gray-50" />

            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 Luis Enrique Diaz
            </Typography>
        </footer>
    );
}
