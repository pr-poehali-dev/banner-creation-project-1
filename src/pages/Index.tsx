import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface Donation {
  id: number;
  username: string;
  amount: number;
  message: string;
}

const Index = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [latestDonation, setLatestDonation] = useState<Donation | null>(null);

  useEffect(() => {
    const mockDonations: Donation[] = [
      { id: 1, username: 'User123', amount: 500, message: 'Спасибо за стрим!' },
      { id: 2, username: 'AnimeF4n', amount: 1000, message: 'Продолжай в том же духе!' },
      { id: 3, username: 'Otaku_2024', amount: 250, message: '❤️' },
    ];

    const interval = setInterval(() => {
      if (mockDonations.length > 0) {
        const randomDonation = mockDonations[Math.floor(Math.random() * mockDonations.length)];
        const newDonation = {
          ...randomDonation,
          id: Date.now(),
          amount: Math.floor(Math.random() * 5000) + 100
        };
        
        setLatestDonation(newDonation);
        setDonations(prev => [newDonation, ...prev.slice(0, 4)]);

        setTimeout(() => {
          setLatestDonation(null);
        }, 5000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-transparent overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-purple-600/20">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 p-8">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary via-purple-600 to-accent p-8 rounded-2xl shadow-2xl border-4 border-white/30 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-8xl font-montserrat font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-wider">
                  DONAT
                </h1>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/projects/22757ca5-748b-4578-a0f2-64552489f67a/files/a39d3a76-9544-431c-bb31-44f2c30da1f1.jpg"
                  alt="Anime character"
                  className="w-48 h-48 object-cover rounded-xl border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {latestDonation && (
          <div className="animate-slide-up mb-6">
            <Card className="bg-white/95 backdrop-blur-md border-4 border-primary shadow-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-3xl">💰</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-montserrat font-bold text-gray-900">
                      {latestDonation.username}
                    </span>
                    <span className="text-3xl font-montserrat font-black text-primary">
                      ${latestDonation.amount}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg">{latestDonation.message}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="space-y-3">
          {donations.slice(0, 5).map((donation) => (
            <Card 
              key={donation.id} 
              className="bg-white/80 backdrop-blur-sm border-2 border-purple-300 p-4 hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center text-xl">
                    ✨
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{donation.username}</p>
                    <p className="text-sm text-gray-600">{donation.message}</p>
                  </div>
                </div>
                <div className="text-2xl font-montserrat font-bold text-primary">
                  ${donation.amount}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
