import React from 'react'
import useGeoLocation from "../hook/useGeoLocation";
import { Container, Row, Col } from "react-bootstrap";

const Chek = () => {

    const location = useGeoLocation();

    let lat1 = location.coordinates.lat;
    let lng1 = location.coordinates.lng;

    if(47.2062 < lat1 < 47.20489){
        if(38.93943 < lng1 < 38.94016){
            
    }
    }else{}

    

  return (

    <Container>
            <Row>
                <Col md={8}>
                <div className="separator">Hook 3: User Geo Location Hook</div>
                    <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                    <div class="card">
                        <div class="card-header text-left font-weight-bold d-flex">
                            <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </Col>
                <Col md={8}>
                <div className="separator">Hook 3: User Geo Location Hook</div>
                    <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                    <div class="card">
                        <div class="card-header text-left font-weight-bold d-flex">
                            <div className="inline-block mr-auto pt-1">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </Col>
            </Row>
        </Container>

    
  )
}

export default Chek