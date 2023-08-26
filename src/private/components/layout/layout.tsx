import { Footer } from "../../../shared/footer/footer";
import { Header } from "../../../shared/header/header";

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
