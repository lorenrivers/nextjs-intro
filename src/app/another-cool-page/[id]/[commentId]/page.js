export default function CommentPage({ params }) {
  console.log(params);
  return (
    <h2>
      Post Page ID: {params.id}, Comment ID: {params.commentId}
    </h2>
  );
}
