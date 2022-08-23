import { Logo, SearchBar } from "./";

export const NavBar = () => {
    return (
        <nav className="flex flex-col md:flex-row md:h-36 xl:h-48 md:m-8 xl:m-10">
            <Logo />
            <SearchBar />
        </nav>
    )
}
