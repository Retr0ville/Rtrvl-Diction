/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { FcSpeaker } from 'react-icons/fc';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  height: 100%;
  margin-top: -1rem;
  .inv {
    width: calc(100% - var(--d) - 1rem);
  }
  --d: 91.16px;
  --ad: calc(var(--d) + var(--inf));
  --td: calc(var(--d) / 4);
  --inf: 999px ;
  .corner {
    width: var(--ad);
    height: 101%;
    background: linear-gradient(to bottom, #06d6a0 16px, #fff 16px 100%);
  }
  .left {
    top: 0px;
    left: calc((var(--d)/-1.5) - var(--inf));
    border-radius: 0 var(--td) 0 0;
  }
  .right {
    top: 0px;
    right: calc((var(--d)/-1.5) - var(--inf));
    border-radius: var(--td) 0 0 0;
  }
  @media only screen and (max-width: 480px) {
    .corner {
      display: none;
    }
    .inv {
      min-width: 320px;
    }
    margin-top: 1rem;
    .info {
    border-radius: 1rem;
    padding: 1rem !important;
    }    }
`;


const InfoBody = ({ randWord, def, handleSubmit }) => {
  const [wordSound, setWordSound] = useState<string>('');
  useEffect(() => {
    if(def.phonetics) {
    const sound = def.phonetics[0].audio || '';
    setWordSound(sound)
    }
  }, [def]);
  const audio = new Audio(wordSound);
  const playAudio = () => {
    audio.play();
  }

  return (
    <InfoWrapper className="body w-100 d-flex justify-content-center overflow-hidden hover-shadow-bot ">
      <div className="d-flex inv mw-1100 ">
        <div className="info d-flex justify-content-center position-relative w-100 mx-0 p-5 shadow-sm mx-lg-5 bg-color-secondary">
          <div className="left corner position-absolute" />
          <div className="right corner position-absolute" />

          {randWord.word && (
            <div className="mt-3 d-flex flex-column justify-content-center">
              <h3 className="fw-bolder mb-2">
                {`${randWord.word}:`}
              </h3>
              <span> (pronounced {' '}<small>{randWord.pronunciation})</small></span>
              <p className="mt-3">
                {randWord.definition}
              </p>
            </div>
          )}
          {(def.word || def.error) && (
            <div className="mt-3 px-2 px-lg-5 d-flex flex-column justify-content-center ">
              {def.error ?
                (
                  <h3 className="fw-bolder mb-2">
                    {def.error}
                  </h3>
                ) : (
                  <>
                    <div className="d-flex">
                      <h1 className="fw-bolder mb-2 me-2">
                        {def.word}
                      </h1>
                      <span>
                        <small>
                          {def.phonetic}
                        </small>
                      </span>
                      <FcSpeaker className="pointer"  onClick={playAudio}/>
                    </div>
                    <div className="meanings">
                      {
                        def.meanings.map((meaning: any) => {
                          return (
                            <div key={meaning.partOfSpeech}>
                              <h4 className="mt-4 mb-2 py-1 px-2 fit-content rounded-infinite bg-color-primary">
                                {meaning.partOfSpeech}
                              </h4>
                              <ol>
                                {
                                  meaning.definitions.map((defn: any) => {
                                    return (
                                      <li className="bg-def fit-content 
                                      hover-shadow-bot pointer pt-1  rounded-3 px-2" key={defn.definition}>
                                        <p>
                                          {defn.definition}
                                        </p>
                                        {defn.example && (
                                          <div className="ms-3 mb-3">
                                            <h6 className="fw-bolder mb-0">Example:</h6>
                                            <small className="fw-bold">
                                              {defn.example}
                                            </small>
                                          </div>
                                        )}
                                      </li>
                                    )
                                  })
                                }
                              </ol>
                              {(meaning.synonyms.length > 0) && (
                                <>
                                  <h5>Synonymns</h5>
                                  <div className="d-flex flex-wrap">
                                    {meaning.synonyms.map((syn: string) => {
                                      return (
                                        <div key={syn} className="rounded-infinite bg-color-alt hover-shadow2 pointer px-2 py-1 mx-1 mb-2" onClick={(e) => handleSubmit(e.currentTarget.innerText)}>
                                          {syn}
                                        </div>
                                      )
                                    })}
                                  </div>
                                </>
                              )}
                              {(meaning.antonyms.length > 0) && (
                                <>
                                  <h5>Antonymns</h5>
                                  <div className="d-flex flex-wrap">
                                    {meaning.antonyms.map((ant: string) => {
                                      return (
                                        <div key={ant} className="rounded-infinite pointer text-light hover-shadow2 bg-color-alt2 px-2 py-1 mx-1 mb-2" onClick={(e) => handleSubmit(e.currentTarget.innerText)}>
                                          {ant}
                                        </div>
                                      )
                                    })}
                                  </div>
                                </>
                              )}
                            </div>
                          )
                        })
                      }
                    </div>

                  </>
                )
              }
            </div>
          )}
        </div>
      </div>
    </InfoWrapper>
  );
}


export default InfoBody;