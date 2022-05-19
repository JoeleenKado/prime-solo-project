import { AriaAttributes, DOMAttributes } from "react";


declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      htmlFor?: string;
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