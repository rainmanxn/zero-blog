import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwError}
        >
            Throw error
        </Button>
    )
}
