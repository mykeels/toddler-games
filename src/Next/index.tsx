import classNames from 'clsx';
import { Button } from '@/components/ui/button';
import { onTouch } from '@/utils/touch';
import { getBaseUrl } from '@/utils/url';

export const Next = ({ onNext, className }: { onNext: () => void; className?: string | Record<string, boolean> }) => {
  const baseUrl = getBaseUrl();
  return (
    <Button
      variant="secondary"
      className={
        {
          [classNames('px-16 py-6 rounded-xl animate-breathe hsx:px-4 hsx:py-1 hsm:px-8 hsm:py-4', className)]: true,
          'h-9': false,
        } as unknown as string
      }
      {...onTouch(onNext)}
    >
      <img src={`${baseUrl}/icons/arrow-right.svg`} alt="Next" className="hsx:w-4" />
    </Button>
  );
};

export default Next;
