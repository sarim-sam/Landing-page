import React from 'react';
import MyIntegration from './Pages/MyIntegration/myIntegration.jsx';
import MyTestimonialsOld from './Pages/MyTestimonialOld/myTestimonialOld.jsx';
import MyQuestions from './Pages/MyQuestions/myQuestions.jsx';
import MyCarousel from './Pages/MyCarousel/myCarousel.jsx';
import MyNewsletter from './Pages/MyNewsletter/myNewsletter.jsx';
import MyWorkflow from './Pages/MyWorkflow/myWorkflow.jsx';
import MyFooter from './Pages/MyFooter/myFooter.jsx';




function App() {
  return (
    <>
      <MyIntegration     />
      <MyTestimonialsOld />
      <MyCarousel        />
      <MyQuestions       />
      <MyNewsletter      />
      <MyWorkflow        />
      <MyFooter          />

    </>
  );
}

export default App;