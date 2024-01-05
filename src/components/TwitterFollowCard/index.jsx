import { Card } from "./Card";

export default function TwitterFollowCard() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="bg-twitter p-7 rounded-3xl">
                    <h2 className="text-white text-3xl font-bold py-2">A quién seguir</h2>
                    <div>
                        <Card
                            name="Kiko Beats Royal"
                            username="kikobeats"
                            initialIsFollowing
                        />
                        <Card
                            name="Deyvis Valdez"
                            username="deyvisnvg"
                            initialIsFollowing={false}
                        />
                        <Card
                            name="Chema Alonso"
                            username="chemaalonso"
                            initialIsFollowing
                        />
                        <Card
                            name="S4vitar"
                            username="S4vitar"
                            initialIsFollowing={false}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}