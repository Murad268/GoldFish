import React from 'react';
import './map.css'
const Map = () => {
   return (
      <div className='map'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.7131485793575!2d37.655343115607295!3d55.7461128805516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54aeebb783f65%3A0x2e7b1059e0dbc519!2z0JzQsNC70YvQuSDQlNGA0L7QstGP0L3QvtC5INC_0LXRgC4sINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMDkwMDQ!5e0!3m2!1sru!2s!4v1649145869306!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
   );
};

export default Map;