import "./Button.scss";

export const Button = ({ children, variant = 'primary' }) => {
    return (
        <button to="/contact" className={`contact-link contact-link__${variant}`}>{children}</button>
    )
}