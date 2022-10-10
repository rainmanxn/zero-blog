import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { AppRouter } from './providers/router';

export const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
