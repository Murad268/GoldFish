import React, {useEffect} from 'react';
import OneNewsPage from '../components/OneNewsPage/OneNewsPage';
const NewsPage = () => {
  useEffect(() => {
   window.scrollTo(0, 0);
  }, [])
   return (
      <>
         <OneNewsPage/>
      </>
   );
};

export default NewsPage;