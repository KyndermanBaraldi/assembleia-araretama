'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { posts } from "@/data/bd"
import Link from 'next/link';

const CarrosselCards: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {posts.map((post) => (
        <div key={post.id} className="cards">
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Por {post.author}</p>
            <p>{post.date}</p>

            <div className='card-button'>
              <Link id='card-button' href="#">Ir para postagem</Link>
            </div>
          </div>
          
        </div>
      ))}
    </Slider>
  );
};

export default CarrosselCards;