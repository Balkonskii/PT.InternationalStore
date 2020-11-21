import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AbortControllerHelper } from '../../helpers/abort-controller.helper';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { GoodsComponent } from '../../../international-store/containers/goods/goods.component';
import { CartComponent } from '../../../international-store/containers/cart/cart.component';
import { NavContainerComponent } from '../../../shared/containers/nav-container/nav-container.component';
import { createStore } from 'redux';
import { rootReducer } from '../../store';
import { Provider } from 'react-redux';
import { preserveCurrencies } from '../../store/currency/actions';
import { defaultCurrencies } from '../../../shared/defaults/default-currencies';
import { CurrencyRatesApi } from '../../../shared/api/currency-rates.api';
import { ICurrenciesRatesInfo } from '../../../shared/models/currencies-rates-info';
import { CurrenciesRatesInfoMapper } from '../../../shared/mappers/currencies-rates-info.mapper';
import { preserveCurrenciesRates } from '../../store/currencies-rates/actions';

export class AppComponent extends Component {
    readonly abortController = AbortControllerHelper.createController();

    readonly store = createStore(
        rootReducer,
        // @ts-ignore: enable redux devtools chrome extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    constructor(props: any) {
        super(props);

        this.store.dispatch(preserveCurrencies(defaultCurrencies));

        this.loadCurrenciesRatesAsync();
    }

    componentWillUnmount(): void {
        this.abortController.abort();
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    <div className={'app__layout'}>
                        <NavContainerComponent/>
                        <div className={'app__content-wrapper'}>
                            <div className={'app__content'}>
                                <Switch>
                                    <Route exact path='/'>
                                        <Redirect to='/goods'/>
                                    </Route>

                                    <Route exact path='/goods'
                                           render={(props) => <GoodsComponent {...props}/>}
                                    />

                                    <Route exact path='/cart'
                                           render={(props) => <CartComponent {...props}/>}
                                    />

                                    <Route path='*' component={NotFoundComponent}>
                                        <Redirect to='/not-found'/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }

    private async loadCurrenciesRatesAsync(): Promise<void> {
        try {
            const response = await CurrencyRatesApi.loadRatesAsync();
            const result = CurrenciesRatesInfoMapper.map(response);
            this.store.dispatch(preserveCurrenciesRates(result));
        } catch (e) {
            console.error(e);
        }
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'));
