import {Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export const Notfoundpage = () => {
    return (
        <Container>
        <div className="not_found">
            <p>This page doesn't exist. Go </p><LinkContainer to="/"><a href="/">  home</a></LinkContainer>.
        </div>
        </Container>
    )
}
