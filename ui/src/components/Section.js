import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ViewContext from '../util/ViewContext';

function Section({ children, name, ...restProps }) {
  const [ref, inView] = useInView({ rootMargin: '-50% 0px' });
  const { activeView, setActiveView } = React.useContext(ViewContext);

  useEffect(() => {
    if (inView) {
      setActiveView(name);
    }
  }, [inView]);

  return (
    <div className={`${name}-section`} id={name} ref={ref} {...restProps}>
      {children}
    </div>
  );
}

export default Section;
