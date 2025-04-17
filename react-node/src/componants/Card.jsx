import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    // {/* Filtered Projects */}
    // {filteredProjects.map((project) => (
    //   <div key={project.id} className="bg-white p-4">
    //     <img src={project.image || "/placeholder.svg"} alt={project.alt} className="w-full h-auto" />
    //   </div>
    // ))}
    <StyledWrapper>
      <section id="card1" className="card">
      <img 
      src="https://picsum.photos/200/300" 
      alt="Image Icon" 
      className="w-full h-full object-cover rounded-lg" 
      />
        <div class="card__content" >
          <p className="card__title">Lorem Ipsum</p>
          <p className="card__description bg">
            I Love card to place my products in a site.
          </p>
        </div>
      </section>
    </StyledWrapper>
    // {/* Portfolio Section */}
  //   <section id="projects" className="px-6 py-12">
  //   <div className="max-w-6xl mx-auto">
  //     <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
  //     <p className="text-center text-[#767676] max-w-2xl mx-auto mb-8">
  //       Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim
  //       Velit Mollit. Lorem Ipsum
  //     </p>

  //     {/* Categories */}
  //     <div className="flex flex-wrap justify-center gap-4 mb-8">
  //       {["All Category", "UI Design", "Web Template", "Logo", "Branding"].map((category) => (
  //         <button
  //           key={category}
  //           className={`font-medium transition-colors ${
  //             activeCategory.toLowerCase() === category.toLowerCase()
  //               ? "text-[#ffb400]"
  //               : "text-[#0a0a0a] hover:text-[#767676]"
  //           }`}
  //           onClick={() => setActiveCategory(category.toLowerCase())}
  //         >
  //           {category}
  //         </button>
  //       ))}
  //     </div>

  //     {/* Portfolio Grid */}
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {/* Add Project Button */}
  //       <div className="bg-[#ffb400] aspect-square flex items-center justify-center">
  //         <span className="text-4xl">+</span>
  //       </div>

  //       {/* Filtered Projects */}
  //       {filteredProjects.map((project) => (
  //         <div key={project.id} className="bg-white p-4">
  //           <img src={project.image || "/placeholder.svg"} alt={project.alt} className="w-full h-auto" />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </section>
  );
}

const StyledWrapper = styled.div`
  section.card {
    position: relative;
    width: 250px;
    height: 250px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .card svg {
    fill: #000;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #f2f2f2;
    color: #ffffff;
  }

  .card__content {
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  }

  .card:hover .card__content {
    transform: rotateX(0deg);
    
    }
  
  .card:hover  img{
    filter: blur(10px);
  }

  .card__title {
    margin: 0;
    padding-left: 5px;
    font-size: 24px;
    color: #000000;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #000000;
    line-height: 1.4;
  }

  @media (prefers-color-scheme: dark) {
    .card:hover {
    box-shadow: 0 8px 16px #000000;
    }
  }*/`;

export default Card;
