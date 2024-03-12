
import Button from "../components/Button"
import Title from "../components/Title"
import Main from "../components/layout/Main"

function ButtonComponent() {

    return (
        <Main>
            <Title level={2} text="ButtonComponent" />
            <Button
                id="id"
                className="className"
                style={{ background: "skyblue", color: "#fff" }}
                type="button"
                title="title"
                label="label"
                disabled={true}
                onClick={() => { alert("클릭") }}
            />
        </Main>
    )

}

export default ButtonComponent