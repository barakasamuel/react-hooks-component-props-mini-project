import React from "react";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

// ===== Header Component =====
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

// ===== About Component =====
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

// ===== ArticleList Component =====
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

// ===== Article Component =====
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: minutes-to-read logic
  let emoji = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default App;
