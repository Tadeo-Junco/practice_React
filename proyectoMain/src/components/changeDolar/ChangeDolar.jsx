import { Button, Form } from 'react-bootstrap/Button';
import usestate  from 'react';

const ChangeDolar = () => {
    const [priceDolar, setPriceDolar] = usestate(1000);
    const [verForm, setVerForm] = usestate(false);

    

    
  return (
    <>
        <Button variant="primary">Valor del Dolar</Button>
        {verForm &&
            <Form.Control type="text" placeholder="Escriba el Precio"/>
        }
        
    </>
  )
}



export default ChangeDolar
