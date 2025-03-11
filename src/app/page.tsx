interface Post {
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 } // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const posts: Post[] = await getData();

  return (
    <section className="min-h-screen bg-green-500 p-8">
      <h1 className="text-5xl text-white text-center mb-8">JSONPlaceholder Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-green-700 mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}