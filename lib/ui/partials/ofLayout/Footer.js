import { bool, string } from "prop-types";
import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  Action,
  Actionbar,
  Icon,
  Logo,
  Separator,
  TextString
} from "ui/components";
import { breakpoint } from "ui/settings";
import { greyThm } from "ui/themes";
import { PATH } from "config/paths";
import { setSpace, setType } from "ui/mixins";
import {} from "ui/functions";
import DICT from "config/locales/global";

const FooterWrapper = styled.footer`
  ${setSpace("mhl")};
  ${setSpace("mth")};
  ${breakpoint.tabletUp} {
    ${setSpace("mhh")};
  }
`;

const TakeAway = styled.div`
  ${setSpace("pal")};
  ${setType("s")};
  background-color: ${({ theme }) => theme.backg};
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  text-align: center;
  & + div {
    ${setSpace("mth")};
  }
  ${Actionbar} {
    ${setSpace("mtl")};
    justify-content: center;
  }
  ${breakpoint.tabletUp} {
    ${setSpace("pah")};
    min-height: ${100 / 3}vh;
  }
`;
const FooterEl = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  ${breakpoint.phone} {
    text-align: center;
    & > *:first-child {
      ${setSpace("mbm")};
    }
  }
  ${breakpoint.tabletUp} {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    flex: 0 0 25%;
    justify-content: space-between;
    & > *:first-child {
      display: flex;
      align-items: center;
    }
    img {
      ${setSpace("mrm")};
    }
  }
`;
const SocialLinks = styled.ul`
  ${setSpace("mls")};
  display: inline-block;
`;
const SocialLink = styled.li`
  ${setSpace("mhs")};
  display: inline-block;
  & > *:first-child {
    ${setSpace("mln")};
  }
  & > *:last-child {
    ${setSpace("mrn")};
  }
`;

const Footer = props => {
  const { lingo, isHome } = props;
  return (
    <Fragment>
      <FooterWrapper>
        {!isHome ? (
          <ThemeProvider theme={greyThm}>
            <TakeAway>
              <TextString as="h1" looks="h5">
                {DICT.takeAway[lingo]}
              </TextString>
              <Separator silent size="s" />
              <TextString as="h1" looks="label">
                {DICT.takeAwayList[lingo]}
              </TextString>
              <Actionbar>
                <Action button to={PATH.about[lingo]}>
                  {DICT.takeAwayCTAlearn[lingo]}
                </Action>
                <Action
                  obfuscated
                  email="kontakt@trafficdesign.pl"
                  text={DICT.takeAwayCTAwrite[lingo]}
                />
              </Actionbar>
            </TakeAway>
          </ThemeProvider>
        ) : null}
        <FooterEl>
          <div>
            <Logo size="m" />
            <TextString as="p">
              <TextString looks="p5" style={{ display: "block" }}>
                Stowarzyszenie Traffic Design
              </TextString>
              <TextString looks="p5" style={{ display: "block" }}>
                Al. Zwycięstwa 291, 81-525 Gdynia
              </TextString>
            </TextString>
          </div>
          <div>
            <SocialLinks>
              <SocialLink>
                <Action
                  href="https://www.linkedin.com/company/traffic-design/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="linkedin" />
                </Action>
              </SocialLink>
              <SocialLink>
                <Action
                  href="https://www.facebook.com/TrafficDesign"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="facebook" />
                </Action>
              </SocialLink>
              <SocialLink>
                <Action
                  href="https://www.instagram.com/traffic_design/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="instagram" />
                </Action>
              </SocialLink>
            </SocialLinks>
          </div>
        </FooterEl>
      </FooterWrapper>
    </Fragment>
  );
};

Footer.propTypes = {
  isHome: bool,
  lingo: string.isRequired
};

Footer.defaultProps = {
  isHome: false
};

export default Footer;
