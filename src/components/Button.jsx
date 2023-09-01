function Button(props){
return <>

<button className={props.cls} onClick={props.handleclick}>
    {props.val}
</button>
</>
}

export default Button