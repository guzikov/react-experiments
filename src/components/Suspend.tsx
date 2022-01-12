import React, { Suspense, lazy } from "react";

export const Suspend = () => {
  return (
    <>
      <h1>Suspense tech demo!</h1>
      <Suspense fallback={<div>Ждун ждет...</div>}>
        <SlowRenderingComponent />
      </Suspense>
    </>
  )
};

const SlowRenderingComponent = lazy(() => import('./LazyComponent'));