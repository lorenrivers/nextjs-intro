import Link from "next/link";
export default async function PostsPage({ searchParams }) {
  console.log("searchParams", searchParams);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h1>Posts about this awesome website 😆</h1>
      <Link href="/posts?sort=asc">Sort ascending</Link>
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
