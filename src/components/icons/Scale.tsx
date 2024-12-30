import { lazy, Suspense } from 'react';

const ScaleIcon = lazy(() => import('lucide-react/dist/esm/icons/scale'));

export const Scale = (props: any) => (
  <Suspense fallback={<div className="w-6 h-6" />}>
    <ScaleIcon {...props} />
  </Suspense>
);