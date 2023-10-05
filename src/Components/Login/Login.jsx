import React from 'react'
import { Col, Button, Row, Container, Card, Form, Image } from "react-bootstrap";

import "./Login.css"

export default function Login() {
  
    return (
        <form>
            <label>Username:
            <br></br>
                <input type="text" />
            </label>
            <br></br>
            <label>Password:
            <br></br>
                <input type="password" />
            </label>
            <br></br>
            <input type="submit" value="Login" className='Login'/>
        </form>
    );
}
