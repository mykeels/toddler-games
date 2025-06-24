import { useReactToPrint } from 'react-to-print';
import { LegacyRef, useRef, useState } from 'react';

export function usePrint(props?: { title?: string }) {
  const printRef = useRef<HTMLElement>(null);
  const print = useReactToPrint({
    contentRef: printRef,
    bodyClass: 'mfe toddler-games',
    documentTitle: props?.title,
  });
  const [isPrinting, setIsPrinting] = useState(false);
  return {
    printRef: printRef as LegacyRef<HTMLDivElement>,
    print: async () => {
      setIsPrinting(true);
      await new Promise((resolve) => requestAnimationFrame(resolve));
      print();
      await new Promise((resolve) => requestAnimationFrame(resolve));
      setIsPrinting(false);
    },
    isPrinting,
  };
}
