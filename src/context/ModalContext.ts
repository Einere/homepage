export interface ModalData {
    image?: string;
    title: string;
    content: string;
    repository?: string;
}

export const defaultModalData: ModalData = {
    image: undefined,
    title: '',
    content: '',
    repository: undefined,
};


