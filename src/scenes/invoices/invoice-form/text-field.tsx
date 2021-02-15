import styled from 'styled-components';
import { TextField, Theme } from '@material-ui/core';

export const $TextField = styled(TextField)`
  ${({ theme }: { theme: Theme }) => `
    width: 90%;

    ${theme.breakpoints.down('xs')} {
      width: 100%
    }
  `}
`;
