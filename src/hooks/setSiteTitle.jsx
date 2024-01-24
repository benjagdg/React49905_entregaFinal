import { useEffect } from 'react';

export const setSiteTitle = (pageTitle = 'Wabit Store') => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}
