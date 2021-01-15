import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import AppLogo from "./AppLogo";
import Burger from "./Burger";
import MenuItem from "./MenuItem";
import Menu from "./Menu";

import URLShortenerSegment from "./URLShortenerSegment";
import URLShortener from "./URLShortener";
import URLShortenerInput from "./URLShortenerInput";
import URLShortenerSubmit from "./URLShortenerSubmit";
import URLShortenerOutput from "./URLShortenerOutput";
import URL from "./URL";
import URLShortened from "./URLShortened";
import URLCopyButton from "./URLCopyButton";

import Card from "./Card";

import Footer from "./Footer";

// SVG's
import logo from "../images/logo.svg";
import hero from "../images/illustration-working.svg";
import shortenMobile from "../images/bg-shorten-mobile.svg";
import boostMobile from "../images/bg-boost-mobile.svg";
import shortenDesktop from "../images/bg-shorten-desktop.svg";
import boostDesktop from "../images/bg-boost-desktop.svg";

// Data
import { cards, footer, socials } from "../data/data";

const API_URL = `https://api.shrtco.de/v2/shorten?url=`;

const App = () => {
  const [term, setTerm] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = window.screen.width < 768;

  useEffect(() => {
    const lsData = JSON.parse(localStorage.getItem("shortenedURLs"));

    if (!lsData) {
      setShortenedURLs([]);
    } else {
      setShortenedURLs(lsData);
    }
  }, []);

  useEffect(() => {
    if (shortenedURLs.length > 0)
      localStorage.setItem("shortenedURLs", JSON.stringify(shortenedURLs));
  }, [shortenedURLs]);

  const shorten = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    try {
      const response = await axios.post(`${API_URL}${term}`);
      const { result } = response.data;
      const shortenedURL = {
        id: Date.now(),
        input: term,
        output: result.full_short_link,
      };
      setTerm("");
      setShortenedURLs(shortenedURLs.concat(shortenedURL));
    } catch (error) {
      console.error(error);
    }
  };

  const copy = (index) => {
    navigator.clipboard.writeText(shortenedURLs[index].output);
    setCopiedLinkIndex(index);
  };

  return (
    <div className='app'>
      <header>
        <AppLogo logo={logo} />
        <Burger toggleNav={() => setMenuOpen(!menuOpen)} />
        <nav className={`navbar ${menuOpen ? "navbar--open" : ""}`}>
          <Menu className='menu'>
            <MenuItem className='menu__item'>
              <a href='/' className='btn btn--menu'>
                Features
              </a>
            </MenuItem>
            <MenuItem className='menu__item'>
              <a href='/' className='btn btn--menu'>
                Pricing
              </a>
            </MenuItem>
            <MenuItem className='menu__item'>
              <a href='/' className='btn btn--menu'>
                Resources
              </a>
            </MenuItem>
            <div className='fancy-line'></div>
            <MenuItem className='menu__item'>
              <a href='/' className='btn btn--menu'>
                Login
              </a>
            </MenuItem>
            <MenuItem className='menu__item'>
              <a
                href='/'
                className='btn btn--cyan btn--menu btn--round btn--animate'
              >
                Sign Up
              </a>
            </MenuItem>
          </Menu>
        </nav>
      </header>
      <section className='hero'>
        <div className='hero__img-container'>
          <img src={hero} className='hero__img' alt='' />
        </div>
        <div className='hero__content'>
          <h1 className='hero__title'>More than just shorter links</h1>
          <p className='hero__subtitle'>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className='btn btn--cyan btn--round hero__button btn--animate'>
            Get Started
          </button>
        </div>
      </section>
      <main className='main'>
        <URLShortenerSegment className='shortener'>
          <URLShortener
            onSubmit={(e) => shorten(e)}
            className='shortener__form'
            style={{
              backgroundImage: `url("${
                isMobile ? shortenMobile : shortenDesktop
              }")`,
            }}
          >
            <URLShortenerInput
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className='shortener__input'
              required
            />
            <URLShortenerSubmit className='shortener__submit btn btn--cyan btn--square' />
          </URLShortener>
          <URLShortenerOutput className='shortener__output-container'>
            {shortenedURLs.map((url, index) => {
              const isCopied = copiedLinkIndex === index;

              return (
                <div key={url.id} className='shortener__output'>
                  <URL className='shortener__input-url' link={url.input} />
                  <URLShortened
                    className='shortener__output-url'
                    link={url.output}
                  />
                  <URLCopyButton
                    className={`shortener__copy btn btn--cyan btn--square ${
                      isCopied && "shortener__copy--is-copied"
                    }`}
                    index={index}
                    isCopied={isCopied}
                    onClick={copy}
                  />
                </div>
              );
            })}
          </URLShortenerOutput>
        </URLShortenerSegment>
      </main>
      <section className='section advanced'>
        <div className='section__header'>
          <h2 className='section__title'>Advanced Statistics</h2>
          <p className='section__subtitle'>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <div className='section__content'>
          {cards.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </section>
      <section className='boost section'>
        <div
          className='boost-wrapper'
          style={{
            backgroundImage: `url("${isMobile ? boostMobile : boostDesktop}")`,
          }}
        >
          <h2>Boost your links today</h2>
          <button className='btn btn--cyan btn--round boost__btn btn--animate'>
            Get Started
          </button>
        </div>
      </section>
      <Footer links={footer} socials={socials} logo={logo} />
    </div>
  );
};

export default App;
