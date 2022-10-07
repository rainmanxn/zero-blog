import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                { t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                guwcewnghouwemhguriowhmegunvhwueiogvhweoivhcgriuenow
            </Modal>
        </div>
)};
