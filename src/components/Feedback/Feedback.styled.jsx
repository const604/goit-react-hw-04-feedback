import styled from 'styled-components';

export const Title = styled.title`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid rgba(180, 181, 182);
  box-shadow: 1px 1px 1px rgba(180, 181, 182, 0.3);
  &:active {
    background-color: #2f6fed;
    color: white;
  }
`;
