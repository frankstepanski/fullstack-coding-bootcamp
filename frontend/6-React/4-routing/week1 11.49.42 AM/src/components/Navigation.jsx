

const Navigation = ({links}) => {
    return (
        <nav>
            <ul>
            {
                links.map((link, index) => {
                    return (
                        <li key={index}><a href="{link.href}">{link.text}</a></li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default Navigation;