
import Head from 'next/head'
import { fetchEntries } from '../components/contentfulPosts'
import Post from '../components/Posts'

export default function Home({ posts }) {
  console.log(posts[0].content.content[0].content[0].value);
  return (
    <div className="container">
      <main>
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} title={p.title} coverImage={p.coverImage} excerpt={p.excerpt} postContent={p.content.content[0].content[0].value}/>
          })}
        </div>
      </main>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}

