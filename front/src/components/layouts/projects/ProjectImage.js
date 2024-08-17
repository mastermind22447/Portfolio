import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { CardMedia, Modal } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
  modalImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

function ProjectImage({ imageUrl }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        onClick={handleOpen}
      />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="project-image-modal"
        aria-describedby="project-image-modal-description"
      >
        <div className={classes.modalContent}>
          <img
            className={classes.modalImage}
            src={imageUrl}
            alt="project image"
          />
        </div>
      </Modal>
    </>
  );
}

export default ProjectImage;
