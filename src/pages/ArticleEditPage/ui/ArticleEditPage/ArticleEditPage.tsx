import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Edit article with id = ') + id
                : t('Create new article')}
        </Page>
    );
});

export default ArticleEditPage;
