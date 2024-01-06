import classNames from "classnames";

export default function Button({ children, handleClick, isFollowing = false, setIsTextState = () => { } }) {
    const buttonStyle = classNames(
        "rounded-2xl py-2",
        {
            "border-2 px-10 text-white hover:text-red-600 hover:border-red-600": isFollowing,
            "bg-white px-5 hover:bg-gray-200": !isFollowing,
        }
    )

    return (
        <>
            <button
                className={buttonStyle}
                onClick={handleClick}
                onMouseEnter={() => setIsTextState(true)}
                onMouseLeave={() => setIsTextState(false)}
            >
                {children}
            </button>
        </>
    )
}