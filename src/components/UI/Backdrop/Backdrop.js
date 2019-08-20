import React from 'react'
import classes from './Backdrop.Module.css'

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick} />

export default Backdrop