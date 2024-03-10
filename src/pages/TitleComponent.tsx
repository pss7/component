import Title from "../components/Title"
import Main from "../components/layout/Main"

function TitleComponent() {

    return (
        <Main>
            <Title level={1} text="h1 TitleComponent" />
            <Title level={2} text="h2 TitleComponent" />
            <Title level={3} text="h3 TitleComponent" />
            <Title level={4} text="h4 TitleComponent" />
            <Title level={5} text="h5 TitleComponent" />
            <Title level={6} text="h6 TitleComponent" />
        </Main>
    )

}

export default TitleComponent