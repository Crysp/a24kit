import baseStyled, { ThemedBaseStyledInterface } from 'styled-components';
import theme from './config';

export default (baseStyled as any) as ThemedBaseStyledInterface<typeof theme>;
