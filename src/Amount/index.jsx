import React from 'react';
import PropTypes from 'prop-types';
import { getCurrencyMeta } from '../lib/currency';
import Wrapper from './styled';


const AMOUNT_MAJOR_PART_SIZE = 3;
const MINUS_SIGN_HTML_CODE = '\u2212';

function createSplitter(partSize) {
    const parts = (str) => {
        const { length } = str;
        if (length <= partSize) {
            return [str];
        }
        const from = length - partSize;
        return [str.slice(from, length)].concat(parts(str.slice(0, from)));
    };
    return parts;
}

export function format(value, minority, iso) {
    const meta = getCurrencyMeta(iso);
    const isNegative = value < 0;
    const valueAbs = Math.abs(value);
    const valueAbsStr = valueAbs.toFixed(minority);
    const numberParts = valueAbsStr.split('.');
    const majorPart = numberParts[0];
    const minorPart = numberParts[1];
    const amountSplitter = createSplitter(AMOUNT_MAJOR_PART_SIZE);
    const majorPartFormatted = amountSplitter(majorPart).reverse().join(meta.majorSplitter);
    const formattedValueStr = meta.template
        .replace('V', majorPartFormatted + (minorPart ? `${meta.minorSplitter}${minorPart}` : ''))
        .replace('C', meta.symbol);
    return {
        majorPart: majorPartFormatted,
        minorPart,
        amountValue: formattedValueStr,
        isNegative,
        currencySymbol: meta.symbol,
    };
}


/**
 * Форматирование числа в валюту
 *
 * @develop
 * @version 1.0.0
 */
export default class Amount extends React.PureComponent {
    static propTypes = {
        /**
         * Сумма
         */
        value: PropTypes.number,
        /**
         * Количество знаков после запятой
         */
        minority: PropTypes.number,
        /**
         * ISO код валюты
         */
        iso: PropTypes.string.isRequired,
    };

    static defaultProps = {
        value: 0,
        minority: 0,
    };

    render() {
        const { value, minority, iso } = this.props;
        const { isNegative, amountValue } = format(value, minority, iso);
        return (
            <Wrapper>
                {isNegative && MINUS_SIGN_HTML_CODE}
                {amountValue}
            </Wrapper>
        );
    }
}
