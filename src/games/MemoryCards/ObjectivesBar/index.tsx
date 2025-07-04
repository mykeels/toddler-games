import clsx from 'clsx';

type ObjectivesBarProps = {
  objectives: {
    character: {
      value: string;
    };
    total: number;
    flipped: number;
  }[];
};

export const ObjectivesBar = ({ objectives }: ObjectivesBarProps) => {
  return (
    <div className="flex flex-row gap-1 md:gap-2 justify-center items-center select-none text-black">
      {objectives.map((objective) => {
        const isCompleted = objective.flipped === objective.total;

        return (
          <div
            key={objective.character.value}
            className={clsx(
              'flex flex-col gap-1 md:gap-2 items-center justify-center border md:border-2 border-gray-500 rounded-md p-1 md:p-2',
              {
                'bg-brand-accent-green': isCompleted,
                'bg-yellow-200': !isCompleted,
              }
            )}
          >
            <div className="text-gray-500 text-2xl sm:text-4xl font-semibold">{objective.character.value}</div>
            <div className="text-lg sm:text-2xl text-gray-500 flex flex-row gap-1 md:gap-2 items-center justify-center">
              <span className="text-gray-500">{objective.flipped}</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">{objective.total}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
