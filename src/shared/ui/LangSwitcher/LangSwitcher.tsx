import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { i18n, t } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Язык_сокр' : 'Язык')}
        </Button>
    );
};
