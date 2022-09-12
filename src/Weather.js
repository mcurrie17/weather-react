import React from "react";

export default function Weather() {
  let weatherAppData = {
    city: "Austin",
    date: "Aug 11",
    desc: "Windy",
    temp: "100",
    img: "",
    humidity: "80",
    wind: "14",
  };
  return (
    <div className="Weather">
      <div className="weatherWrapper">
        <form>
          <div className="row searchBar">
            <div className="col-7 offset-md-1">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-2 p-0">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                className="btn btn-primary locationButton"
                value="📍"
              />
            </div>
          </div>
        </form>
        <div className="searchInfo">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{weatherAppData.city}</h1>
              <ul>
                <li>
                  Last updated:
                  <span>{weatherAppData.date}</span>
                  <li>
                    <span>{weatherAppData.desc}</span>
                  </li>
                </li>
                <li>
                  <span>
                    Humidity :
                    <span className="highlightColor">
                      <span>{weatherAppData.humidity}</span>%
                    </span>
                    <span className="bullet"> • </span>
                    Wind :
                    <span className="highlightColor">
                      <span> {weatherAppData.wind}</span> <span> mph</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt=""
                  className="float-left mainIcon"
                />
                <div className="currentTemp">
                  <span className="temperature">{weatherAppData.temp}</span>
                  <span className="unit">
                    {" "}
                    <a href="/" className="active" rel="noreferrer">
                      {" "}
                      °F{" "}
                    </a>
                    |
                    <a href="/" rel="noreferrer">
                      °C{" "}
                    </a>{" "}
                  </span>
                  <div className="feels-like">
                    {" "}
                    Feels like : {weatherAppData.temp}
                    <span className="justify-content-right highlightColor"></span>
                    °
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weatherForecast"></div>
        <footer>
          This app was coded by Megan Currie and is
          <a
            href="https://github.com/mcurrie17/My-Weather-App"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
          <a href="https://mellow-boba-163d89.netlify.app/" rel="noreferrer">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
