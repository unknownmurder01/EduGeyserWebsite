import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from "./styles.module.scss";

interface HomepageFeatureProps {
    title: string;
    image?: string;
    flipped?: boolean;
    wide?: boolean;
}

export const HomepageFeature: React.FC<PropsWithChildren<HomepageFeatureProps>> = ({ title, image, flipped, wide, children }) => {
    return (
        <div className={clsx(styles.feature, { [styles.flipped]: flipped, [styles.wide]: wide })}>
            <div className={clsx(styles.content, "text--left padding-horiz--md")}>
                <h3 className={styles.title}>{title}</h3>
                {children}
            </div>
            {image && (
                <div>
                    <img src={image} alt={title} />
                </div>
            )}
        </div>
    );
}