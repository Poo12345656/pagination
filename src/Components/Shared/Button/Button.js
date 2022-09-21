import React from 'react'
import classNames from 'classnames';

function Button({text,
    color,
    variant,
    as: Tag = "button",
    children,
    disabled ,
    ...rest
}) {
    const buttonClasses = classNames("buttonWrapper", {
      [[color]]: !!color,
      [[variant]]: !!variant,
      
  
    });
    return (
    <Tag className={buttonClasses} disabled={disabled} {...rest}>
        {text || children}
      </Tag>
    );
  }

export default Button