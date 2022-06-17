import React from "react"
import styled from "styled-components"
import EmailBg from "../../assets/images/email.jpg"
import { Button } from "../Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offer</h1>
        <p>sign up for your newsletter below to get 100 off your first trip</p>
        <form action="#">
          <FormWrapper>
            <label htmlFor="email">
              <input id="email" type="text" />
            </label>
            <SignUpButton as="button" type="submit" primary="true" round="true">
              Sign Up
            </SignUpButton>
          </FormWrapper>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const SignUpButton = styled(Button)`
  height: 48px;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 300px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    min-width: 200px;
  }
`

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc() ((100vw - 1300px)/2);
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;

    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  form {
    z-index: 10;
  }
`

const FormWrapper = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0rem;
    }
  }
`
