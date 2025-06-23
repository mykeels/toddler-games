import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Markdown } from '@/Markdown';
import { getBaseUrl } from '@/utils/url';
import clsx from 'clsx';

export type InfoProps = {
  description: string;
};

export const Info = ({ description }: InfoProps) => {
  const baseUrl = getBaseUrl();
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex p-2 self-stretch justify-center">
          <img src={`${baseUrl}/icons/info-white.svg`} alt="info" className={clsx('w-10 h-10')} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90dvw] md:max-w-[60dvw] lg:max-w-[40dvw] bg-brand-primary mfe toddler-games">
        <DialogHeader>
          <DialogDescription className="text-brand-pink-500">
            <Markdown>{description}</Markdown>
            <Markdown>{`
## Feedback

Do you have any feedback for this game? [Submit feedback](https://docs.google.com/forms/d/e/1FAIpQLSfDToCN7p-LG8R4QGmm8mWTmR9tRMdflYHlB72-48qxHbk9BA/viewform?usp=header).
`}</Markdown>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
