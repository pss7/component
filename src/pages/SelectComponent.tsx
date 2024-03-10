import Select from "../components/Select"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function SelectComponet() {

    return (
        <Main>
            <Title level={2} text="SelectComponent" />
            <Select className="select" id="select" />
        </Main>
    )

}

export default SelectComponet