import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={styles.input}
                placeholder={t('Введите username')}
                autoFocus
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={styles.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
