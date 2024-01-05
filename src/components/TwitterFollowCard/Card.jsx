import { useState } from "react";
import classNames from "classnames";
import { Button } from "../../components";

export function Card({ name, username, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const textAlterno = "Dejar de seguir";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const buttonStyle = classNames(
        "rounded-2xl py-2",
        {
            "border-2 px-10 text-white hover:text-red-600 hover:border-red-600": isFollowing,
            "bg-white px-5 hover:bg-gray-200": !isFollowing,
        }
    )
    
    // const textButton = classNames(
    //     "",
    //     {
    //         "hover:hidden": isFollowing,
    //     }
    // )

    return (
        <>
            <article className="border-red-600 flex justify-between items-center gap-x-16 py-4">
                <header className="flex gap-5 text-white">
                    <img src={`https://unavatar.io/${username}`} alt="foto 1" width={48} height={48} className="rounded-full" />
                    <div className="flex flex-col">
                        <strong className="text-lg">{name}</strong>
                        <span className="text-xs">@{username}</span>
                    </div>
                </header>

                <aside>
                    <Button
                        handleClick={handleClick}
                        buttonStyle={buttonStyle}
                    >
                        <span>{text}</span>
                        <span className="hidden">{textAlterno}</span>
                    </Button>
                </aside>
            </article >
        </>
    )
}