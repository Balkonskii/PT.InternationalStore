import './store.component.scss';
import React, { Component, ReactNode } from 'react';
import { IStoreItem } from '../../models/store-item';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { RootState } from '../../../core/redux';
import { connect, ConnectedProps } from 'react-redux';
import { CurrencyValueHelper } from '../../../shared/helpers/currency-value.helper';
import { updateProductInCart } from '../../redux/cart/actions';

const mapState = (state: RootState) => ({
    products: state.productsState.items,
    currenciesRates: state.currenciesRatesState.currenciesRatesInfo,
    cartProducts: state.cartState.items,
    user: state.userState.user
});

const mapDispatch = {
    updateProductInCart: updateProductInCart
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

interface IState {
    items: Array<IStoreItem>;
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
        const storeItems = nextProps.products.map(product => {
            const price = CurrencyValueHelper
                .convert(product.price, product.priceCurrency, selectedCurrency, nextProps.currenciesRates.rates);

            const result: IStoreItem = {
                ...product,
                price: price,
                isSelected: nextProps.cartProducts.some(cartProduct => cartProduct.id === product.id)
            };

            return result;
        });

        return {
            items: storeItems
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
            <div className='store'>
                {this.state.items.map(item => (
                    <StoreItemComponent key={item.id} value={item} onChange={x => this._onItemChanged(x)}/>
                ))}
            </div>
        );
    }

    private _onItemChanged(item: IStoreItem): void {
        const product = this.props.products.find(x => x.id === item.id);
        this.props.updateProductInCart(product);
    }
}

export const StoreComponent = connector(GoodsComponentInternal);
