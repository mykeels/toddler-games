import { getBaseUrl } from '@/utils/url';
import { clsx } from 'clsx';

type GameImageProps = {
  src: string;
  alt: string;
  className?: {
    size?: string;
  };
};

export const GameImage = ({ src, alt, className }: GameImageProps) => {
  const baseUrl = getBaseUrl();
  const type = src.includes('giphy') ? 'giphy' : src.includes('unsplash') ? 'unsplash' : 'internal';
  const isInternalType = type === 'internal';

  return (
    !!src && (
      <div
        className={clsx('border-2 border-white rounded-lg overflow-hidden', {
          'w-56 h-56 hsx:w-32 hsx:h-32 hsm:w-32 hsm:h-32': !className?.size,
          [className?.size || '']: className?.size,
        })}
        style={{
          backgroundImage: `url(${baseUrl}/images/dazzle-background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          data-alt={alt}
          className={clsx('h-full w-full', {
            'animate-breathe': isInternalType,
          })}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: isInternalType ? 'contain' : 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    )
  );
};
