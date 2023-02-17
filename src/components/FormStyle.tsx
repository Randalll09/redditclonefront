import styled from 'styled-components';

export const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 240px;
  > form {
    width: 400px;
    background-color: ${({ theme }) => theme.tabColor};
    border: ${({ theme }) => theme.border};
    border-radius: 8px;
    padding: 32px 48px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    > p.title {
      font-size: 20px;
      font-weight: 500;
    }
    input {
      background-color: ${({ theme }) => theme.bgColor};
      border: ${({ theme }) => theme.border};
      height: 32px;
      border-radius: 8px;
      width: 100%;
      padding: 0 8px;
    }
    > button {
      width: 100%;
      height: 32px;
      background-color: ${({ theme }) => theme.highlightColor};
      border-radius: 8px;
      font: 400 18px ${({ theme }) => theme.font};
      color: #fff;
    }
    > span {
      > a {
        color: ${({ theme }) => theme.highlightColor};
        margin-left: 8px;
        font-weight: 500;
      }
    }
  }
`;
