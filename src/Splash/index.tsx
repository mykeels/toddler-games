import { Button } from '@/components/ui/button';
import Header from '@/Header/Header';
import { fetchLatestVersion } from '@/utils/fetchLatestVersion';
import { speak } from '@/utils/speak';
import { useNavigateToRoot } from '@/utils/useNavigateToRoot';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getBaseUrl } from '@/utils/url';

export const Splash = () => {
  const navigate = useNavigate();
  const navigateToRoot = useNavigateToRoot();
  const baseUrl = getBaseUrl();
  useEffect(() => {
    speak("Welcome! Let's Play!");
  }, []);
  const { isFetching, isLoading } = useQuery({
    queryKey: ['latest-version'],
    queryFn: fetchLatestVersion,
  });
  return (
    <section
      className=" h-screen"
      style={{
        backgroundImage: `url(${baseUrl}/splash.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center justify-center bg-black/50 w-full h-full space-y-10">
        <h1
          className="text-6xl lg:text-[80px] font-lily text-white"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '-4%' }}
        >
          Let’s Play!
        </h1>
        <Button className="text-xl py-6 px-8" onClick={() => navigate('/menu')}>
          <>
            <span>Play</span>
            <img src={`${baseUrl}/icons/play-white.svg`} alt="play" />
          </>
        </Button>
        <Header.Restart onRestart={navigateToRoot} isLoading={isFetching || isLoading} />
      </div>
    </section>
  );
};
