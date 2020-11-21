import './goods-item.component.scss';
import React, { Component, ReactNode } from 'react';
import { IGoodsItem } from '../../models/goods-item';
import classNames from 'classnames';

export class GoodsItemComponent extends Component<IGoodsItem> {
    constructor(props: IGoodsItem) {
        super(props);
    }

    private get _goodsItemClassNames(): string {
        return classNames({
            'goods-item': true,
            '--is-selected': this.props.isSelected
        });
    }

    onItemClick(): void {

    }

    render(): ReactNode {
        return (
            <div className={this._goodsItemClassNames} onClick={() => this.onItemClick()}>
                <img className={'goods-item__image'} src={this.props.imageLink}/>
                <div className={'goods-item__name'}>
                    <span className={'goods-item__label'}>Name:</span>
                    <span>{this.props.name}</span>
                </div>
                <div className={'goods-item__price'}>
                    <span className={'goods-item__label'}>Price:</span>
                    {this.props.price}
                </div>
            </div>
        );
    }
}
