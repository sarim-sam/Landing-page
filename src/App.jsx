import React from 'react';
import MyIntegration from './Pages/MyIntegration/myIntegration.jsx';
import MyQuestions from './Pages/MyQuestions/myQuestions.jsx';
import MyNewsletter from './Pages/MyNewsletter/myNewsletter.jsx';
import MyWorkflow from './Pages/MyWorkflow/myWorkflow.jsx';
import MyFooter from './Pages/MyFooter/myFooter.jsx';
import MyTestimonial from './Pages/MyTestimonial/myTestimonial.jsx';




function App() {
  return (
    <div className='flex flex-col gap-4'>
      <MyIntegration     />
      <MyTestimonial     />
      <MyQuestions       />
      <MyNewsletter      />
      <MyWorkflow        />
      <MyFooter          />

    </div>
  );
}

export default App;