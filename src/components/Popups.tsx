import { useStore } from '@hooks/useCtx';
import Portal from '@shared/Portal';
import { Fragment } from 'react';
import { DetailsModal, Modal } from '.';
import success from '/img/success.png';

const Popups = () => {
  const { state, modalHandlers } = useStore();
  const { modalState } = state;
  return (
    <Fragment>
      {modalState.created ? (
        <Portal onClose={modalHandlers.closeCreatedModal}>
          <Modal
            title="Meeting has been created"
            desc="Your meeting has been successfully created. You can now view the meeting details."
            btnText="View Details"
            onClick={modalHandlers.openSummaryModal}
          />
        </Portal>
      ) : null}
      {modalState.summary ? (
        <Portal onClose={modalHandlers.closeSummaryModal}>
          <DetailsModal />
        </Portal>
      ) : null}
      {modalState.result ? (
        <Portal onClose={modalHandlers.closeResultModal}>
          <Modal
            hasIcon
            icon={success}
            title="Your meeting has been scheduled!"
            desc="Participants will be notified via an email notification and it will be added in their google callender for reminder"
            btnText="OK"
            onClick={modalHandlers.closeResultModal}
          />
        </Portal>
      ) : null}
    </Fragment>
  );
};

export default Popups;
