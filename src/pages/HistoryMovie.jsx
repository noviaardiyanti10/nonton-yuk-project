import { Container, Row, Col } from "react-bootstrap";

const HistoryMovie = () => {
    return (
        <div className="history-page min-vh-100">
            <Container>
                <div>
                    <header>
                        <h5 className="text-white fw-bold">Watched History</h5>
                    </header>

                    <div className="my-5 text-white">
                        <h5 className="text-white fw-semibold mb-4 title">Avatar</h5>
                        <Row>
                            <Col md="3">
                                <p className="fw-semibold mb-1">Active Date</p>
                                <p className="desc">5 January 2023</p>
                            </Col>
                            <Col md="3">
                                <p className="fw-semibold mb-1">Expired Date</p>
                                <p className="desc">5 January 2023</p>
                            </Col>
                            <Col md="3">
                                <p className="fw-semibold mb-1">Status</p>
                                <p className="desc fw-bold d-flex align-items-center"> <i className="fa-solid fa-circle"></i> Ongoing</p>
                            </Col>
        
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HistoryMovie;