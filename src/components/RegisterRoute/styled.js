import styled from 'styled-components'

export const RegisterCard = styled.div`
  background-color: red;
  background-color: #ffffff;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WidthCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const Img = styled.img`
  width: 90%;
  max-width: 250px;
  align-self: center;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`

export const LoginForm = styled.form`
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const Heading = styled.h1`
  color: #475569;
  font-size: 25px;
  font-weight: 600;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #7b8794;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 500;
`

export const Input = styled.input`
  height: 35px;
  padding: 8px 16px;
  color: #334155;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cbd5e1;
  font-weight: 500;
`

export const Select = styled.select`
  height: 35px;
  padding: 8px 16px;
  color: #334155;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cbd5e1;
  font-weight: 500;
`

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cbd5e1;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  font-weight: 400;
  margin-top: 3px;
`
