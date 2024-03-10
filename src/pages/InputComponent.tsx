
import Box from "../components/Box"
import Input from "../components/Input"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function InputComponent() {

    return (
        <Main>

            <Title level={2} text="InputComponent" />

            <Title level={3} text="" />
            <Input blind="blind" className="input" id="input1" label="text" type="input" placeholder="input" />


            {/* <Title level={3} text="" />
            <Box className="inputWrap">
                <Input className="input" id="input2" label="label" type="checkbox" />
            </Box> */}

        </Main>
    )

}

export default InputComponent