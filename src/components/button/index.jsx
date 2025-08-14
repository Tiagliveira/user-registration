import { Children } from "react"
import { Button } from "./styles"

import PropTypes from "prop-types"

function Defaulbutton({ children, theme, ...props }){
 
    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}
Defaulbutton.PropTypes ={
    Children: PropTypes.node.isRequired,
    theme: PropTypes.string

}


export default Defaulbutton