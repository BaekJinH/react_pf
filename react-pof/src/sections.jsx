import React, { useState, useContext, useRef } from 'react';
import Project from './data/project.json';
import PointerEventContext from './event/pointerEventContext';
import PointerEvent from './event/cursorPoint';
import { SectionContext, SectionProvider } from './event/fullPage';

export function Introduce() {
  // const sectionRefs = useContext(SectionContext);
  const svg = document.querySelector('svg');
  const path = svg.querySelector('path');

  function generateRandomBlob() {
    const numPoints = 10; // 점 개수
    const centerX = 100;
    const centerY = 100;
    const minRadius = 50;
    const maxRadius = 80;
    let pathData = "M"; // 시작점
  
    for (let i = 0; i <= numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const radius = Math.random() * (maxRadius - minRadius) + minRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      pathData += `${x},${y} `;
    }
  
    pathData += "Z"; // 닫기
    path.setAttribute("d", pathData);
  }
  
  generateRandomBlob(); // 초기 아메바 생성
  setInterval(generateRandomBlob, 2000); // 2초마다 랜덤하게 변경
  
  return (
    <section className="intro_sf" id="section1">
      <div className="int_wrap">
        <div className="left">
        <div class="img_textWrap">
          <div class="circleProfile">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F2F4F8" d="M70.2,-21.2C79.7,6.5,68.5,42.6,44.3,59.9C20.1,77.3,-16.9,75.8,-41.7,57.7C-66.4,39.7,-78.8,5,-69.8,-22C-60.8,-48.9,-30.4,-68.2,0,-68.2C30.3,-68.2,60.7,-48.9,70.2,-21.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          {/* <div className="profile">
            <img src="/frontend_portfolio/src/image/" alt="" />
          </div> */}
        </div>
        <div className="right">
          <ul className="info">
            {/* <li>백진혁</li>
            <li>만 24세 ( 1999/09/23 )</li>
            <li>제스아이앤씨 퍼블리셔 1년 6개월 근무 </li>
            <li>
              <p>간단 자기소개 / 다짐</p>
            </li>
            <li>
              <a href="#none">주소</a>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PagingRolling() {
  const areaRef = useRef(null);

  return (
    <PointerEventContext.Provider value={areaRef}>
      <section
        className="pg_swp"
        id="section2"
        ref={areaRef}
        style={{ height: '400px' }}
      >
        <PointerEvent />
        <div className="el_outer_wrap">
          <ul className="el_list">
            {Project.map((item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PointerEventContext.Provider>
  );
}

export function CodeSkills() {
  // const sectionRefs = useContext(SectionContext);
  return (
    <section className="cd_skl" id="section3">
      <a href="" />
    </section>
  );
}
