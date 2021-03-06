/* eslint no-unused-vars: 0 */
import { shape, string } from "prop-types";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font } from "ui/settings";
import { icomoon } from "assets/fonts";
import { setType } from "ui/mixins";

const IconEl = styled.i`
  ${({ size }) => setType(size)};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.iconColor};
  font-family: ${({ theme }) => theme.iconFont};
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1em !important;
  speak: none;
  text-transform: none;
`;

const Icon = props => <IconEl {...props} className={`icon-${props.name} `} />;

Icon.propTypes = {
  name: string.isRequired,
  size: string,
  theme: shape({
    iconColor: string,
    iconFont: string
  })
};

Icon.defaultProps = {
  size: "s",
  theme: {
    iconColor: "inherit",
    iconFont: defaultThm.iconFont
  }
};

export default Icon;
