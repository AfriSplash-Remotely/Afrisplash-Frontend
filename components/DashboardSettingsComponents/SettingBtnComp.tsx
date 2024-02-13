import React from 'react'
import Link from 'next/link'
import PropTypes, { InferProps } from 'prop-types';
import styles from 'styles/Settings.module.scss';


const SettingBtnCompProps = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    routeLink: PropTypes.string.isRequired
}
export default function SettingBtnComp({ title, isActive, routeLink }: InferProps<typeof SettingBtnCompProps>): JSX.Element {
    return (
            <Link href={routeLink}>
                <button
                className={`rounded-xl px-3 py-2 w-auto  md:w-60 text-[#0D5520] font-[300] mb-6 border border-solid border-[#0D5520] ${isActive ? `${styles.active}` : undefined
                        } `}
                >
                    {title}
                </button>
        </Link>
    )
}
