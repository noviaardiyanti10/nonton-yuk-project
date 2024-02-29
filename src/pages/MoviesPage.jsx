import { Col, Container, Row, Image } from "react-bootstrap";
import projector from '../assets/img/projector.jpg';

const movies = () => {
    return (
        <div className="movie-page min-vh-100">
            <Container>
                <header>
                    <h5 className="text-white fw-bold">Enjoy Watching</h5>
                    <p className="text-white">Our selected movies for your moody</p>
                </header>

                <div className="incoming-section">
                    <h6 className="text-white fw-semibold">Coming Soon</h6>
                    <Row>
                        <Col md="4">
                            <div className="item relative">
                                <Image src={projector} alt="incoming-img" className="rounded" thumbnail/>
                                <div className="absolute desc">
                                    <p className="text-white mb-0 title">Avatar</p>
                                    <p className="text-white">2023</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="item relative">
                                <Image src={projector} alt="incoming-img" className="rounded" thumbnail/>
                                <div className="absolute desc">
                                    <p className="text-white mb-0 title">Avatar</p>
                                    <p className="text-white">2023</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="list-section">
                    <h6 className="text-white fw-semibold">Movie List</h6>
                    <Row>
                        <Col md="2" className="pb-4">
                            <div className="item relative">
                                <Image src={projector} alt="incoming-img" className="rounded"/>
                                <div className="absolute desc">
                                    <p className="text-white mb-0 title">Avatar</p>
                                    <p className="text-white">2023</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default movies;