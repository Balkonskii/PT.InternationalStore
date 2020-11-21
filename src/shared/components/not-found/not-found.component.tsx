import React, { Component, ReactNode } from 'react';
import './not-found.component.scss';

export class NotFoundComponent extends Component {
    render(): ReactNode {
        return (
            <div className='not-found'>
                404 not found
            </div>
        );
    }
}
