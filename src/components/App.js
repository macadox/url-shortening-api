import React, { useState, useEffect, useRef } from "react";
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

const API_URL = `https://api.shrtco.de/v2/shorten?url=`;

const App = () => {
  const [term, setTerm] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState(null);
  const outputContainer = useRef(null);

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
    const links = [...outputContainer.current.children];

    // Select input
    links[index].querySelector(".shortener__output-url").select();
    document.execCommand("copy");
    // Focus button after copying
    links[index].querySelector(".shortener__copy").focus();

    setCopiedLinkIndex(index);
  };

  return (
    <div className='app'>
      <main>
        <URLShortenerSegment className='shortener'>
          <URLShortener
            onSubmit={(e) => shorten(e)}
            className='shortener__form'
          >
            <URLShortenerInput
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className='shortener__input'
            />
            <URLShortenerSubmit className='shortener__submit' />
          </URLShortener>
          <URLShortenerOutput
            className='shortener__output'
            ref={outputContainer}
          >
            {shortenedURLs.map((url, index) => {
              return (
                <div key={url.id} className='shortener__output-container'>
                  <URL className='shortener__input-url' link={url.input} />
                  <URLShortened
                    className='shortener__output-url'
                    link={url.output}
                  />
                  <URLCopyButton
                    className='shortener__copy'
                    index={index}
                    isCopied={copiedLinkIndex === index}
                    onClick={copy}
                  />
                </div>
              );
            })}
          </URLShortenerOutput>
        </URLShortenerSegment>
      </main>
    </div>
  );
};

export default App;

/*
      <header>
        <AppLogo />
        <Burger />
        <nav>
          <Menu>
            <MenuItem>
              <a href='' className='menu__button'>
                Features
              </a>
            </MenuItem>
            <MenuItem>
              <a href='' className='menu__button'>
                Pricing
              </a>
            </MenuItem>
            <MenuItem>
              <a href='' className='menu__button'>
                Resources
              </a>
            </MenuItem>
            <MenuItem>
              <a href='' className='menu__button'>
                Login
              </a>
            </MenuItem>
            <MenuItem>
              <a href='' className='menu__button'>
                Sign Up
              </a>
            </MenuItem>
          </Menu>
        </nav>
      </header>
      <section className='hero'></section>
      */
