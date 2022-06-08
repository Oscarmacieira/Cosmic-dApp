import { useEffect, useState } from "react";
import { StickerBottomLeft } from "../../components/ui/Stickers";
import { Container } from "../../layout/Container";
import SearchTopBar from "../../layout/SearchBar";
import { CosmicFarms } from "./cosmicFarms";
import { CosmicYield } from "./cosmicYield";
import { P2EFarm } from "./P2EFarm";

const YieldFarm = (props: any) => {
  useEffect(() => {
    document.title = "Yield Farms - Cosmic Exodus";
  });

  // Sett Page state, object and function
  const [page, setPage] = useState(props.page);
  const options = [
    { name: "Cosmic Farms", href: "/cosmic-farms" },
    { name: "Cosmic Yields", href: "/cosmic-yields" },
    { name: "P2E Farms", href: "/P2E-farms" },
  ];
  const changePage = (value: any) => {
    setPage(options.indexOf(value));
  };

  // Sett filters state, object and function
  const filterOptions = [{ name: "Deposited", isToggled: true }];
  const [filters, setFilters] = useState(filterOptions);

  const saveFilters = (value: any) => {
    setFilters(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StickerBottomLeft />

      <SearchTopBar
        currentPage={page}
        onSetPage={changePage}
        options={options}
        FilterOptions={filterOptions}
        onSaveFilters={saveFilters}
      />
      <Container>
        {page === 0 && <CosmicFarms />}
        {page === 1 && <CosmicYield />}
        {page === 2 && <P2EFarm />}
      </Container>
    </>
  );
};

export default YieldFarm;
