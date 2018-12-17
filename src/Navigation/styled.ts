import { theme } from 'styled-tools';
// @ts-ignore
import Navigation from '@jmoxey/reakit/Navigation';

import styled from '../styled';
import { NavigationProps } from './Navigation';

export default styled(Navigation)<NavigationProps>`
  ${theme('fannypack.Navigation.base')};
`;
