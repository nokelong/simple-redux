import React     from 'react'
import {connect} from 'react-redux'
import {addCount, delCount, restCount}   from '../actions'
import BForm      from  '../components/From'

const mapStateToProps = (state) => {
	console.log(state)
    const {counts} = state;    
    return {'value': counts};
}
const mapDispatchToProps = (dispatch) => ({
    onAddClick: () => { dispatch(addCount())},
    onDelClick: () => { dispatch(delCount())}
})
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(BForm)

