import React from 'react'
import { navbar } from "../../utils/navbar"
import { ButtonComponent } from '../Generic'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Link, Logo, Main, Section, Wrapper } from './style'
function Navbar() {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>
        <Wrapper>
          {/* logo */}
          <Section logo onClick={() => navigate("/home")}>
            <Logo />
            Houzing
          </Section>

          {/* link */}
          <Section links>
            {
              navbar?.map(({ id, path, title, hidden }) => {
                if (!hidden) {
                  return (
                    <Link className={({ isActive }) => isActive && "active"} key={id()} to={path}>
                      {title}
                    </Link>
                  )
                }
              })
            }
          </Section>

          {/* login and sign in */}
          <Section>
            <ButtonComponent onClick={() => navigate("/signin")} color={"dark"}>Sign in</ButtonComponent>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar