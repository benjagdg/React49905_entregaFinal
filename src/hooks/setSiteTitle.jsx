import { useEffect } from 'react';

export const setSiteTitle = (pageTitle) => {
  useEffect(() => {
    document.title = pageTitle;
  }, []);
}
