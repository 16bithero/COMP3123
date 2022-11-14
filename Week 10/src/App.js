import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function FormApp() {

    const INITIAL_VALUE = {
        email: "",
        name: "",
        address: "",
        addressTwo: "",
        city: "",
        province: "",
        zip: ""
    }
    var [data, setData] = useState(INITIAL_VALUE)
    var [newEmail, setEmail] = useState('')
    var [newFullname, setFullname] = useState('')
    var [newAddress, setAddress] = useState('')
    var [newAddressTwo, setAddressTwo] = useState('')
    var [newCity, setCity] = useState('')
    var [newProvince, setProvince] = useState('')
    var [newPostal, setPostal] = useState('')
    const ref = useRef(null);
    var [newCheck, setCheck] = useState('');


    var provinces = ['Choose...', 'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
        'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

    const handleSubmit = (event) => {
        console.log(data)
        event.preventDefault()
        setEmail(data.email)
        setFullname(`${data.name}`)
        setAddress(data.address)
        setAddressTwo(data.addressTwo)
        setCity(data.city)
        setProvince(data.province)
        setPostal(data.zip)
        if (ref.current.checked) {
            setCheck('✅ Checked');
        } else {
            setCheck('⛔️ NOT Checked');
        }
    }

    const onValueChanged = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div className="App">
            <h1>Data Entry Form</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={data.email} onChange={(event) => onValueChanged(event)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' placeholder="Full Name" value={data.name} onChange={event => onValueChanged(event)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' placeholder="1234 Main St" value={data.address} onChange={event => onValueChanged(event)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control name='addressTwo' placeholder="Apartment, studio, or floor" value={data.addressTwo} onChange={event => onValueChanged(event)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' value={data.city} onChange={event => onValueChanged(event)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select name='province' onChange={onValueChanged}>
                            {
                                provinces.map(province => (
                                    <option key={province} value={province}>{province}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control name='zip' value={data.zip} onChange={event => onValueChanged(event)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check style={{ display: "inline-block" }} type="checkbox" ref={ref} label="Agree Terms and Condition?" checked={data.checkbox} />
                </Form.Group>
                <Button variant="success" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>

                <hr />
                <div className='output'>
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Email: </h3>
                    <h3 className='fields'>{newEmail}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Full Name: </h3>
                    <h3 className='fields'>{newFullname}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Address: </h3>
                    <h3 className='fields'>{newAddress}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Address 2: </h3>
                    <h3 className='fields'>{newAddressTwo}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>City: </h3>
                    <h3 className='fields'>{newCity}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Province: </h3>
                    <h3 className='fields'>{newProvince}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Postal Code: </h3>
                    <h3 className='fields'>{newPostal}</h3>
                    <br />
                    <h3 className='fields' style={{ color: 'green', fontWeight: 'bold' }}>Checkbox: </h3>
                    <h3 className='fields'>{newCheck}</h3>
                </div>
            </Form>

        </div>
    )
}