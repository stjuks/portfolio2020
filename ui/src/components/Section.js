import React from 'react';

const Section = React.forwardRef(({ children, name, ...restProps }, ref) => {
  return (
    <div id={name} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

export default Section;
