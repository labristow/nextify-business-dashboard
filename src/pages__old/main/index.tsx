import React, { useState } from "react";
import Title from "./layers/typography/Title";
import NextButton from "./layers/button/NextButton";
import Container from "./layers/container/Container";
import Bar from "./layers/bar/Bar";
import CardContainer from "./layers/container/CardContainer";
import BackButton from "./layers/button/BackButton";
import ButtonContainer from "./layers/container/ButtonContainer";
import CustomSelect from "./layers/select/CustomSelect";

function Main() {
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  const activateBtn = () => setIsBtnActive(true);
  const deactivateBtn = () => setIsBtnActive(false);
  return (
    <Container>
      <React.Fragment>
        <Bar />
        <Title />
        <CardContainer
          activateBtn={activateBtn}
          deactivateBtn={deactivateBtn}
        />
        <div className="my-5 h-80 p-2 w-full bg-gray-100">
          <CustomSelect />
        </div>
        <ButtonContainer>
          <React.Fragment>
            <BackButton isBtnActive={isBtnActive} />
            <NextButton isBtnActive={isBtnActive} />
          </React.Fragment>
        </ButtonContainer>
      </React.Fragment>
    </Container>
  );
}

export default Main;
