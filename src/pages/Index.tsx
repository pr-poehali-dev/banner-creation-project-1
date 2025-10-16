const Index = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-hidden relative flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-purple-600/20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse-star"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="bg-gradient-to-r from-primary via-purple-600 to-accent p-12 rounded-3xl shadow-2xl border-4 border-white/30 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-9xl font-montserrat font-black text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] tracking-wider leading-none">
                DONAT
              </h1>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/438d53ed-bf2b-4c84-8ff8-a6f98b8ce6ea.jpg"
                  alt="Anime character"
                  className="relative w-64 h-64 object-cover rounded-2xl border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
