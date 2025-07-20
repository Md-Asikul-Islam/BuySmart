import React from 'react'
import Header from './Components/Header'
import TopBanner from './Components/TopBanner'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <TopBanner />
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductList />
          <Cart />
        </div>
      </main>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
