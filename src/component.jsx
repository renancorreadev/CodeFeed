import react from "react"

function Post(props) {
    console.log(props)
    return (
        <>
            <h2>{props.title}</h2>
            <h2>{props.idade}</h2>
            <h3>{props.ola}</h3>
        </>
    )
}
export default Post