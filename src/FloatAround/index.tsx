import { useFloatAround } from './useFloatAround.hook';

export default function FloatAround({ children, distance = 75 }: { children: React.ReactNode; distance?: number }) {
  const { style, classId } = useFloatAround(distance);
  return (
    <>
      <style>{style}</style>
      <div className={`${classId} z-0 pointer-events-none fixed`}>{children}</div>
    </>
  );
}
