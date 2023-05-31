
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg"
import { NavLink } from "react-router-dom";


const Container = styled.div`
    width: 100%;
`
const Main = styled.div`
    background-color: var(--colorPrimary);
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--colorWhite);
    padding: var(--padding);
    height: 64px;

    font-size: 16px;
    width: 1440px;
`
const Section = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ links }) => links && "0 64px"};
    cursor: ${({ logo }) => logo && "pointer"};
    .active {
        color: var(--colorLinkActive);
    }
`

const Logo = styled(logoImg)`
    width: 30px;
    margin-right: 12px;
    & path{
        fill: var(--colorWhite);
    }
`
const Link = styled(NavLink)`
    text-decoration: none;
    color:var(--colorWhite);
`
export {
    Container,
    Wrapper,
    Section,
    Logo,
    Link,
    Main
}