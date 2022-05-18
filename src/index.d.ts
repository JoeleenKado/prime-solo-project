import { AriaAttributes, DOMAttributes } from "react";


declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      htmlFor?: string;
      // rows?: number;
    }
  }

  declare global {
    namespace JSX {
      interface IntrinsicElements {
        'center': any;
        'Router': any;
        'Link' : any;
      }
    }
  }