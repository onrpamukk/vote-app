import { AMContactService, TYPES_AM } from '../components/DeleteModal/contact';

const getRemoveApproval = (itemName: string | null): Promise<boolean> => new Promise((resolve, _reject) => {
    AMContactService.eventShowModal.next({ modalType: TYPES_AM.REMOVE, itemName: itemName ? itemName : '', tKeyHeader: "asdasd", tKeyDescription: "asdasd" });

    AMContactService.callbackApply = () => resolve(true);
    AMContactService.callbackCancel = () => resolve(false);
});

const getApproveAnnouncement = (itemName: string | null): Promise<boolean> => new Promise((resolve, _reject) => {
    AMContactService.eventShowModal.next({ modalType: TYPES_AM.APPROVE, itemName: itemName ? itemName : '', tKeyHeader: "asdasd", tKeyDescription: "asdasd" });

    AMContactService.callbackApply = () => resolve(true);
    AMContactService.callbackCancel = () => resolve(false);
});

export const AMService = {
    getRemoveApproval,
    getApproveAnnouncement
};
