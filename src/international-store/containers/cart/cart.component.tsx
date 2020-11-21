import './cart.component.scss';
import React, { Component, ReactNode } from 'react';
import { RootState } from '../../../core/redux';
import { connect, ConnectedProps } from 'react-redux';
import { ICartItem } from '../../models/cart-item';
import { CartHelper } from '../../helpers/cart.helper';
import { CartAmount } from '../../models/cart-amount';

const mapState = (state: RootState) => ({
    cartProducts: state.cartState.items,
    currenciesRates: state.currenciesRatesState.currenciesRatesInfo,
    user: state.userState.user
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

interface IState {
    items: Array<ICartItem>;
    amount: CartAmount; // <-- goal of home work
}

class CartComponentInternal extends Component<Props, IState> {
    static getDerivedStateFromProps(nextProps: Props): Partial<IState> | null {
        const rates = nextProps.currenciesRates.rates;
        if (!rates) {
            return {
                items: []
            };
        }

        const cartItems = nextProps.cartProducts.map(product => {
            return {
                ...product,
                price: CartHelper.calculateCartItemPrice(product, nextProps.user, rates),
            };
        });

        console.log(cartItems);

        return {
            items: cartItems,
            amount: CartHelper.calculateCartAmount(cartItems, nextProps.user)
        };
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            items: [],
            amount: {}
        };
    }

    render(): ReactNode {
        return (
            <div className={'cart'}>
                <div className={'cart__content'}>
                    {this.state.items.map(x => (
                        <div className={'cart__item'} key={x.id}>
                            <div className={'cart__item-name'}>
                                <span>{x.name}</span>
                            </div>

                            <div className={'cart__item-price'}>
                                <span>{x.price[this.props.user.selectedCurrency]}</span>
                            </div>
                        </div>
                    ))}

                    <div className={'cart__total'}>
                        <span>Total: {this.state.amount[this.props.user.selectedCurrency]}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export const CartComponent = connector(CartComponentInternal);
