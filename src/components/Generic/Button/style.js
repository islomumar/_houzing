import styled from "styled-components"
import { colors } from "../../../utils/colors"
const { blue, light, white, black, transparent } = colors
const getType = ({ color }) => {
    switch (color) {
        case 'dark': return {
            background: transparent,
            border: `1px solid ${white}`,
            color: white
        }
        case "light": return {
            background: white,
            border: `1px solid ${light}`,
            color: black,
        }
        case "primary": return {
            background: blue,
            border: "none",
            color: white
        }
        case "outline-white": return {
            background: transparent,
            border: `1px solid ${white}`,
            color: white
        }
        default: return {
            background: blue,
            border: "none",
            color: white
        }
    }
}
const Container = styled.button`
    display: flex;
    cursor: pointer;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${white};
    width: ${({ width }) => width ? width + "px" : "130px"};
    height: ${({ height }) => height ? height + "px" : "44px"};
    font-size: ${({ fontSize }) => fontSize ? fontSize + "px" : "14px"};
    ${getType}
    :active{
        opacity: 0.7;
    }

`

export { Container }