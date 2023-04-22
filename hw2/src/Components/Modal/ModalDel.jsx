import { Modal, Button } from "@mui/material";
import React from "react";

const ModalDel = ({ deleted, active, setActive, id }) => {
  return (
    <Modal open={active} onClose={() => setActive(false)}>
      <div className="mod">
        <div className="modal_content">
          <div className="modal_header">
            <p>Вы действительно хотите удалить такой по по id {id}</p>
            <Button variant="outlined" onClick={() => deleted(id)}>
              Delete
            </Button>
          </div>
          <div className="modal_footer">
            <button onClick={() => setActive(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDel;
