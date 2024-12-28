import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useFirebase} from '../context/firebase';


function MyList() {

    const firebase = useFirebase(); 
    const [name,setName] = useState("") ;
  const [isbnNumber,setIsbnNumber] = useState("");
  const [price,setPrice]= useState("");
  const [coverPic, setCoverPic] = useState('');

const handleSubmit= async(e) =>{
 e.preventDefault();
 await firebase.handleCreateNewListing(name,isbnNumber,price,coverPic);
};


    return (
<div className='container'>
<Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 mt-5">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Enter Book name </Form.Label>
                        <Form.Control
                            required
                            onChange={e => setName(e.target.value)} 
                            value={name}
                            type="text"
                            placeholder="Book Name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control
                            required
                            onChange={e => setIsbnNumber(e.target.value)} 
                            value={isbnNumber}
                            type="text"
                            placeholder="ISBN Number"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>price</Form.Label>
                        <Form.Control
                            required
                            onChange={e => setPrice(e.target.value)} 
                            value={price}
                            type="text"
                            placeholder="price"
                        />
                    </Form.Group>
                     <Form.Group as={Col} md="4">
                        <Form.Label>price</Form.Label>
                        <Form.Control
                            required
                            onChange={e => setCoverPic(e.target.files[0])} 
                            value={price}
                            type="file"
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Create</Button>
            </Form>
</div>
    )
};

export default MyList;