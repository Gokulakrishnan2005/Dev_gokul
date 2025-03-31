"use client"

import { useState } from "react"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"


// Define project data with categories
const projectsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    category: "ui design",
    alt: "UI Design Project",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    category: "web template",
    alt: "Web Template Project",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    category: "logo",
    alt: "Logo Project",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    category: "branding",
    alt: "Branding Project",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300",
    category: "ui design",
    alt: "UI Design Project",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300",
    category: "web template",
    alt: "Web Template Project",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/300",
    category: "logo",
    alt: "Logo Project",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/300",
    category: "branding",
    alt: "Branding Project",
  },
]

// Self-contained portfolio component - just copy this file into your project
function Portfolio() {
  // State to track the selected category
  const [activeCategory, setActiveCategory] = useState("all category")

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "all category"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory.toLowerCase())

  return (
    <div className="bg-[#d9d9d9] text-[#0a0a0a]">
      {/* Header */}
      

      {/* Hero Section */}
      <section id="about" className="px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              HI, I AM
              <br />
              GOKULA
              <br />
              KRISHNAN.
            </h1>
            <p className="text-[#767676] mt-4 mb-6">
              A highly creative and purpose-driven digital marketing specialist with over 10 years of experience.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-[#d3e97a] px-6 py-3 rounded-full font-medium">CONTACT ME</button>
              <span className="w-1 h-1 bg-[#0a0a0a] rounded-full"></span>
              {/* Replace with your own social icons if needed */}
              <a href="#" className="bg-[#0a0a0a] p-2 rounded-full">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-[#0a0a0a] p-2 rounded-full">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <div className="bg-[#f3f3f3] rounded-lg overflow-hidden m-10">
              {/* Replace with your own image */}
              {/* <img src="https://firebasestorage.googleapis.com/v0/b/my-first-project-6eebf.appspot.com/o/1719946982791gokul.jpeg?alt=media&token=8e3bb802-ba8c-4cf8-931f-ace4099a17f2" alt="Robert Garcia" className="w-100 h-100 object-cover rounded-lg" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 py-12 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">MY CAPABILITIES</h2>
          </div>
          <div>
            <p className="text-[#484848] mb-6">
              I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac laoreet ligula.
              Pellentesque ac ex at purus faucibus tristique ut et dolor.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">HTML</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">CSS</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">JAVASCRIPT</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">REACT</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">NODE.JS</span>
              <span className="px-6 py-3 bg-white rounded-full border border-[#c7c7c7]">FIGMA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Portfolio</h2>
          <p className="text-center text-[#767676] max-w-2xl mx-auto mb-8">
            Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim
            Velit Mollit. Lorem Ipsum
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All Category", "UI Design", "Web Template", "Logo", "Branding"].map((category) => (
              <button
                key={category}
                className={`font-medium transition-colors ${
                  activeCategory.toLowerCase() === category.toLowerCase()
                    ? "text-[#ffb400]"
                    : "text-[#0a0a0a] hover:text-[#767676]"
                }`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Project Button */}
            <div className="bg-[#ffb400] aspect-square flex items-center justify-center">
              <span className="text-4xl">+</span>
            </div>

            {/* Filtered Projects */}
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white p-4">
                <img src={project.image || "/placeholder.svg"} alt={project.alt} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Lets work together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#484848] mb-4">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a
                template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
              <div className="flex space-x-4 mt-6">
                {/* Replace with your own social icons if needed */}
                <a href="#" className="text-[#0a0a0a]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#0a0a0a]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#0a0a0a]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#0a0a0a]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#0a0a0a]">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="w-full p-4 bg-white border border-[#c7c7c7]" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full p-4 bg-white border border-[#c7c7c7]" />
                </div>
                <div className="text-right">
                  <button type="submit" className="bg-[#222222] text-white px-8 py-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

