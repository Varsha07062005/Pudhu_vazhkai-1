import styled from '@emotion/styled';

const GlassCard = styled.div`
  background: ${props => props.theme.backdrop};
  backdrop-filter: blur(${props => props.theme.blur});
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadows.glass};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;
`;

export default GlassCard;
