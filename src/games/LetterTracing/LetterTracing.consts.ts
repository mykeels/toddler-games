export const DEFAULT_LETTER_SIZE = 300;
export const DEFAULT_DOT_SIZE = 2;
export const DEFAULT_COLOR = '#aaa';

type LetterTracingExercise = {
  title: string;
  icon: string;
  file: string;
};

export const LetterTracingExercises: LetterTracingExercise[] = [
  {
    title: 'Down',
    icon: './icons/trace/arrows-vertical.svg',
    file: './icons/trace/down.excalidraw',
  },
  {
    title: 'Across',
    icon: './icons/trace/arrows-horizontal.svg',
    file: './icons/trace/across.excalidraw',
  },
  {
    title: 'Circle',
    icon: './icons/trace/circle.svg',
    file: './icons/trace/circle.excalidraw',
  },
  {
    title: 'Left Slash',
    icon: './icons/trace/left-slash.svg',
    file: './icons/trace/left-slash.excalidraw',
  },
  {
    title: 'Right Slash',
    icon: './icons/trace/right-slash.svg',
    file: './icons/trace/right-slash.excalidraw',
  },
  {
    title: 'Left Curve',
    icon: './icons/trace/left-curve.svg',
    file: './icons/trace/left-curve.excalidraw',
  },
  {
    title: 'Right Curve',
    icon: './icons/trace/right-curve.svg',
    file: './icons/trace/right-curve.excalidraw',
  },
  {
    title: 'Square',
    icon: './icons/trace/square.svg',
    file: './icons/trace/square.excalidraw',
  },
  {
    title: 'Triangle',
    icon: './icons/trace/triangle.svg',
    file: './icons/trace/triangle.excalidraw',
  },
  {
    title: 'Uppercase A',
    icon: './icons/trace/a-uppercase.svg',
    file: './icons/trace/a-uppercase.excalidraw',
  },
  {
    title: 'Uppercase B',
    icon: './icons/trace/b-uppercase.svg',
    file: './icons/trace/b-uppercase.excalidraw',
  },
];
