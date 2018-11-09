import React from "react";
import styled from "styled-components";
import { Modal, Typography, Card } from "@material-ui/core";

const OrderModal = ({ isOpen, toggleModal, category }) => {
  // ska flyttas till json server sedan
  let itemsOfCategory = [];
  if (category === "Dryck") {
    itemsOfCategory = ["Öl", "Coca Cola", "Vin", "Sprit"];
  } else if (category === "Mat") {
    itemsOfCategory = ["Hamburgare", "Pommes", "Korv", "Korvbröd"];
  } else if (category === "Kaffe") {
    itemsOfCategory = ["Kaffe", "Kaffefilter", "Mjölk"];
  } else if (category === "Snacks") {
    itemsOfCategory = ["Chips", "Popcorn", "Choklad"];
  }

  return (
    <StyledModal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={toggleModal}
    >
      <ModalContent>
        <StyledTypography variant="display1" id="simple-modal-description">
          Beställ {category.toLowerCase()}
        </StyledTypography>
        {itemsOfCategory.map(item => (
          <StyledCard key={item}>{item}</StyledCard>
        ))}
      </ModalContent>
    </StyledModal>
  );
};

const StyledCard = styled(Card)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100px;
    margin: 10% 2% 0% 2%;
    color: white;
    background-color: rgba(49, 73, 45, 0.87);
    box-shadow: 2px 2px 25px 4px rgba(212, 212, 212, 0.49);
    border-radius: 2px;
    transition: 0.3s;

    &:hover {
      opacity: 1;
      background-color: rgba(233, 233, 233, 0.79);
      transition: 1s ease;
      color: black;
    }
  }
`;

const StyledTypography = styled(Typography)`
  &&& {
    letter-spacing: 2px;
    font-weight: 200;
  }
`;

const StyledModal = styled(Modal)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  padding: 2%;
  border: none;
  background: white;
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export default OrderModal;
