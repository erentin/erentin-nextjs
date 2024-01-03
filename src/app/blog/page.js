"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('http://127.0.0.1:8000/api/blog');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPosts(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
        {/* ... Geri kalan bileşen kodları ... */}
      </main>
    </>
  );
};

export default Blog;
