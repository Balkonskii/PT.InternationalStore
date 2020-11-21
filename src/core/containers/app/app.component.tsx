import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AbortControllerHelper } from '../../helpers/abort-controller.helper';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { GoodsComponent } from '../../../international-store/containers/goods/goods.component';
import { CartComponent } from '../../../international-store/containers/cart/cart.component';
import { NavContainerComponent } from '../../../shared/containers/nav-container/nav-container.component';

export class AppComponent extends Component {
    readonly abortController = AbortControllerHelper.createController();

    constructor(props: any) {
        super(props);
    }

    componentWillUnmount(): void {
        this.abortController.abort();
    }

    render() {
        return (
            <Router>
                <div className={'app__layout'}>
                    <NavContainerComponent/>
                    <div className={'app__content-wrapper'}>
                        <div className={'app__content'}>
                            <Switch>
                                <Route exact path='/'>
                                    <Redirect to='/goods'/>
                                </Route>

                                <Route exact path='/goods' component={GoodsComponent}/>
                                <Route exact path='/cart' component={CartComponent}/>

                                <Route path='*' component={NotFoundComponent}>
                                    <Redirect to='/not-found'/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'));
