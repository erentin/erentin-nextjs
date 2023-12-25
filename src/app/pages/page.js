import React from 'react'

const blog = () => {

  return (
    <main className="flex justify-center min-h-screen flex-col bg-[#121212]">
      <div className='container mx-auto px-12 py-4 mt-[92px] sm:mt-[0px]'>
        <section class="mx-auto max-w-screen-lg px-4 py-12">
          <div class="mb-12 text-center">
            <div class="mb-6 text-3xl sm:text-5xl font-semibold text-white">Latest Blog Posts</div>
            <p class="text-white">I am sharing articles on my blog to revisit them in the future myself.</p>
          </div>
          <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <article class="">
              <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
                ><div class="">
                  <img src="https://componentland.com/images/XpvTA1erbfhbzqnkxEyGX.png" class="w-full object-cover" />
                </div>
                <div class="flex-1 p-4">
                  <p class="mb-4 text-xs font-bold">LARAVEL</p>
                  <h6 class="mb-4 text-xl font-light">Tailwind 3.0: A New Era of Developer Experience</h6>
                  <p class="mb-4 text-xs">Thursday, Nov 31, 2022- 10 am PT / 1 pm ET</p>
                  <div class="justify-starts mt-4 flex flex-wrap items-center">
                  <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
                  <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#php</div>
                </div>
                </div>
                </a>
            </article>
            <article class="">
              <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
                ><div class="">
                  <img src="https://componentland.com/images/XpvTA1erbfhbzqnkxEyGX.png" class="w-full object-cover" />
                </div>
                <div class="flex-1 p-4">
                  <p class="mb-4 text-xs font-bold">REACTJS</p>
                  <h6 class="mb-4 text-xl font-light">Tailwind 3.0: A New Era of Developer Experience</h6>
                  <p class="mb-4 text-xs">Wednesday, Nov 31, 2022- 10 am PT / 1 pm ET</p>
                  <p class="mb-4 text-sm">Register Now</p>
                </div>
                </a>
            </article>
            <article class="">
              <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
                ><div class="">
                  <img src="https://componentland.com/images/XpvTA1erbfhbzqnkxEyGX.png" class="w-full object-cover" />
                </div>
                <div class="flex-1 p-4">
                  <p class="mb-4 text-xs font-bold">WEBINARS</p>
                  <h6 class="mb-4 text-xl font-light">Tailwind 3.0: A New Era of Developer Experience</h6>
                  <p class="mb-4 text-xs">Tuesday, Nov 31, 2022- 10 am SGT</p>
                  <p class="mb-4 text-sm">Register Now</p>
                </div></a>
              
            </article>
            <article class="">
              <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
                ><div class="">
                  <img src="https://componentland.com/images/XpvTA1erbfhbzqnkxEyGX.png" class="w-full object-cover" />
                </div>
                <div class="flex-1 p-4">
                  <p class="mb-4 text-xs font-bold">WEBINARS</p>
                  <h6 class="mb-4 text-xl font-light">Tailwind 3.0: A New Era of Developer Experience</h6>
                  <p class="mb-4 text-xs">Wednesday, Nov 31, 2022- 8 am PT / 11 am ET</p>
                  <p class="mb-4 text-sm">Register Now</p>
                </div>
                </a>
            </article>
           
          </div>
        </section>
      </div>
    </main>
  )
}

export default blog