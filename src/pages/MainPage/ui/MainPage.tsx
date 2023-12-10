import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t(
                'Welcome to our blog! ' +
                    'Please Sign in and visit Articles page to explore our App and read articles on various topics',
            )}
        </Page>
    );
};

export default MainPage;
