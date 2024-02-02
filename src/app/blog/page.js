/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Image from 'next/image';

const blog = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});
  
  useEffect(() => {
    console.log(loading)
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blog');
        
        // response.ok kontrolü ile isteğin başarılı olup olmadığını kontrol edebilirsiniz
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPosts(data.data);
        console.log(data.data);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    setLoading(false)
    fetchData();
  }, []);

  return (
    <>
      <Navbar/>
      <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
        <div className='container mx-auto px-12 py-4 mt-[92px] sm:mt-[0px]'>

          <section class="mx-auto max-w-screen-lg px-4 py-12">

            <div class="mb-12 text-center">

              <div class="mb-6 text-3xl sm:text-5xl font-semibold text-white">Latest Blog Posts</div>
              <p class="text-white">I am sharing articles on my blog to revisit them in the future myself.</p>

            </div>

            <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

        
            {
              Array.isArray(posts) && posts.length > 0 ? 
              
              (posts.map( (post) => 
              
              (
                <>
                  <Link href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
                    ><div class="">
                      <Image  alt="Picture of the author" src="https://componentland.com/images/XpvTA1erbfhbzqnkxEyGX.png"   fill />
                    </div>
                    <div class="flex-1 p-4">
                      <p class="mb-4 text-xs font-bold">{post.main_title}</p>
                      <h6 class="mb-4 text-xl font-light">{post.topic_title}</h6>
                      <p class="mb-4 text-xs">{post.created_at_date} - <span class="mb-4 text-xs">{post.created_at_time}</span></p> 
                      <div class="justify-starts mt-4 flex flex-wrap items-center">
                      {Array.isArray(post.tags) && post.tags.length > 0 ? (
                      <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
                      )
                      : (null)
                      }
                    
                    </div>
                    </div>
                    </Link>
                </>
              )


                ))

              : (null)
            }

            </div>

          </section>

        </div>
      </main>
    </>
  )
}

export default blog