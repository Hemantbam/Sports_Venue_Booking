import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src="" alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src="" alt="" />
                        </div>
                        <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email'  required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Login