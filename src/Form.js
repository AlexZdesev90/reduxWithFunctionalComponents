import React from "react";
// import "./styles.css";
import { Form } from "./FormComponent";
import { Input } from "./input";
import styled from "styled-components";
import validator from "validator";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  margin-bottom: 1em;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export default function Final() {
  return (
    <div className="App">
      <h1>React with Final Form</h1>
      <Form onSubmit={(obj) => {console.log(obj)}}>
        {props => (
          <FormWrapper>
            <Group>
              <Label>Username</Label>
              <Input
                name="username"
                placeholder="Username"
                validate={v =>
                  !validator.isEmail(v || "") && "Please Enter a Valid Email!"
                }
              />
            </Group>
            <Group>
              <Label>Password</Label>
              <Input name="passowrd" type="password" placeholder="Password" />
            </Group>
          </FormWrapper>
        )}
      </Form>
    </div>
  );
}


