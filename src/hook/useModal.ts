import {useEffect, useState} from "react";
import {defaultModalData} from "../context/ModalContext";
import {ModalType} from "../@types";
import {ModalBackgroundStyle} from "../component/ModalContainer/ModalBackground.style";

interface OptionType {
    initIsOpened?: boolean;
    initModalData?: ModalType;
}

export function useModal({initIsOpened = false, initModalData = defaultModalData}: OptionType) {
    const [isOpened, setIsOpened] = useState(initIsOpened);
    const [modalData, setModalData] = useState<ModalType>(initModalData);

    function toggleIsOpened() {
        setIsOpened(!isOpened);
        if(!isOpened) setModalData(defaultModalData);
    }

    useEffect(() => {
        console.log('useModal', isOpened, modalData);
    }, [isOpened, modalData]);

    return {
        ModalBackgroundStyle,
        isOpened,
        setIsOpened,
        modalData,
        setModalData,
        toggleIsOpened,
    };
}
