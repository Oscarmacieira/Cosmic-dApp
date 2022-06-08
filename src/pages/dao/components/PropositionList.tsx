import { SquareButton } from "../../../components/buttons/squareButton";
import { Close, Open } from "../styles";

export const PropositionList = (props: any) => {
  return (
    <>
      <div className="proposition-card">
        {props.isActive ? <Open>Open</Open> : <Close>Closed</Close>}

        <h2>{props.title}</h2>
        <div className="icons-container">
          <IconsList icon={"doc"} text={props.id + "#"} />
          <IconsList icon={"by"} boldText={"By:"} text={props.by} />
          <IconsList icon={"flag"} boldText={"Start:"} text={props.startDate} />
          <IconsList icon={"done"} boldText={"End:"} text={props.endDate} />
          <SquareButton
            onClick={() => {
              props.onView();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            View
          </SquareButton>
        </div>
      </div>
    </>
  );
};

export const IconsList = (props: any) => {
  return (
    <>
      <div className="flex">
        <img
          style={{ marginRight: "10px" }}
          alt="icons"
          src={"/svg/" + props.icon + ".svg"}
        />
        <p className="icon-info">
          {" "}
          <b>{props.boldText} </b>
          {props.text}
        </p>
      </div>
    </>
  );
};
