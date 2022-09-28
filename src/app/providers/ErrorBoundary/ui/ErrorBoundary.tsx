import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { ErrorPage } from 'widgets/ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <ErrorPage />
                </Suspense>
            );
        }
        return children;
    }
}
