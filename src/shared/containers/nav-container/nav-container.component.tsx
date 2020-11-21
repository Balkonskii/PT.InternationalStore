import './nav-container.component.scss';
import React, { Component, ReactNode } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select, { ValueType } from 'react-select';
import { IOptionType } from '../../models/option-type';
import { RootState } from '../../../core/store';
import { updateSelectedCurrency } from '../../../core/store/user/actions';
import { connect, ConnectedProps } from 'react-redux';
import { CurrencyCode } from '../../models/currency-code';

const mapState = (state: RootState) => ({
    user: state.userState.user,
    currencies: state.currenciesState.currencies
});

const mapDispatch = {
    updateSelectedCurrency: updateSelectedCurrency
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;
type CurrencyOption = IOptionType<CurrencyCode>;

export interface IState {
    options: ReadonlyArray<CurrencyOption>;
    selectedOption: CurrencyOption;
}

class NavContainerComponentInternal extends Component<Props, IState> {
    static getDerivedStateFromProps(nextProps: Readonly<Props>): Partial<IState> | null {
        const user = nextProps.user;
        const currencies = nextProps.currencies;

        const options: ReadonlyArray<CurrencyOption> = user.allowedCurrencies.map(allowed => {
            const currency = currencies.find(x => x.code === allowed);
            return {
                label: currency.description,
                value: currency.code
            };
        });

        return {
            selectedOption: options.find(x => x.value === user.selectedCurrency),
            options: options
        };
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            options: [],
            selectedOption: {
                value: null,
                label: null,
            }
        };
    }

    render(): ReactNode {
        return (
            <Navbar bg='dark' variant='dark' sticky='top' className={'international-store-navbar'}>
                <Nav>
                    <Nav.Link as={Link} to={'/goods'}>Goods</Nav.Link>
                    <Nav.Link as={Link} to={'/cart'}>Cart</Nav.Link>
                    <div className={'international-store-navbar__currency'}>
                        <Navbar.Text>Select currency: </Navbar.Text>
                        <div className={'international-store-navbar__select'}>
                            <Select options={this.state.options}
                                    value={this.state.selectedOption}
                                    onChange={x => this._onCurrencySelected(x)}
                                    placeholder={''}
                            />
                        </div>
                    </div>
                </Nav>
            </Navbar>
        );
    }

    private _onCurrencySelected(selectedOption: ValueType<CurrencyOption>): void {
        const option = selectedOption as CurrencyOption;
        this.props.updateSelectedCurrency(option.value);
    }
}

export const NavContainerComponent = connector(NavContainerComponentInternal);
