import styled from "styled-components";

export default function Typography({ children, variant, component, ...rest }) {
  switch (variant) {
    case "h1":
      return (
        <StyledH1 {...rest} as={component}>
          {children}
        </StyledH1>
      );
    case "h2":
      return (
        <StyledH2 {...rest} as={component}>
          {children}
        </StyledH2>
      );
    case "h2-link":
      return (
        <StyledH2Link {...rest} as={component}>
          {children}
        </StyledH2Link>
      );
    case "h3":
      return (
        <StyledH3 {...rest} as={component}>
          {children}
        </StyledH3>
      );
    case "h3-list":
      return (
        <StyledH3List {...rest} as={component}>
          {children}
        </StyledH3List>
      );
    case "h3-link":
      return (
        <StyledH3Link {...rest} as={component}>
          {children}
        </StyledH3Link>
      );
    case "body1":
      return (
        <StyledBodyText {...rest} as={component}>
          {children}
        </StyledBodyText>
      );
    case "info":
      return (
        <StyledInfoText {...rest} as={component}>
          {children}
        </StyledInfoText>
      );
    case "span-bold":
      return (
        <StyledSpanBold {...rest} as={component}>
          {children}
        </StyledSpanBold>
      );
    case "login-info":
      return (
        <StyledInfoLogin {...rest} as={component}>
          {children}
        </StyledInfoLogin>
      );
  }
}

const StyledH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
`;
const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
`;
const StyledH2Link = styled.h2`
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  color: var(--accent-color-green);
  font-weight: 550;
  &:hover {
    color: var(--accent-color-darker);
    font-weight: 600;
  }
`;
const StyledH3 = styled.h3`
  font-size: 1.6rem;
`;
const StyledH3List = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;
const StyledH3Link = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;
const StyledBodyText = styled.p`
  color: var(--color-dark);
`;
const StyledInfoText = styled.p`
  font-weight: 200;
  margin: 0.25rem 0 1rem;
`;
const StyledSpanBold = styled.span`
  font-weight: 600;
`;
const StyledInfoLogin = styled.h2`
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
`;
