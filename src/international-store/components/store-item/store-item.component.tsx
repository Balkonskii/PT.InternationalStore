import './store-item.component.scss';
import React, { Component, ReactNode } from 'react';
import { IStoreItem } from '../../models/store-item';
import classNames from 'classnames';

export interface IStoreItemProps {
    value: IStoreItem;
    onChange: (item: IStoreItem) => void;
}

export class StoreItemComponent extends Component<IStoreItemProps> {
    private get _storeItemClassNames(): string {
        return classNames({
            'store-item': true,
            '--is-selected': this.props.value.isSelected
        });
    }

    render(): ReactNode {
        return (
            <div className={this._storeItemClassNames} onClick={() => this._onItemClick()}>
                <img className={'store-item__image'} src={this.props.value.imageLink}/>
                <div className={'store-item__name'}>
                    <span className={'store-item__label'}>Name:</span>
                    <span>{this.props.value.name}</span>
                </div>
                <div className={'store-item__price'}>
                    <span className={'store-item__label'}>Price:</span>
                    {this.props.value.price}
                </div>
            </div>
        );
    }

    private _onItemClick(): void {
        this.props.onChange({
            ...this.props.value,
            isSelected: !this.props.value.isSelected
        });
    }
}
