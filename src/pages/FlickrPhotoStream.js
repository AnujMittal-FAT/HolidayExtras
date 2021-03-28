import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { CAlert } from "@coreui/react";

import FlickerService from "../services/FlickerService";
import SearchInput from "../component/molecules/SearchInput";

const FlickrPhotoStream = () => {
  const [alertMessage, setalertMessage] = useState({
    message: "",
    colour: "danger",
  });
  const [locations, setlocations] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      const bottom =
        Number(
          (
            e.target.documentElement.scrollHeight -
            e.target.documentElement.scrollTop
          ).toFixed(0)
        ) -
          e.target.documentElement.clientHeight <=
        1;
      if (bottom) {
        FlickerService.getFeed()
          .then((response) => {
            setsearchResults((prevState) => [
              ...prevState,
              ...response.data.items,
            ]);
          })
          .catch((error) => console.log("error", error));
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    FlickerService.getFeed()
      .then((response) => {
        setlocations(response.data.items);
        setsearchResults(response.data.items);
      })
      .catch((error) => console.log("error", error));
    return () => {};
  }, []);

  useEffect(() => {
    if (searchValue.length < 1) {
      setsearchResults(locations);
    } else {
      setsearchResults((locations) =>
        locations.filter((item) =>
          item["title"].toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);

  return (
    <Col className="FlickrPhotoStream">
      {alertMessage["message"] && (
        <CAlert color={alertMessage["colour"]} closeButton>
          {alertMessage["message"]}
        </CAlert>
      )}
      <Row className="mb-4">
        <Col>
          <h1>Flickr Photo Stream</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 4, offset: 3 }}>
          <SearchInput
            name="location search"
            type="text"
            placeholder="Title search"
            value={setsearchValue}
          />
        </Col>
      </Row>
      <Row className="location-list">
        {searchResults &&
          searchResults.map((loc, ldx) => (
            <Col md="3" key={ldx}>
              <div className="location-holder">
                <div className="location-name text-dark shadow">
                  <img src={loc.media.m} className="photo" url={loc.link} />
                  <p>
                    <a href={loc.link}>
                      {loc.title !== " " ? loc.title : "No title"}
                    </a>{" "}
                    by <a href={loc.link}>{loc.author}</a>
                  </p>
                  <p>tags: {loc.tags ? loc.tags : "none"}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Col>
  );
};

export default FlickrPhotoStream;
