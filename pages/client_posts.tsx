import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/Link'
import styles from '../styles/Posts.module.css'

const ClientPosts: NextPage = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await fetch("http://localhost:3001/api/posts");
    const result = await res.json();
    setPosts(result);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div className={styles.post}>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.postContent}>{post.content}</div>
              <div className={styles.postAuthor}>{post.author}</div>
              <small className={styles.postDate}>{post.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ClientPosts
