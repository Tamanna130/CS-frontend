import React from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from '../templates/Base/Navbar';
import HomeCarousel from '../templates/Base/Carousel';
import SectionCard from '../templates/Base/HomepageCards';

export default function Home() {
  return (
    <>
        <AppHeader></AppHeader>
        <HomeCarousel></HomeCarousel>

        <Container>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>StudentRoom - Browse Categories</h2>
          </div>
          <SectionCard></SectionCard>
        </Container>       
    </>
  );
}