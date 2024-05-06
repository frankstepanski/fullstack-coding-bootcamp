import Navigation from "./Navigation.jsx"
import LoginForm from "./LoginForm.jsx"

const Header = ({links}) =>{
    
    return (
        <header>
            <Navigation links={links} />
            <LoginForm />
        </header>
    );
}

export default Header;