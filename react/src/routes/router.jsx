import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy routes loading
const OriginalApp = React.lazy(() => import('../views/OriginalApp/App'));
const NotFound = React.lazy(() => import('../views/NotFound/NotFound'));
// Import additional routes here

const AppRouter = () => {
  console.log('Rendering AppRouter');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<OriginalApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
