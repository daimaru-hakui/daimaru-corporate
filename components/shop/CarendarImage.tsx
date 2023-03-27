import React from "react";
import OpenInNewTwoToneIcon from "@mui/icons-material/OpenInNewTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";

type Props = {
  title: string;
  images: string;
  icon?: boolean;
};

export const CarendarImage = ({ title, images, icon }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: "0 15px 15px",
  };

  return (
    <>
      <span
        className="mt-6 cursor-pointer inline-block underline hover:no-underline hover:text-gray-600"
        onClick={handleOpen}
      >
        <span className="mr-1 ">{title}</span>
        {icon && <OpenInNewTwoToneIcon fontSize="small" />}
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center p-3" onClick={handleClose}>
            <CloseIcon />
            <span className="text-sm">閉じる</span>
          </div>
          {images && <img src={images} className="mx-auto" alt="カレンダー" />}
        </Box>
      </Modal>
    </>
  );
};
