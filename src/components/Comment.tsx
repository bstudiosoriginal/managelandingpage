interface CommentProps {
    profile_img: string
    name: string
    comment: string
}

const Comment = (comment: CommentProps) => {
    return (
    <div className="commentparent">
        <div className="comment">
            <img src={comment.profile_img} alt={comment.name}></img>
            <h5>{comment.name}</h5>
            <p>{comment.comment}</p>
        </div>
     </div>
    )
}

export default Comment