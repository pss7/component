import { ReactNode, useState } from "react"
import Drawer from "../Drawer";
import Button from "../Button";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Container from "../Container";
import Box from "../Box";
import Title from "../Title";

function Header() {

    return (
        <header id="header">
            <Container className="container">
                <Box className="header">
                    {/* <Button onClick={open}>
                        <WidgetsIcon style={{ fill: '#fff' }}></WidgetsIcon>
                    </Button> */}
                    <Drawer>
                        <Title level={2} text="ComponentList" />
                    </Drawer>
                    {/* <BackgroundOverlay toggle={toggle} closeDrawer={closeDrawer} /> */}
                </Box>
            </Container>
        </header>
    )
}

export default Header