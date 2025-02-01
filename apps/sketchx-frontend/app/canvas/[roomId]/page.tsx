import RoomCanvas from "@/app/components/RoomCanvas";

export default async function CanvasPage({ params }: {
    params: {
        roomId: string
    }
}) {
    const roomdId = (await params).roomId;
    console.log(roomdId);

    return <RoomCanvas roomId={roomdId} />
}
