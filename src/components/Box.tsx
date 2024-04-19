 import React from 'react'

 type StyleSheet = {
    fonFamily: string;
 }

 type BoxProps = {
    tag: any;
    styleSheet: StyleSheet;
    children: React.ReactNode;
 }
 
 const Box = ({ tag, styleSheet, children }: BoxProps) => {
   
    const Tag = tag || 'div';
   
    return (
     <Tag style={styleSheet}>
        {children}
     </Tag>
   )
 }
 
 export default Box