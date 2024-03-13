interface BackgroundOverlayProps {
    toggle: boolean;
}

function BackgroundOverlay({ toggle }: BackgroundOverlayProps) {

    return (
        <>
            {
                toggle === false ?
                    "" : <div className="backgroundOverlay" />
            }
        </>
    )

}

export default BackgroundOverlay