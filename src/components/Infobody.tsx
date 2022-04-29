/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
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
`;


const InfoBody = () => {
  return (
      <InfoWrapper className="body w-100 d-flex justify-content-center overflow-hidden hover-shadow-bot ">
          <div className="d-flex inv mw-1100 ">
            <div className="info position-relative w-100 mx-0 p-5 shadow-sm mx-lg-5 bg-color-secondary">
              <div className="left corner position-absolute" />
              <div className="right corner position-absolute"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, illum sint repellat, maiores modi perferendis dolorem dignissimos molestiae aperiam laudantium facilis necessitatibus a sunt 
              </p>
            </div>
          </div>
      </InfoWrapper>
  );
}


export default InfoBody;