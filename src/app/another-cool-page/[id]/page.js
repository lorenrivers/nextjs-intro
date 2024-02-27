export async function generateMetaData({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return {
    title: `${post.title}`,
    description: `This is an article about ${post.title}`,
  };
}

//SQL example
// export async function generateMetadata({ params, searchParams }, parent) {

//   const { rows: posts } =
//     await sql`SELECT * FROM posts WHERE posts.Id = ${params.id}`;
//   const post = posts[0]; // get the first one

//   return {
//     title: post.title,
//   };
// }

export default async function Page({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return (
    <div>
      <p>You&apos;re in the dynamic route ({params.id}) now</p>
      <h2>Post {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
