import { usePrint } from '@/hooks/usePrint';
import { getBaseUrl } from '@/utils/url';
import { type AppVideo as TAppVideo, type ReadWordsVideo as TReadWordsVideo } from '@/utils/videos';

type ReadWordsVideoProps = {
  video: TAppVideo;
};

export const ReadWordsVideo = ({ video }: ReadWordsVideoProps) => {
  const url = new URL(video.url);
  const embedUrl = `https://www.youtube.com/embed/${url.searchParams.get('v')}?si=1sNk0DWM8PhwBQaS`;

  const readWordsVideo = video as TReadWordsVideo;
  const words = readWordsVideo.words;

  const { printRef, print, isPrinting } = usePrint({ title: video.title });
  const baseUrl = getBaseUrl();

  return (
    <div className="flex flex-col gap-4 items-center py-8">
      <iframe
        width="90%"
        height="50%"
        src={embedUrl}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-lg border-4 border-white flex-shrink-0 print:hidden"
      />

      <div className="flex flex-col items-center gap-4 w-full mt-8 px-8 text-center" ref={printRef}>
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          Read along
          <button onClick={() => print()} disabled={isPrinting}>
            <img src={`${baseUrl}/icons/print.svg`} alt="Print" />
          </button>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 print:grid-cols-3 gap-y-6 gap-x-4 text-2xl font-semibold w-full">
          {words.map((word, index) => (
            <div key={`${word}-${index}`} className="tracking-widest md:tracking-[0.3em] print:tracking-[0.3em]">
              {word}
            </div>
          ))}
        </div>

        <p className="hidden print:block pt-8 text-lg tracking-widest">{video.url}</p>
      </div>

      <p className="px-4 md:px-16 pt-8 pb-16 print:pb-8 text-left print:invisible">{video.description}</p>
    </div>
  );
};
