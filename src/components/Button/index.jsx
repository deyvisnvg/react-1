export default function Button({ children, handleClick, buttonStyle }) {
    return (
        <>
            <button
                className={buttonStyle}
                onClick={handleClick}
            >
                {children}
            </button>
        </>
    )
}