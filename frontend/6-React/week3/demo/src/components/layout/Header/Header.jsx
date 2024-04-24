import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import LoginForm from "../../container/LoginForm/LoginForm.jsx";

const Header = ({links}) =>{
    
    return (
        <header className={styles.header}>
            <Navigation links={links} />
            <LoginForm />
        </header>
    );
}

export default Header;