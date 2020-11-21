import React, { Component, ReactNode } from 'react';
import { RootState } from '../../../core/redux';
import { connect, ConnectedProps } from 'react-redux';
import { IStoreItem } from '../../models/store-item';

const mapState = (state: RootState) => ({
    items: state.productsState.items,
    currenciesRates: state.currenciesRatesState.currenciesRatesInfo,
    user: state.userState.user
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

interface IState {
    items: Array<IStoreItem>;
}

export class CartComponent extends Component {
    render(): ReactNode {
        return (
            <div>cart</div>
        );
    }
}
