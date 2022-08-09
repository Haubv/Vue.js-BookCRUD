import Vue, { VNode } from 'vue'
declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }

  }

  interface Window {
    AdobeDC: any; // 👈️ turn off type checking
  }
}

export {};