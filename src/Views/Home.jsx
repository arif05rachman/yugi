import React, { useEffect, Suspense, useState, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
// get data
import { getCards } from "../store/actions";
// component 
import { Row, Container } from "react-bootstrap";
import NavbarComponent from "../Components/NavbarComponent";
import SpinnerComponent from "../Components/SpinnerComponent";
// import CarouselComponent from "../Components/CarouselComponent";
import FooterComponent from "../Components/FooterComponent";
import FillterComponent from "../Components/FillterComponent";

const CardLazy = lazy(() => import("../Components/CardComponent"));

export default function Home() {
  const [show, setShow] = useState(8);
  const [sort, setSort] = useState("");
  const [sortorder, setSortOrder] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCards({show}
        // `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${show}&offset=0`
      )
    );
  }, [show, dispatch]);
  const cards = useSelector((state) => state.cards.cards);
  // infinite
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
useEffect(() => {
  if (!isFetching) return;
  fetchMoreListItems();
}, [isFetching]);

function handleScroll() {
  if (
    window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight ||
    isFetching
  )
    return;
  setIsFetching(true);
}

function fetchMoreListItems() {
  setTimeout(() => {
    setShow(show+8)
    setIsFetching(false);
  }, 500);
}
  return (
    <>
      <NavbarComponent></NavbarComponent>
      {/* <CarouselComponent></CarouselComponent> */}
      <FillterComponent></FillterComponent>
      <hr className="border border-info w-75"></hr>
      <Container>
        <Row className="justify-content-center">
          <Suspense fallback={<SpinnerComponent />}>
            {cards.map((card) => {
              return <CardLazy card={card} key={card.id} />;
            })}
          </Suspense>
        </Row>
      <div className="text-center">
        {isFetching && <SpinnerComponent />}
      </div>
      </Container>
      <FooterComponent></FooterComponent>
    </>
  );
}
