import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

import { reducer } from "./reducer";

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
import illustrations from '../data/illustrations'

// Data
import { cards, footer, socials } from "../data/data";

const API_URL = `https://api.shrtco.de/v2/shorten?url=`;

const initialState = {
  shortenedURLs: JSON.parse(localStorage.getItem("shortenedURLs")) || [],
  copiedLinkIndex: null,
  menuOpen: false,
};

const App = () => {
  const [term, setTerm] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMobile = window.screen.width < 768;

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
      dispatch({
        type: "SHORTEN_LINK",
        payload: [...state.shortenedURLs, shortenedURL],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const copy = (index) => {
    navigator.clipboard.writeText(state.shortenedURLs[index].output);
    dispatch({ type: "SET_COPY_INDEX", payload: index });
  };

  return (
    <div className='app'>
      <header>
        <AppLogo logo={illustrations.logo} />

        <Burger
          toggleNav={() =>
            dispatch({ type: "TOGGLE_MENU", payload: !state.menuOpen })
          }
        />

        <nav
          className={`navbar {/* ${state.menuOpen ? "navbar--open" : ""} */}`}
        >
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
          <img src={illustrations.hero} className='hero__img' alt='' />
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
                isMobile ? illustrations.shortenMobile : illustrations.shortenDesktop
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
            {state.shortenedURLs.map((url, index) => {
              const isCopied = state.copiedLinkIndex === index;

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
            backgroundImage: `url("${isMobile ? illustrations.boostMobile : illustrations.boostDesktop}")`,
          }}
        >
          <h2>Boost your links today</h2>
          <button className='btn btn--cyan btn--round boost__btn btn--animate'>
            Get Started
          </button>
        </div>
      </section>
      <Footer links={footer} socials={socials} logo={illustrations.logo} />
    </div>
  );
};

export default App;
