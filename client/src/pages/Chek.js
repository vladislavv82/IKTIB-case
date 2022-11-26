import React from 'react'
import useGeoLocation from "../hook/useGeoLocation";
import { Container, Row, Col } from "react-bootstrap";

const Chek = () => {

    const location = useGeoLocation();

    let lat1 = location.coordinates.lat;
    lat1 = parseFloat (lat1)
    let lng1 = location.coordinates.lng;
    lng1 = parseFloat (lng1)

    let rezult = false;
    // function timeout(){
    //     4.2062 < lat1 < 4.20489 && 3.93943 < lng1 < 3.99016 ? rezult = true : rezult = false
    // }

    function timeout() {
        let result;
        if (4.2062 < lat1 < 4.20489) {
          if(3.93943 < lng1 < 3.99016){
            rezult = true
          }
        } else {
            rezult = false
        }
        return result;
      }
      timeout()

    console.log(rezult)
    console.log(lat1, lng1, typeof lat1, lng1)

  return (      

    <Container>
            <Row>
                <Col md={8}>
                <div className="separator"><h1>Статус посещения</h1></div>
                    <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header text-left font-weight-bold d-flex">
                            <div className="inline-block mr-auto pt-1">
                            <h3>Что-бы отметиться, разрешите доступ к геолокации</h3>
                                {location.loaded
                                    ? <h4>Вы на паре</h4>
                                    : <h4>Тебя нет на паре</h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </Col>

            </Row>
        </Container>
    
  )}

export default Chek