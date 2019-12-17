import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p>
            <img src="src\images\react.png" alt="" />
            <img src="src\images\javascript.png" alt="" />
            <img src="src\images\jquery.png" alt="" />

        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
