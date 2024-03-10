interface BackgroundOverlayProps {
    toggle: boolean;
    closeDrawer: () => void;
}

function BackgroundOverlay({ toggle, closeDrawer }: BackgroundOverlayProps) {

    return (
        <>
            {
                toggle === false ?
                    "" : <div className="backgroundOverlay" onClick={closeDrawer} />
            }
        </>
    )

}

export default BackgroundOverlay