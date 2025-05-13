function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Fashion Store
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends in women's and children's fashion
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg"
            alt="Women's Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Women's Fashion</h2>
          </div>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg"
            alt="Children's Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Children's Fashion</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home