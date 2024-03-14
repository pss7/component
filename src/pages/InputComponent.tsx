
import Box from "../components/Box"
import Input from "../components/Input"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function InputComponent() {

    return (
        <Main>

            <Title level={2} text="InputComponent" />

            <Title level={3} text="input" />
            <Input
                id="label1"
                label="label1"
                type="text"
                placeholder="input"
                autocomplete="on"
            />

            <Title level={3} text="inputCheck" />
            <Input
                id="label2"
                label="label2"
                type="checkbox"
            />
            <Input
                id="label3"
                label="label3"
                type="checkbox"
            />
            <Input
                id="label4"
                label="label4"
                type="checkbox"
            />

            <Title level={3} text="inputRadio" />
            <Input
                id="label5"
                label="label5"
                name="radio"
                type="radio"
            />
            <Input
                id="label6"
                label="label6"
                name="radio"
                type="radio"
            />
            <Input
                id="label7"
                label="label7"
                name="radio"
                type="radio"
            />
        </Main>
    )

}

export default InputComponent