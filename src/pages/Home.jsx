import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <h1 className='text-4xl font-mono font-medium text-center py-24 text-white'>Welcome To <strong className='text-sky-400'>React.Js</strong></h1>
      
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Why React?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Declarative</h3>
              <p className="text-gray-300">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Component-Based</h3>
              <p className="text-gray-300">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Learn Once, Write Anywhere</h3>
              <p className="text-gray-300">Develop new features without rewriting existing code. React can also render on the server using Node.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Get Started</h2>
          <div className="bg-gray-800 p-10 rounded-xl border border-gray-700">
            <p className="text-xl mb-6 text-gray-300">Ready to dive in? Follow our installation guide to get started with React.</p>
            <button className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 transition-colors duration-300">
              Get Started →
            </button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Latest Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Documentation</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive documentation to learn everything about React.</p>
              <a href="/docs" className="text-sky-400 hover:text-sky-300 transition-colors duration-300">Learn more →</a>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Community</h3>
              <p className="text-gray-300 mb-4">Join our vibrant community and get help from other React developers.</p>
              <a href="/community" className="text-sky-400 hover:text-sky-300 transition-colors duration-300">Join now →</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
