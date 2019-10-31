import React from "react";
import "./Deleted.css";

const Deleted = () => {
  return (
    <div
      class="modal fade deleted"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <p>Are you sure you want to delete 1 message?</p>
          <div class="modal-footer">
            <p data-dismiss="modal">Cancel</p>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deleted;
