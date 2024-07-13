import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Aditya Medical Care offers a wide range of services including general medicine,
           specialized treatments, and emergency care. 
           The center is committed to patient-centered care, ensuring that each individual 
           receives personalized attention and treatment tailored to their specific needs. 
           With a focus on quality and excellence, Aditya Medical Care strives to enhance 
           the well-being of its community through innovative medical practices and a holistic
           approach to health.
          </p>
      
          <p>
          Aditya Medical Care is a premier healthcare facility dedicated to providing
           comprehensive and compassionate medical services. Known for its state-of-the-art
           technology and a team of experienced healthcare professionals, Aditya Medical Care
           offers a wide range of services including general medicine, specialized treatments,
           and emergency care. The center is committed to patient-centered care, ensuring that 
          each individual receives personalized attention and treatment tailored to their specific needs.
         With a focus on quality and excellence, Aditya Medical Care strives to enhance the well-being of 
         its community through innovative medical practices, a holistic approach to health, and ongoing 
         community health education programs. This commitment to excellence and community involvement
          positions Aditya Medical Care as a trusted and vital part of the healthcare landscape.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;