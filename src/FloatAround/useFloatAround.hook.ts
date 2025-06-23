import { useId, useMemo } from 'react';

function getRandomTransforms(distance: number): string[] {
  const startingPoint = `translate(${Math.random() * distance}dvw, ${Math.random() * distance}dvh)`;
  const transforms: string[] = [startingPoint];
  for (let i = 0; i < 4; i++) {
    transforms.push(`translate(${Math.random() * distance}dvw, ${Math.random() * distance}dvh)`);
  }
  transforms.push(startingPoint);
  return transforms;
}

export function useFloatAround(distance: number) {
  const id = useId().replace(/:/g, '');
  const transforms = useMemo(() => getRandomTransforms(distance), [distance]);
  const style = `
              @keyframes float-${id} {
                  0% {
                      transform: ${transforms[0]};
                  }
                  25% {
                      transform: ${transforms[1]};
                  }
                  50% {
                      transform: ${transforms[2]};
                  }
                  75% {
                      transform: ${transforms[3]};
                  }
                  100% {
                      transform: ${transforms[0]};
                  }
              }
  
              .float-around-${id} {
                  animation: float-${id} 30s ease-in-out infinite;
              }
          `;
  return { style, classId: `float-around-${id}`, transforms };
}
