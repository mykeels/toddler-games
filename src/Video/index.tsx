import { ReadWordsVideo } from '@/games/ReadWords/Video';
import Header from '@/Header/Header';
import { slugify, VIDEOS } from '@/utils/videos';
import { Container } from '@/Container';
import { useParams } from 'react-router';

export const AppVideo = () => {
  const { title } = useParams();

  const video = VIDEOS.find((video) => slugify(video.title) === title);

  if (!video) {
    return <VideoNotFound />;
  }

  const VideoRenderer =
    {
      'read-words': ReadWordsVideo,
    }[video.game] || VideoNotFound;

  return (
    <Container key={video.title}>
      <Header onRestart={() => {}} Right={null}>
        {video.title}
      </Header>
      <div className="flex grow overflow-y-auto print:text-black">
        <VideoRenderer video={video} />
      </div>
    </Container>
  );
};

const VideoNotFound = () => {
  return <div>Video not found</div>;
};
