import Link from "next/link";

export default function Page() {
    return (
      <main>
          <h2>
               Welcome to the Movie Reviewer Database
          </h2>

            <Link prefetch = {true} href="/home">Home</Link>
            <Link prefetch = {true} href="/movies">Movies</Link>
            <Link prefetch = {true} href="/blog">Blog</Link>
           
      </main>
    );
  }