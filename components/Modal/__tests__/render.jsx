import React from 'react';
import { mount } from 'enzyme';
import Modal from '../index';


class ModalTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
        this.setState({ visible: true });
    }

    saveContainer = (container) => {
        this.container = container;
    };

    getContainer = () => this.container;

    render() {
        const { visible } = this.state;
        return (
            <div>
                <div ref={this.saveContainer} />
                <Modal
                    {...this.props}
                    visible={visible}
                    getContainer={this.getContainer}
                >
                    Here is content of Modal
                </Modal>
            </div>
        );
    }
}


describe('Верстка <Modal/>', () => {
    it('Дефолтная', () => {
        const modal = mount(<ModalTester />);
        expect(modal.render()).toMatchSnapshot();
    });
    it('Без кнопок в футере', () => {
        const modal = mount(<ModalTester footer={null} />);
        expect(modal.render()).toMatchSnapshot();
    });
    it('Без отступов в контентной области', () => {
        const modal = mount(<ModalTester extendedContent />);
        expect(modal.render()).toMatchSnapshot();
    });
});
