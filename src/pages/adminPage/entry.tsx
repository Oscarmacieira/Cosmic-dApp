import styled from "styled-components"
import { Card } from "../../components/shapes/Card"

export const Entry = styled(Card)`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 10px;
  align-self: center;
  align-items: center;
`

export const Margin = styled.div`
  width: 0;
  height: 0;
  margin-top: 1rem;
`

export const Label = styled.label`
  width: 25%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 38px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const Heading = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  margin: 0.5rem 0 1rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    height: 84px;
  }

  input {
    width: 75%;
    height: calc(100% - 1px);

    @media (max-width: 576px) {
      width: 100%;
    }

    border: none;
    border-bottom: 1px solid #30d1ff;
    background: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 38px;
    color: #30d1ff;
    outline: none !important;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin: 16px 0 0 0;

  .first-button {
    margin-right: 10px;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;

    .first-button {
      margin-right: 0px;
    }
  }
`
