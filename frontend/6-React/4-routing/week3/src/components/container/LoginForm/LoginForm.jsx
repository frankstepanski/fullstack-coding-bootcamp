import styles from "./LoginForm.module.css";

const LoginForm = () => {

    return (
            <form className={styles.loginForm}>
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password"  />
                <button type="submit">Login</button>
            </form>
    )
}
export default LoginForm;