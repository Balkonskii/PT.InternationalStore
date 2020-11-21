import './goods.component.scss';
import React, { Component, ReactNode } from 'react';
import { IGoodsItem } from '../../models/goods-item';
import { UniqueIdHelper } from '../../../core/helpers/unique-id.helper';
import { GoodsItemComponent } from '../../components/goods-item/goods-item.component';
import { RootState } from '../../../core/store';
import { updateGoodsItem } from '../../store/goods/actions';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: RootState) => ({
    items: state.goodsState.items
});

const mapDispatch = {
    updateGoodsItem: updateGoodsItem
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

class GoodsComponentInternal extends Component<Props> {
    render(): ReactNode {
        return (
            <div className='goods'>
                {this.props.items.map(item => (
                    <GoodsItemComponent key={item.id} {...item}/>
                ))}
            </div>
        );
    }
}

export const GoodsComponent = connector(GoodsComponentInternal);
