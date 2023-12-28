import React from 'react'

function Achievements() {


    const stats = [
        { id: 1, name: 'Custom Made Projects', value: '+10' },
        { id: 2, name: 'Freelance Clients', value: '+5' },
        { id: 3, name: 'Years for PHP', value: '+3' },
        { id: 4, name: 'New users annually', value: '46,000' },
      ]

  return (

          <div className="bg-transparent py-24 sm:py-32">
            { <div className="mx-auto max-w-7xl px-6 lg:px-8 border border-gray-400 py-6 rounded">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-200">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div> }
          </div>
        
      
      
  )
}

export default Achievements