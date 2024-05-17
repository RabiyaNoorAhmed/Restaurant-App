import React from 'react';
import TestimonialsSection from './TestimonialsSection'; // Import the TestimonialsSection component
import testimonials from './testimonialsData'; // Import testimonials data

const Testimonials = () => {
    return (
        <div>
            {/* Render the TestimonialsSection component and pass the testimonials data */}
            <TestimonialsSection testimonials={testimonials} />
        </div>
    );
};

export default Testimonials;

