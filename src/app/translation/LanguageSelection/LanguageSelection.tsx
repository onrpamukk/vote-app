import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { StoreConnect } from '../../bases/StoreConnect';

import { TranslationService } from '../translate.service';
import { actionSetLanguage } from '../../store/actions/actionTranslation';

import TR from '../../assets/icons/tr.png';
import EN from '../../assets/icons/en.png';
import { Translate, TRANSLATE_REFS } from '..';

export class LanguageSelection extends StoreConnect<any, any> {
    constructor(props: any) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState((prevState: { dropdownOpen: any; }) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter() {
        this.setState({ dropdownOpen: true });
    }

    onMouseLeave() {
        this.setState({ dropdownOpen: false });
    }
    /* Dil seçimini tetikler. */
    onSelectedLanguage = (language: string) => {
        //Dil hem uygulama içerisinde hem de request isteklerinde yapıldığı için bu kısım eklenmiştir.
        window.location.reload(false);
        super.dispatchStoreAction(actionSetLanguage, [language])
    }

    render() {
        return (
            <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className="btn-transparent darken-1 border-none">
                    <Translate tKey={TRANSLATE_REFS.t_APP.t_LANGUAGE} />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => this.onSelectedLanguage(TranslationService.SUPPORTED_LANGUAGES.TR)}>
                        <img className="" src={TR} alt="tr" /> <Translate tKey={TRANSLATE_REFS.t_APP.t_TR} />
                    </DropdownItem>
                    <DropdownItem onClick={() => this.onSelectedLanguage(TranslationService.SUPPORTED_LANGUAGES.EN)}>
                        <img className="" src={EN} alt="en" /> <Translate tKey={TRANSLATE_REFS.t_APP.t_EN} />
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}