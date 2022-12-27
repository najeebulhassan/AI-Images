import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
const { Configuration, OpenAIApi } = require('openai');
export default function ProductDescription() {

    const [heading, setHeading] = useState('The Response from the AI will be shown here');
    const [response, setResponse] = useState('... await the response');


    const onFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.productName)

        // OpenAIApi
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createImage({
            // model: "text-davinci-003",
            prompt: `${formDataObj.productName}`,
            // temperature: 0.7,
            // max_tokens: 256,
            // top_p: 1,
            // frequency_penalty: 0,
            // presence_penalty: 0,
            n: 1,
            size: '1024x1024'
        }).then((response) => {
            setHeading(`AI Product Description Suggestions for: ${formDataObj.productName}`);
            setResponse(`${response.data.data[0].url}`);
        }).catch((err) => {
            setResponse(err.response.data.error.message);
            console.log("ddd", err.response.data.error.message);
        })

    }
    return (
        <>
            <Container>
                <br />
                <br />
                <h1>Generate Product Descriptions</h1>
                <br />
                <h4>Generate product description for any types of products, simply enter the name and product description to generate.</h4>
                <br />
                <br />
                <Form onSubmit={onFormSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>What Product would you like to get a description for?</Form.Label>
                        <Form.Control
                            type='text'
                            name="productName"
                            placeholder='Enter Product Name' />
                        <Form.Text className='text-muted'>
                            Enter as much information as possible for more accurate descriptions.
                        </Form.Text>
                    </Form.Group>

                    <Button variant='primary' size='lg' type='submit'>
                        Get AI Suggestions
                    </Button>
                </Form>
                <br />
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title><h1>{heading}</h1></Card.Title>
                        <hr />
                        <br />
                        <Card.Text>
                            {/* <h4>{response}</h4> */}
                            <img src={response} alt="default"/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
