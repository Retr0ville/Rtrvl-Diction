/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
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
      <InfoWrapper className="body w-100 d-flex justify-content-center overflow-hidden">
          <div className="d-flex inv mw-1100 ">
            <div className="info position-relative w-100 mx-0 p-5 rounded-bottom shadow-sm mx-lg-5 bg-color-secondary ">
              <div className="left corner position-absolute bg-whit" />
              <div className="right corner position-absolute bg-whit"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore tempora eum sed itaque corporis quis velit. Aut iste neque unde quidem? Dolore molestiae quibusdam voluptate eius, neque aliquam. Dolorum aut necessitatibus eum et animi, provident temporibus doloribus, eius laudantium ratione odio veniam exercitationem. Assumenda voluptatem hic alias! Porro mollitia corporis quis molestias aliquam dolorum modi sed architecto aut nemo ad quod, vel non deleniti esse qui tempora impedit soluta dolores sunt aperiam. Quidem architecto quia id. Maxime expedita, rem aspernatur deserunt corrupti nesciunt officia placeat excepturi? Tenetur aspernatur minima quia eaque. Temporibus, id perferendis nesciunt reprehenderit cupiditate facilis voluptates.</p>
            </div>
          </div>
      </InfoWrapper>
  );
}


export default InfoBody;