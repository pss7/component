import Select from "../components/Select"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function SelectComponet() {

    return (
        <Main>
            <Title level={2}
                text="SelectComponent"
            />
            <Select
                data={[
                    {
                        label: 'label1',
                        value: 'option1'
                    },
                    {
                        label: 'label2',
                        value: 'option2'
                    },
                    {
                        label: 'label3',
                        value: 'option3'
                    },
                    {
                        label: 'label4',
                        value: 'option4'
                    }
                ]}
                className="select"
                id="select"
            />
        </Main>
    )

}

export default SelectComponet