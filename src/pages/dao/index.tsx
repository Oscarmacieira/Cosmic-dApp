import { useEffect, useState } from "react";
import { Card } from "../../components/shapes/Card";
import { PopUp } from "../../components/ui/PopUp";
import {
  StickerBottomLeft,
  StickerTopRight,
} from "../../components/ui/Stickers";
import { Container } from "../../layout/Container";
import SearchTopBar from "../../layout/SearchBar";
import SecondPageTitle from "../../layout/SecondPageTitle";
import { Spacer } from "../../layout/Spacer";
import { TopNav } from "../../layout/TopNav";
import { getShortWallet } from "../../utils/shortWallet";
import { ticker } from "../../utils/ticker";
import { Choices } from "./components/Choices";
import { DatesProposition } from "./components/DatesProp";
import { Informations } from "./components/Informations";
import { PropositionList } from "./components/PropositionList";
import { ResultsContainer } from "./components/ResultsContainer";
import { TextContainer } from "./components/TextContainer";
import { Top10Votes } from "./components/Top10Votes";
import { VoteContainer } from "./components/VoteContainer";
import { WriteProp } from "./components/WriteProp";
import { FakeObjProp } from "./FakeObjProp";
import { DAOProposal, Grid, Grid3 } from "./styles";

const DAO = (props: any) => {
  useEffect(() => {
    document.title = "DAO - Cosmic Exodus";
  });
  const [isNewProp, setNewProp] = useState(false);
  const options = [{ name: "Create New Proposal", href: "" }];

  const changePage = () => {
    setNewProp(!isNewProp);
  };

  // Sett filters state, object and function
  const filterOptions = [
    { name: "Active", isToggled: true },
    { name: "DAO", isToggled: true },
    { name: "Community", isToggled: true },
  ];
  const [filters, setFilters] = useState(filterOptions);

  const saveFilters = (value: any) => {
    setFilters(value);
  };

  const [isPropDetail, setIsPropDetail] = useState(false);
  const handleIsPropDetail = () => {
    setIsPropDetail(!isPropDetail);
    handleOnUnderstand();
  };

  const [PropDetail, setPropDetail] = useState({
    id: "000001",
    title: "Should we increase piooner attack speed ?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    isActive: true,
    by: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
    startDate: "2020-03-25",
    endDate: "2020-04-25",
    options: [
      { name: "Option A", vote: 10 },
      { name: "Option B", vote: 30 },
      { name: "Option C", vote: 40 },
      { name: "Option D", vote: 10 },
    ],
    top10: [
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option A",
        power: 23.2,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option B",
        power: 16.2,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option A",
        power: 7.32,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option D",
        power: 4.51,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option A",
        power: 2.21,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option B",
        power: 1.02,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option C",
        power: 0.92,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option C",
        power: 0.81,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option C",
        power: 0.21,
      },
      {
        address: "0x893f0e3F94569fd8b29b0b9c2F9BaE4C27cCeE55",
        vote: "Option B",
        power: 0.02,
      },
    ],
  });

  const handleSetPropDetail = (
    title,
    description,
    isActive,
    options,
    top10
  ) => {
    handleIsPropDetail();
    setPropDetail({
      ...PropDetail,
      title: title,
      description: description,
      isActive: isActive,
      options: options,
      top10: top10,
    });
    setIsUnderstand(true);
  };
  const [isUnderstand, setIsUnderstand] = useState(true);
  const handleOnUnderstand = () => setIsUnderstand(!isUnderstand);

  return (
    <>
      {!isPropDetail && !isNewProp && (
        <>
          {" "}
          <SearchTopBar
            key={Math.random()}
            currentPage={isNewProp}
            onSetPage={changePage}
            options={options}
            FilterOptions={filterOptions}
            onSaveFilters={saveFilters}
          />
        </>
      )}
      <Container>
        {!isPropDetail && !isNewProp && (
          <>
            <SecondPageTitle title={"DAO"}>
              <p>Your voice, your vote!</p>
            </SecondPageTitle>
          </>
        )}
        {isNewProp ? (
          <>
            {" "}
            <TopNav onBack={changePage} text="DAO" />
            <PopUp
              text={`You need to have a minimum of 2k $${ticker} in order to submit a proposal`}
            />
            <Grid3>
              <WriteProp />
              <Choices />
              <DatesProposition />
            </Grid3>
          </>
        ) : !isPropDetail ? (
          <>
            <Spacer />
            <Card>
              <DAOProposal>
                {FakeObjProp.map((info) => {
                  return (
                    <PropositionList
                      key={Math.random()}
                      title={info.title}
                      isActive={info.isActive}
                      id={info.id}
                      by={getShortWallet(info.by)}
                      startDate={info.startDate}
                      endDate={info.endDate}
                      onView={() =>
                        handleSetPropDetail(
                          info.title,
                          info.description,
                          info.isActive,
                          info.options,
                          info.top10
                        )
                      }
                    />
                  );
                })}
              </DAOProposal>
            </Card>
            <Spacer />
          </>
        ) : (
          <>
            <TopNav onBack={handleIsPropDetail} text="DAO" />
            <br />
            <Grid>
              {" "}
              <div className="one">
                <TextContainer
                  title={PropDetail.title}
                  description={PropDetail.description}
                  isActive={PropDetail.isActive}
                  onUnderstand={handleOnUnderstand}
                />
                <div className="three">
                  {" "}
                  <ResultsContainer
                    options={PropDetail.options}
                    title={"Current Results"}
                  />
                  <Informations
                    id={PropDetail.id}
                    by={getShortWallet(PropDetail.by)}
                    startDate={PropDetail.startDate}
                    endDate={PropDetail.endDate}
                  />
                </div>
              </div>
              <div className="two">
                <VoteContainer
                  options={PropDetail.options}
                  isDisabled={isUnderstand}
                />
                <Top10Votes
                  style={{ height: "fit-content" }}
                  title={"Top 10 votes"}
                  isDisabled={isUnderstand}
                  options={PropDetail.top10}
                />
              </div>
              <div className="five"></div>
            </Grid>
          </>
        )}
      </Container>{" "}
      {isNewProp && (
        <>
          <StickerTopRight /> <StickerBottomLeft />
        </>
      )}
    </>
  );
};

export default DAO;
