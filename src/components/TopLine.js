import {Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export const TopLine = () => {
    return (
        <Container className="topline-container">
            <div className="topline">
                <div className="number">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p className="topline-num"> <a href="tel:88121234567" >8 (812) 123-45-67</a> </p>
                    <p>|</p>
                    <p className="topline-work">  We work 7 days a week </p>
                    <p>|</p>
                    <p className="topline-time">9:00 — 18:00</p>
                </div>
                <div className="sign">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    <LinkContainer to="/signin">
                        <a href="/signin">Sign In</a>
                    </LinkContainer>
                    <p>/</p>
                    <LinkContainer to="/signup">
                        <a href="/signup">Sign In</a>
                    </LinkContainer>
                </div>
            </div>
        </Container>)
}
