import React, { Component } from 'react'
import Portal from './Portal';
import styles from './modal.module.css';

export default class Modal extends Component {
    render() {

        const { children, toggle, active } = this.props;

        return (
            <Portal>
                {active && (
                    <div className={styles.wrapper}>
                        <div className={styles.window}>
                            <button className={styles.closeBtn} onClick={toggle}>X</button>
                            <div>{children}</div>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}

