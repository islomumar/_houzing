import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Link, Logo, Main, Section, Wrapper } from './style'
import { navbar } from "../../utils/navbar"
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
              navbar?.map(({ id, path, title }) => {
                return (
                  <Link className={({ isActive }) => isActive && "active"} key={id()} to={path}>
                    {title}
                  </Link>
                )
              })
            }
          </Section>

          {/* login and sign in */}
          <Section>
            <button>sign in</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar