import { ReactNode, useState } from "react"
import Drawer from "../Drawer";
import Button from "../Button";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Container from "../Container";
import Box from "../Box";
import Title from "../Title";

function Header() {

    const [drawerToggle, setDrawerToggle] = useState(true);

    const drawerOpen = () => {
        setDrawerToggle(!drawerToggle);
    }

    const drawerClose = () => {
        setDrawerToggle(false);
    }

    return (
        <header id="header">
            <Container className="container">
                <Box className="header">

                    <Button onClick={drawerOpen}>
                        <WidgetsIcon style={{ fill: '#fff' }}></WidgetsIcon>
                    </Button>

                    <Drawer drawerToggle={drawerToggle}>
                        <Button onClick={drawerClose}>
                            <WidgetsIcon></WidgetsIcon>
                        </Button>
                        <Title level={2} text="ComponentList" />
                    </Drawer>

                </Box>
            </Container>
        </header>
    )
}

export default Header