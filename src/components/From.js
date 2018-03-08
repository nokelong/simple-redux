import React from 'react'
import PropTypes from 'prop-types'

let Form = ({ value, onAddClick, onDelClick }) => {
	let input = "";
	return (
       <div>
        <form >          
            <input ref={node => {input = node}} value={value}/>                
            <button onClick={(e) => {e.preventDefault(); onAddClick()}}> Add Count</button>
            <button onClick={(e) => {e.preventDefault(); onDelClick()}}> Delete Count</button>           
        </form>
       </div>
	)
}

Form.propTypes = {
	value: PropTypes.number.isRequired,
	onAddClick: PropTypes.func.isRequired,
	onDelClick: PropTypes.func.isRequired
}
export default Form;