import './goods-item.component.scss';
import React, { Component, ReactNode } from 'react';
import { IGoodsItem } from '../../models/goods-item';
import classNames from 'classnames';

export interface IGoodsItemProps {
    value: IGoodsItem;
    onChange: (item: IGoodsItem) => void;
}

export class GoodsItemComponent extends Component<IGoodsItemProps> {
    private get _goodsItemClassNames(): string {
        return classNames({
            'goods-item': true,
            '--is-selected': this.props.value.isSelected
        });
    }

    render(): ReactNode {
        return (
            <div className={this._goodsItemClassNames} onClick={() => this._onItemClick()}>
                <img className={'goods-item__image'} src={this.props.value.imageLink}/>
                <div className={'goods-item__name'}>
                    <span className={'goods-item__label'}>Name:</span>
                    <span>{this.props.value.name}</span>
                </div>
                <div className={'goods-item__price'}>
                    <span className={'goods-item__label'}>Price:</span>
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
