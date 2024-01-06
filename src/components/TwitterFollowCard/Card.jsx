import { useState } from "react";
import classNames from "classnames";
import { Button } from "../../components";

export function Card({ name, username, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isTextState, setIsTextState] = useState(false);

    const text = !isFollowing ? "Seguir" : isTextState ? "Dejar de Seguir" : "Siguiendo";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

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
                        isFollowing={isFollowing}
                        setIsTextState={setIsTextState}
                    >
                        <span>{text}</span>
                    </Button>
                </aside>
            </article >
        </>
    )
}