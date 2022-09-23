import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={ path }
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <div className='page-wrapper'>
                  { element }
                </div>
              </Suspense>
            )}
            path={ path }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
