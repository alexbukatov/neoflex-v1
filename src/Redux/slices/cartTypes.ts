export type CartStateT = {
  id:number; 
  img:string;
  title:string; 
  price:number; 
  rate:number;
  count:number;
  }
  
  export interface CartSliceStateI{
    items: CartStateT[],
    totalPrice: number,
  }