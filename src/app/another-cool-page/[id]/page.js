export default async function Page({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return (
    <div>
      <p>You're in the dynamic route ({params.id}) now</p>
      <h2>Post {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
