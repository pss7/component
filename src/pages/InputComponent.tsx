
import Box from "../components/Box"
import Input from "../components/Input"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function InputComponent() {

    return (
        <Main>

            <Title level={2} text="InputComponent" />
            <Input
                blind="blind"
                className="input"
                id="input1"
                label="text"
                type="input"
                placeholder="input"
                autocomplete="on" />
        </Main>
    )

}

export default InputComponent