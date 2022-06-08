import { useEffect, useState } from "react";
import styled from "styled-components";
import { Toggler } from "../buttons/Toggler";

export const FilterDropDown = (props: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setIsOpen(false);
    props.onSelect(value);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  });

  return (
    <>
      {isOpen ? <Wrapper onTouchMove={toggling} onClick={toggling} /> : null}
      <DropDownContainer
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: isOpen ? "0px" : "20px",
          borderBottomRightRadius: isOpen ? "0px" : "20px",
          height: isOpen ? "36px" : "auto",
        }}
      >
        <DropDownHeader onClick={toggling}>
          {!isOpen ? (
            <>
              See Filters&nbsp;&nbsp;{" "}
              <img alt="down" src="svg/arrow-down.svg" />
            </>
          ) : (
            <>
              Close Filters
              <img alt="close" src="svg/close.svg" />
            </>
          )}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.options.map((option) => (
                <ListItem
                  // onClick={onOptionClicked(option)}
                  key={option.name}
                >
                  {option.name}
                  <div className="toggler" key={option}>
                    {" "}
                    <Toggler isToggled={option.isToggled} />
                  </div>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.117);
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
`;
const DropDownContainer = styled.div`
  width: fit-content;

  font-size: 12px;
  font-weight: 700;
  z-index: 2;
  position: relative;
  top: 1px;
  text-align: start;
  border-bottom: none;
  width: 150px;
  height: max-content;
  background: ${({ theme }) => theme.palette.color2};
`;
const DropDownHeader = styled.div`
  display: flex;
  padding: 4px 10px;
  height: 35px;
  line-height: 24px;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.color2};
  border-radius: 30px;
  width: 150px;
  color: ${({ theme }) => theme.palette.contrast};

  cursor: pointer;
  img {
    margin-top: auto;
    margin-bottom: auto;
    width: 20px;
    height: 20px;
    padding: 5px;
    border-radius: 40px;
    margin-left: 5px;
    background: ${({ theme }) => theme.palette.shy};
  }
`;
const DropDownListContainer = styled.div`
  position: absolute;

  width: 150px;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0px 3px 10px 0px #00000063;
`;
const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.palette.color2};
  box-sizing: border-box;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: none;
  width: 150px;
`;
const ListItem = styled.li`
  padding: 4px 12px;
  border-radius: 20px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  line-height: 24px;
  width: 100%;
  height: 35px;
  cursor: pointer;
  &:hover {
  }

  .toggler {
    position: relative;
    top: 5px;
  }
`;
