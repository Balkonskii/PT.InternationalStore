import './goods.component.scss';
import React, { Component, ReactNode } from 'react';
import { IGoodsItem } from '../../models/goods-item';
import { GoodsItemComponent } from '../../components/goods-item/goods-item.component';
import { RootState } from '../../../core/store';
import { updateGoodsItem } from '../../store/goods/actions';
import { connect, ConnectedProps } from 'react-redux';
import { CurrencyValueHelper } from '../../../shared/helpers/currency-value.helper';

const mapState = (state: RootState) => ({
    items: state.goodsState.items,
    currenciesRates: state.currenciesRatesState.currenciesRatesInfo,
    user: state.userState.user
});

const mapDispatch = {
    updateGoodsItem: updateGoodsItem
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

interface IState {
    items: Array<IGoodsItem>;
}

class GoodsComponentInternal extends Component<Props, IState> {
    static getDerivedStateFromProps(nextProps: Props): Partial<IState> | null {
        const rates = nextProps.currenciesRates.rates;
        if (!rates) {
            return {
                items: []
            };
        }

        const selectedCurrency = nextProps.user.selectedCurrency;
        const recalculatedItems = nextProps.items.map(x => {
            const price = x.priceBaseCurrency === selectedCurrency ? x.price :
                CurrencyValueHelper
                    .convert(x.price, x.priceBaseCurrency, selectedCurrency, nextProps.currenciesRates.rates);

            return {
                ...x,
                price: price
            };

        });

        return {
            items: recalculatedItems
        };
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render(): ReactNode {
        return (
            <div className='goods'>
                {this.state.items.map(item => (
                    <GoodsItemComponent key={item.id} value={item} onChange={x => this._onItemChanged(x)}/>
                ))}
            </div>
        );
    }

    private _onItemChanged(item: IGoodsItem): void {
        const baseItem = this.props.items.find(x => x.id === item.id);
        const result: IGoodsItem = {
            ...baseItem,
            isSelected: item.isSelected
        };

        this.props.updateGoodsItem(result);
    }
}

export const GoodsComponent = connector(GoodsComponentInternal);
