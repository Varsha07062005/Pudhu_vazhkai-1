import styled from '@emotion/styled';

const ImportantNotice = styled.div`
  background-color: ${props => props.theme.colors.attention};
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
`;

export default ImportantNotice;