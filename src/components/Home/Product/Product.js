import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
    const { CakeImg, CakeName, Price, CakeDescription } = product;


    return (
        <div className="col-lg-4 col-md-6 col-sm-1 my-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={CakeImg} />
                    <Card.Body>
                        <Card.Title>{CakeName}</Card.Title>
                        <Card.Text>
                            {CakeDescription}
                        </Card.Text>
                        <h5>Price: {Price}</h5>
                        <Button className="mt-2" variant="success"><h6>Purchase</h6></Button>{' '}
                    </Card.Body>
                </Card>
            
        </div>
    );
};

export default Product;
