import Table from "../components/Table"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function TableComponet() {

    return (
        <Main>
            <Title level={2} text="TableComponent" />
            <Table blind="blind" />
        </Main>
    )

}

export default TableComponet