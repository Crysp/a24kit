import React from 'react';
import PropTypes from 'prop-types';
import { getCurrencySymbol } from '../lib/currency';
import Mask from '../MaskedInput/mask';
import Input from '../Input';
import Currency from './styled';


const DEFAULT_INTEGER_SIZE = 9;
const INTEGER_PART_SIZE = 3;


/**
 * Сплитит число в группы по 3
 *
 * @param {String} str - число строкой
 * @returns {Array.<String>}
 */
function splitInteger(str) {
    if (str.length <= INTEGER_PART_SIZE) {
        return [str];
    }
    const from = str.length - INTEGER_PART_SIZE;
    return [str.slice(from, str.length)].concat(splitInteger(str.slice(0, from)));
}


/**
 * @develop
 */
export default class AmountInput extends React.Component {
    static propTypes = {
        ...Input.propTypes,
        /**
         * ISO код валюты
         */
        currencyISO: PropTypes.string.isRequired,
        /**
         * Максимальное количество цифр во введенной сумме
         */
        numberLength: PropTypes.number,
    };

    static defaultProps = {
        numberLength: DEFAULT_INTEGER_SIZE,
    };

    state = {
        value: '',
    };

    maskPattern = null;

    mask = null;

    componentWillMount() {
        this.updateMaskByValue(this.getValue());
    }

    componentWillReceiveProps(nextProps) {
        const { value } = this.props;
        if (value !== nextProps.value) {
            this.updateMaskByValue(nextProps.value || '');
        }
    }

    onRef = (root) => {
        this.root = root;
    };

    onChange = (value) => {
        const { onChange } = this.props;
        this.setState({ value });
        if (onChange) {
            onChange(value, Number(value.toString().replace(/[^\d,]/g, '')));
        }
    };

    onProcessMaskInputEvent = (event) => {
        this.updateMaskByValue(event.target.value);
    };

    getMaxLength() {
        const { numberLength } = this.props;
        return Math.floor((numberLength - 1) / INTEGER_PART_SIZE) + numberLength;
    }

    getValue() {
        const { value } = this.props;
        const { value: localValue } = this.state;
        return typeof value === 'undefined' ? localValue : value;
    }

    updateMaskByValue(value) {
        const { numberLength } = this.props;
        const cleanValue = value.toString().replace(/[^\d,]/g, '');
        const length = Math.max(Math.min(cleanValue.length || 1, numberLength));
        this.maskPattern = splitInteger((new Array(length + 1)).join('1')).reverse().join(' ');
        this.mask = new Mask(this.maskPattern);
        if (this.root) {
            this.root.getMaskedInputInstance().setMask(this.maskPattern);
        }
    }

    render() {
        const { currencyISO } = this.props;
        const currencySymbol = getCurrencySymbol(currencyISO);

        return (
            <Input
                {...this.props}
                ref={this.onRef}
                maxLength={this.getMaxLength()}
                mask={this.maskPattern}
                value={this.getValue()}
                rightAddons={currencyISO && <Currency>{currencySymbol}</Currency>}
                onChange={this.onChange}
                onProcessMaskInputEvent={this.onProcessMaskInputEvent}
            />
        );
    }
}
