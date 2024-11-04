import "./Button.scss"

export const Button = ({ children, variant = 'primary' }) => {
    return (
        <button className={`${variant}`}>{children}</button>
    )
}