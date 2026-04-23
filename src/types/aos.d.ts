declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  }
  function init(options?: AosOptions): void;
  function refresh(): void;
}

export = AOS;
export as namespace AOS;
