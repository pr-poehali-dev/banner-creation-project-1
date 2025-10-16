const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex items-center justify-center p-8">
      <div className="relative z-10 w-full max-w-6xl">
        <div className="bg-black p-12 rounded-3xl shadow-2xl border-4 border-white">
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-9xl font-montserrat font-black text-white tracking-wider leading-none">
                DONAT
              </h1>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/files/6d55bf90-aaf7-4996-9394-a11d5bb16475.jpg"
                alt="Anime character"
                className="w-64 h-64 object-cover rounded-2xl border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;