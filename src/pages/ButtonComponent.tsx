
import Button from "../components/Button"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function ButtonComponent() {

    return (
        <Main>
            <Title level={2} text="ButtonComponent" />
            <Button className="button" title="button" type="button" text="button" onClick={() => { alert("ButtonComponent") }} />
        </Main>
    )

}

export default ButtonComponent