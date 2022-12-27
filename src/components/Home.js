import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Display from './Display';
import logo from '../logo.svg';

export default function Home() {
    return (
        <>
            <br />
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img className='d-block w-50 m-auto' src={logo} alt="Skolo Online Learning" />
                    </Carousel.Item>
                </Carousel>
                <br />
                <br />
                <h1>Online Artifical Intelligence AI (API) with OpenAI</h1>
                <p>Start by picking any opf the use-cases below to start generating AI content.</p>
                <br />
                <br />
                <Row>
                    <Col>
                        <Display
                            header='Product Description'
                            title='Generate Product Descriptions'
                            text='Generate Product Description for any types of products, simply enter the name and product description'
                            theLink='/product-description' />
                    </Col>

                    <Col>
                        <Display
                            header='Marketing Emails'
                            title='Cold Email template'
                            text='This is perfect for marketing agents or companies who need fresh ideas daily on cold email content'
                            theLink='/cold-emails' />
                    </Col>

                    <Col>
                        <Display
                            header='Creating Tweets'
                            title='Generate Tweets'
                            text='Start generating tweet ideas with hashtag for your online social media campaigns on twitter.'
                            theLink='/tweets' />
                    </Col>
                </Row>
                <br />
            </Container>
        </>
    )
}
