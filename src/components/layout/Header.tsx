import { ReactNode, useState } from "react"
import Drawer from "../Drawer";
import Button from "../Button";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Container from "../Container";
import Box from "../Box";
import Title from "../Title";

function Header() {

    const [toggle, setToogle] = useState(true);

    const toggleDrawer = () => {
        setToogle(!toggle);
    }

    const closeDrawer = () => {
        setToogle(false);
    }

    return (
        <header id="header">
            <Container className="container">
                <Box className="header">
                    <Button onClick={toggleDrawer}>
                        <WidgetsIcon style={{ fill: '#fff' }}></WidgetsIcon>
                    </Button>
                    <Drawer toggle={toggle} closeDrawer={closeDrawer}>
                        <Title level={2} text="ComponentList" />
                    </Drawer>
                    {/* <BackgroundOverlay toggle={toggle} closeDrawer={closeDrawer} /> */}
                </Box>
            </Container>
        </header>
    )
}

export default Header