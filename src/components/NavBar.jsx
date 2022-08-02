import { Logo, SearchBar } from "./";

export const NavBar = () => {
    return (
        <nav className="flex flex-row justify-around h-36">
            <Logo />
            <SearchBar />
        </nav>
    )
}
