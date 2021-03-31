declare namespace React {
  export default any;
}

declare namespace SSR {
  export default string;
}

declare module "*.jpeg" {
  const type: string;
  export default type;
}
