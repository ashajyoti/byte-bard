import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const headerData = {
    logo: {
      icon: '/assets/logo.png' ,
      alt: "company logo",
      width: 100,
    },
    navItems: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "featured",
        href: "/featured",
      },
    ],
};

export const footerData = {
  icons: [
    { icon: <FaFacebook />, url: "/" },
    { icon: <FaTwitter />, url: "/" },
    { icon: <FaInstagram />, url: "/" },
  ],
};


export const aboutPageData = {
  images:[
    {src:"https://i.postimg.cc/YCJW7jv8/pexels-fauxels-3184357.jpg" , alt:"about us image 1"},
    {src:"https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg", alt:"about us image 2"}
    
  ],
  title:"About us ?",
  content:`Welcome to Byte Bard, a platform dedicated to providing insightful content. Founded in 2024, our mission is to describe the purpose or goal of the blogs, 
  e.g., educate, inspire, entertain our readers through high-quality articles, guides, and resources.
  At Byte Bard, we understand the importance of staying informed and 
  empowered in today's fast-paced world. Whether you're a seasoned expert or just starting to explore various topics, our goal is to cater to individuals at every stage of their journey. Our team of experienced writers and contributors work diligently to curate content that is informative,
   engaging, and relevant to our audience's interests and needs.
  With a commitment to accuracy and integrity, we strive to uphold the highest standards of professionalism in all our publications. 
  Each piece undergoes thorough research and review to ensure that our readers receive credible and reliable information they can trust.
  We believe in the power of community and aim to foster a supportive and inclusive environment where readers can connect, learn, and share their experiences. Whether it's through comments, forums, or social media, we encourage active participation and dialogue among our readership.
  Thank you for visiting Byte Bard. We're excited to have you join us on this journey of exploration, 
  discovery, and growth. If you have any questions, suggestions, or feedback, please don't hesitate to reach out. 
  Your input is invaluable as we continue to strive for excellence in serving our audience.`
}