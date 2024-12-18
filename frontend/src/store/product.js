import {create} from 'zustand'

 export const useProductStore = create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProduct:async(newproduct)=>{
        if(!newproduct.name||!newproduct.image||!newproduct.price){
            return{success:false,message:"Please fill in all the fields."}
        }
        const res= await fetch("/api/products",{
            method:"POST",  
             headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newproduct),
        });
        const data= await res.json();
        set((state)=>({products:[...state.products,data.data]}))
        return {success:true ,message:"Product created successfully "};
    }
 }))

  
