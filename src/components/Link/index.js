// Componente Link
import NextLink from "next/link";
import StyledLink from "../StyledLink";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
